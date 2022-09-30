import React from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductsList = (props) => {
  const { productsState } = useSelector((state) => state);
  console.log(productsState);
  // const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => {
  //       setProducts(res.data);
  //       console.log(products);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  if (productsState.products === null) {
    return <Loading />;
  }

  return (
    <div
      className="container products-list mt-5 pt-5 "
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {productsState.products.map((pro) => {
        return (
          <div className="row my-2">
            <div className="col mx-2 ">
              <Link
                to={`products-page/${pro.id}`}
                className="card shadow-sm text-black"
                style={{
                  width: "18rem",
                  height: "490px",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <img
                  src={pro.image}
                  className="card-img-top p-5 border-bottom "
                  alt="..."
                  style={{ height: "330px" }}
                />
                <div className="card-body">
                  <p
                    className="card-text fw-bold"
                    style={{ height: "50px", overflow: "hidden" }}
                  >
                    {pro.title}
                  </p>
                  <p className="card-text fw-bold">$ {pro.price}</p>
                  <p className="card-text text-black-50 lead-4">
                    {pro.category}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsList;
