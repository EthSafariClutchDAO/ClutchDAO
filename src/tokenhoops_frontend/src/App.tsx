
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import Tickets from "./pages/Tickets";
import Crowdfund from "./pages/Crowdfund";
import Wallet from "./pages/Wallet";
import Collection from "./pages/Collection";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import React, { useState, useEffect } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { createActor } from 'declarations/backend';
import { canisterId } from 'declarations/backend/index.js';



const network = process.env.DFX_NETWORK;
const identityProvider =
  network === 'ic'
    ? 'https://identity.ic0.app' // Mainnet
    : 'http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943'; // Local

    // Reusable button component
const Button = ({ onClick, children }) => <button onClick={onClick}>{children}</button>;

const App = () => {
  const [state, setState] = useState({
    actor: undefined,
    authClient: undefined,
    isAuthenticated: false,
    principal: 'Click "Whoami" to see your principal ID'
  });

  // Initialize auth client
  useEffect(() => {
    updateActor();
  }, []);

  const updateActor = async () => {
    const authClient = await AuthClient.create();
    const identity = authClient.getIdentity();
    const actor = createActor(canisterId, {
      agentOptions: {
        identity
      }
    });
    const isAuthenticated = await authClient.isAuthenticated();

    setState((prev) => ({
      ...prev,
      actor,
      authClient,
      isAuthenticated
    }));
  };

  const login = async () => {
    await state.authClient.login({
      identityProvider,
      onSuccess: updateActor
    });
  };

  const logout = async () => {
    await state.authClient.logout();
    updateActor();
  };

  const whoami = async () => {
    setState((prev) => ({
      ...prev,
      principal: 'Loading...'
    }));

    const result = await state.actor.whoami();
    const principal = result.toString();
    setState((prev) => ({
      ...prev,
      principal
    }));
  };

  return (
    <div>
      <h1>Who Am I?</h1>
      <div id="info-box" className="info-box">
        <div className="info-content">
          <p>
            <i className="fas fa-info-circle"></i> A <strong>principal</strong> is a unique identifier in the Internet
            Computer ecosystem.
          </p>
          <p>
            It represents an entity (user, canister smart contract, or other) and is used for identification and
            authorization purposes.
          </p>
          <p>
            In this example, click "Whoami" to find out the principal ID with which you're interacting with the backend.
            If you're not signed in, you will see that you're using the so-called anonymous principal, "2vxsx-fae".
          </p>
          <p>
            After you've logged in with Internet Identity, you'll see a longer principal, which is unique to your
            identity and the dapp you're using.
          </p>
        </div>
      </div>

      {!state.isAuthenticated ? (
        <Button onClick={login}>Login with Internet Identity</Button>
      ) : (
        <Button onClick={logout}>Logout</Button>
      )}

      <Button onClick={whoami}>Whoami</Button>

      {state.principal && (
        <div>
          <h2>Your principal ID is:</h2>
          <h4>{state.principal}</h4>
        </div>
      )}
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-clutch-surface">
          <Navbar />
          <main className="flex-grow pt-2 pb-8">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/crowdfund" element={<Crowdfund />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
