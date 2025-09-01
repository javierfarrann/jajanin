import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { addToCart } from "../utils/cart"; // ✅ pakai helper baru

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Memuat produk...</p>
      </div>
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="text-lg font-bold mt-2">{product.name}</h2>
          <p className="text-gray-500">{product.price} IDR</p>
          {product.discount && (
            <p className="text-red-500">
              Diskon {product.discount}% - {product.promoName}
            </p>
          )}
          <p className="text-sm text-gray-400">
            Kadaluarsa: {product.expiryDate}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-3 w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Tambah ke Keranjang
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
