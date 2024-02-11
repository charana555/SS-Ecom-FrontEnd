import React from "react";
import { useGetProductsQuery } from "./proudctApiSlice";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
  } = useGetProductsQuery();

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess) {
    content = (
      <section className="m-16 mt-24 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
        {products?.proudctsList?.map((item, id) => (
          <ProductCard
            key={id}
            title={item.name}
            description={item.description}
            price={item.unitPrice}
            discount={item.discount}
            image={item.imageUrl}
          />
        ))}
      </section>
    );
  } else if (isError) {
    content = <Alert />;
  }

  return content;
};

export default ProductList;
