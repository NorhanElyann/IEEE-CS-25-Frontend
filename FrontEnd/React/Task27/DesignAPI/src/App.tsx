import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/products?limit=30');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-white text-center py-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-6 bg-gray-900 min-h-screen">
      {products.map((product) => (
        <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain" />
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-400 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between  mt-4">
                <p className="text-green-400 font-bold">${product.price.toFixed(2)}</p>
                <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                  View
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;