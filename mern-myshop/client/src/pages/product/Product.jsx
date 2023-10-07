import CardProduct from "./CardProduct";
import { productList } from "./ProductList";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const num = 1;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-5">
        {productList.map((product) => (
          <CardProduct key={product._id}>
            <CardProduct.Atas image={product.image} />
            <CardProduct.Tengah
              name={product.name}
              category={product.category}
              tags={product.tags}
            />
            <CardProduct.Bawah
              price={product.price}
              onClick={() => dispatch(addToCart({ num }))}
            />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default Product;
