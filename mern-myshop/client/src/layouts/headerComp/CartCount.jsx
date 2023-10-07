import { useSelector } from "react-redux";

const CartCount = () => {
  const cartCount = useSelector((state) => state.cart.value);
  return (
    <>
      <span className="absolute bg-red-500 text-white p-2 rounded-full flex items-center justify-center -top-2 -right-2">
        <div className="absolute text-[0.6rem]">{cartCount}</div>
      </span>
    </>
  );
};

export default CartCount;
