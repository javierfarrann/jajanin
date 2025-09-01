import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCount } from "../utils/cart"; // ✅ pakai helper yang udah kamu bikin

export default function FloatingCartButton() {
  const [cartCount, setCartCount] = useState(getCount());
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCount());
    };

    // load awal
    updateCartCount();

    // dengarkan custom event 'cartUpdated'
    window.addEventListener("cartUpdated", updateCartCount);

    // optional: update kalau localStorage berubah (multi-tab)
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <button
  onClick={() => navigate("/cart")}
  className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition relative z-50"
>
  <ShoppingCart size={24} />
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
      {cartCount}
    </span>
  )}
</button>
  );
}
