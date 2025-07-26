
import { useState } from 'react';
import { Filter, Recycle, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';

const Marketplace = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  // Placeholder data
  const products = [
    {
      id: '1',
      name: 'Recycled Basketball',
      description: 'Made from 70% recycled plastics, this basketball offers professional performance with eco-conscious materials',
      imageSrc: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 150,
      plasticSaved: '3kg plastic saved',
      category: 'Equipment'
    },
    {
      id: '2',
      name: 'Eco-Friendly Water Bottle',
      description: 'Stay hydrated during games with this bottle made from recycled plastics',
      imageSrc: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 75,
      plasticSaved: '1.2kg plastic saved',
      category: 'Accessories'
    },
    {
      id: '3',
      name: 'Recycled Basketball Jersey',
      description: 'Performance jersey made from recycled plastic bottles, breathable and eco-friendly',
      imageSrc: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 120,
      plasticSaved: '2.5kg plastic saved',
      category: 'Apparel'
    },
    {
      id: '4',
      name: 'Eco Basketball Shoes',
      description: 'High-performance basketball shoes with uppers made from ocean plastic',
      imageSrc: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 280,
      plasticSaved: '4.3kg plastic saved',
      category: 'Footwear'
    },
    {
      id: '5',
      name: 'Recycled Sports Bag',
      description: 'Durable sports bag made from recycled materials, perfect for carrying your gear',
      imageSrc: 'https://images.unsplash.com/photo-1547949003-9792a18a2645?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 95,
      plasticSaved: '2kg plastic saved',
      category: 'Accessories'
    },
    {
      id: '6',
      name: 'Eco-Friendly Basketball Socks',
      description: 'Performance socks made from recycled yarns with moisture-wicking technology',
      imageSrc: 'https://images.unsplash.com/photo-1563406446-6d3128976789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 35,
      plasticSaved: '0.4kg plastic saved',
      category: 'Apparel'
    },
    {
      id: '7',
      name: 'Recycled Plastic Basketball Hoop',
      description: 'Durable mini basketball hoop made from recycled plastics for indoor use',
      imageSrc: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 110,
      plasticSaved: '3.8kg plastic saved',
      category: 'Equipment'
    },
    {
      id: '8',
      name: 'Eco Basketball Pump',
      description: 'Hand pump made from recycled materials to keep your basketballs properly inflated',
      imageSrc: 'https://images.unsplash.com/photo-1516367609366-aa04199c845e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 40,
      plasticSaved: '0.8kg plastic saved',
      category: 'Accessories'
    }
  ];

  const categories = ['All', 'Equipment', 'Apparel', 'Footwear', 'Accessories'];

  return (
    <div className="page-container min-h-screen">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Eco-Friendly Basketball Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Redeem your tokens for sustainable basketball gear made from recycled plastics and eco-friendly materials.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Filter className="mr-2 h-5 w-5 text-basketball" />
              Filters
            </h3>
            
            <div className="mb-6">
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      defaultChecked={category === 'All'}
                      className="mr-2 text-basketball focus:ring-basketball"
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    value="all"
                    defaultChecked
                    className="mr-2 text-basketball focus:ring-basketball"
                  />
                  <span>All Prices</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    value="under100"
                    className="mr-2 text-basketball focus:ring-basketball"
                  />
                  <span>Under 100 tokens</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    value="100to200"
                    className="mr-2 text-basketball focus:ring-basketball"
                  />
                  <span>100-200 tokens</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    value="over200"
                    className="mr-2 text-basketball focus:ring-basketball"
                  />
                  <span>Over 200 tokens</span>
                </label>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Impact</h4>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="highImpact"
                    className="mr-2 text-basketball rounded focus:ring-basketball"
                  />
                  <span>High Impact (2kg+ saved)</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="newArrivals"
                    className="mr-2 text-basketball rounded focus:ring-basketball"
                  />
                  <span>New Arrivals</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filters Button */}
        <div className="lg:hidden mb-4">
          <button 
            className="w-full flex items-center justify-center space-x-2 bg-white p-3 rounded-lg shadow-sm border border-gray-200"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <SlidersHorizontal className="h-5 w-5 text-basketball" />
            <span>Filter Products</span>
          </button>
          
          {filterOpen && (
            <div className="mt-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg flex items-center">
                  <Filter className="mr-2 h-5 w-5 text-basketball" />
                  Filters
                </h3>
                <button onClick={() => setFilterOpen(false)} className="text-gray-500">
                  Close
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center cursor-pointer mr-4">
                        <input
                          type="radio"
                          name="category-mobile"
                          value={category}
                          defaultChecked={category === 'All'}
                          className="mr-2 text-basketball focus:ring-basketball"
                        />
                        <span>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="flex flex-wrap gap-2">
                    <label className="flex items-center cursor-pointer mr-4">
                      <input
                        type="radio"
                        name="price-mobile"
                        value="all"
                        defaultChecked
                        className="mr-2 text-basketball focus:ring-basketball"
                      />
                      <span>All</span>
                    </label>
                    <label className="flex items-center cursor-pointer mr-4">
                      <input
                        type="radio"
                        name="price-mobile"
                        value="under100"
                        className="mr-2 text-basketball focus:ring-basketball"
                      />
                      <span>&lt;100</span>
                    </label>
                    <label className="flex items-center cursor-pointer mr-4">
                      <input
                        type="radio"
                        name="price-mobile"
                        value="100to200"
                        className="mr-2 text-basketball focus:ring-basketball"
                      />
                      <span>100-200</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price-mobile"
                        value="over200"
                        className="mr-2 text-basketball focus:ring-basketball"
                      />
                      <span>&gt;200</span>
                    </label>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <label className="flex items-center cursor-pointer mr-4">
                    <input
                      type="checkbox"
                      name="highImpact-mobile"
                      className="mr-2 text-basketball rounded focus:ring-basketball"
                    />
                    <span>High Impact</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="newArrivals-mobile"
                      className="mr-2 text-basketball rounded focus:ring-basketball"
                    />
                    <span>New Arrivals</span>
                  </label>
                </div>
                
                <button className="w-full bg-basketball text-white py-2 rounded-md font-medium">
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">Showing {products.length} products</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Sort by:</span>
              <select className="border border-gray-300 rounded-md text-sm p-1.5 focus:outline-none focus:ring-1 focus:ring-basketball">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Environmental Impact</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                imageSrc={product.imageSrc}
                price={product.price}
                plasticSaved={product.plasticSaved}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Environmental Impact Banner */}
      <div className="mt-16 bg-gradient-to-r from-eco to-eco-dark text-white rounded-xl overflow-hidden shadow-lg">
        <div className="p-8 md:p-10 flex flex-col md:flex-row items-center">
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-3">Our Environmental Impact</h3>
            <p className="mb-4 opacity-90">
              Products in our marketplace have helped recycle over 1,200kg of plastic waste and reduced carbon emissions by 3,500kg.
            </p>
            <button className="inline-flex items-center px-4 py-2 rounded-md bg-white text-eco-dark font-medium hover:bg-gray-100 transition-colors">
              <Recycle className="mr-2 h-4 w-4" />
              Learn More
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-40 h-40 rounded-full bg-white/20 flex items-center justify-center animate-pulse-subtle">
              <Recycle className="h-20 w-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
