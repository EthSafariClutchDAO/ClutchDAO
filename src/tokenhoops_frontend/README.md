
# Clutch - Basketball & Sustainability Platform

Clutch is a web application that connects basketball opportunities with environmental sustainability. The platform allows users to collect and record plastic waste in exchange for tokens that can be redeemed for basketball-related rewards such as marketplace items, event tickets, and crowdfunding opportunities.

## Overview

Clutch incentivizes plastic waste collection by rewarding users with tokens based on the type and amount of plastic they collect. These tokens can then be used within the platform's ecosystem to:

- Purchase basketball-related items on the marketplace
- Get tickets to basketball events and games
- Support community basketball projects through crowdfunding
- Build a personal collection of basketball memorabilia

## File Structure

```
clutch/
├── public/                      # Static assets
│   ├── lovable-uploads/         # Uploaded images
│   └── favicon.ico              # Site favicon
├── src/
│   ├── components/
│   │   ├── collection/          # Plastic collection components
│   │   │   ├── AmountInput.tsx
│   │   │   ├── CollectionFormSchema.tsx
│   │   │   ├── CollectionPageHeader.tsx
│   │   │   ├── CollectionRecordsTable.tsx
│   │   │   ├── CollectionViewToggle.tsx
│   │   │   ├── LocationInput.tsx
│   │   │   ├── PlasticTypeCards.tsx
│   │   │   ├── PlasticTypeFilter.tsx
│   │   │   ├── PlasticTypeSelect.tsx
│   │   │   ├── RecordCollectionForm.tsx
│   │   │   ├── StatsOverview.tsx
│   │   │   └── TokensDisplay.tsx
│   │   ├── layout/              # Layout components
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   └── ui/                  # UI components
│   │       ├── ActivityCard.tsx
│   │       ├── CrowdfundCard.tsx
│   │       ├── ProductCard.tsx
│   │       ├── TicketCard.tsx
│   │       ├── TokenBalance.tsx
│   │       └── ... (shadcn UI components)
│   ├── hooks/                   # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                     # Utility libraries
│   │   └── utils.ts
│   ├── pages/                   # Page components
│   │   ├── Collection.tsx       # Plastic collection page
│   │   ├── Crowdfund.tsx        # Crowdfunding projects page
│   │   ├── Index.tsx            # Home page
│   │   ├── Marketplace.tsx      # Basketball products page
│   │   ├── NotFound.tsx         # 404 page
│   │   ├── Tickets.tsx          # Basketball events tickets page
│   │   └── Wallet.tsx           # User token wallet page
│   ├── utils/                   # Utility functions
│   │   └── plasticCollection.ts # Plastic collection utilities
│   ├── App.tsx                  # Main app component
│   ├── index.css                # Global CSS
│   ├── main.tsx                 # Application entry point
│   └── vite-env.d.ts           # Vite TypeScript declarations
├── index.html                  # HTML entry point
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── ... (other configuration files)
```

## Technologies Used

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **Data Fetching**: TanStack Query (React Query)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Form Handling**: React Hook Form with Zod validation

## Features

1. **Plastic Collection Recording**
   - Record different types of plastic waste (PET, HDPE, PVC, etc.)
   - Track collection amounts and locations
   - View historical collection records

2. **Token System**
   - Earn tokens based on plastic type and amount collected
   - View token balance and transaction history
   - Spend tokens on marketplace, tickets, and crowdfunding

3. **Marketplace**
   - Browse basketball-related products
   - Purchase items using earned tokens

4. **Basketball Event Tickets**
   - Browse available basketball events
   - Purchase tickets using earned tokens

5. **Crowdfunding**
   - Support basketball community projects
   - Contribute tokens to campaigns

6. **Personal Collection**
   - View and manage basketball memorabilia and collectibles

## Deployment Procedure

### Option 1: Deploy with Lovable

The easiest way to deploy your project is using Lovable's built-in deployment:

1. Open your project in [Lovable](https://lovable.dev/projects/ae746cb7-2662-4159-8f2d-ec3cb64800c7)
2. Click on **Share** in the top navigation
3. Select **Publish**
4. Your app will be deployed and a unique URL will be provided

### Option 2: Manual Deployment

#### Prerequisites

- Node.js (v16 or newer)
- npm or yarn

#### Build and Deploy

1. **Clone the Repository**
   ```sh
   git clone <repository-url>
   cd clutch
   ```

2. **Install Dependencies**
   ```sh
   npm install
   # or
   yarn
   ```

3. **Build the Project**
   ```sh
   npm run build
   # or
   yarn build
   ```
   This will create a `dist` directory with the built application.

4. **Deploy to Static Hosting Services**

   You can deploy the `dist` directory to various hosting services:

   **Netlify**:
   - Install Netlify CLI: `npm install -g netlify-cli`
   - Deploy: `netlify deploy --dir=dist`

   **Vercel**:
   - Install Vercel CLI: `npm install -g vercel`
   - Deploy: `vercel --prod`

   **GitHub Pages**:
   - Set `base` in `vite.config.ts` to your repository name
   - Use GitHub Actions for deployment (see GitHub Actions documentation)

   **AWS S3 + CloudFront**:
   - Upload the `dist` directory to an S3 bucket
   - Configure CloudFront for CDN distribution

### Using a Custom Domain

If you want to use a custom domain:

1. Purchase a domain from a domain registrar (e.g., Namecheap, GoDaddy)
2. Configure DNS settings to point to your deployment
3. For Lovable deployment, follow instructions at [docs.lovable.dev/tips-tricks/custom-domain/](https://docs.lovable.dev/tips-tricks/custom-domain/)

## Local Development

To run the project locally:

```sh
# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
