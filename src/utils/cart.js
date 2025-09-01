export const CART_KEY = "cart";

const emit = () => {
  // beri tahu seluruh app kalau cart berubah
  window.dispatchEvent(new Event("cartUpdated"));
};

export function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

export function setCart(next) {
  localStorage.setItem(CART_KEY, JSON.stringify(next));
  emit();
}

export function getCount() {
  return getCart().length;
}

export function addToCart(item) {
  const cart = getCart();
  cart.push(item);
  setCart(cart); // otomatis emit
}

export function removeFromCartByIndex(index) {
  const cart = getCart();
  cart.splice(index, 1);
  setCart(cart); // otomatis emit
}

export function clearCart() {
  setCart([]);
}
