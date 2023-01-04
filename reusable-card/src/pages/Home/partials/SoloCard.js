import React from "react";
import Card from "../../../components/Card";
import modal from "../../../assets/model3.jpg";

const ProductCard = {
  title: "Dress",
  description: "fsd",
  image: modal,
  isProduct: true,
  price: 300,
};

const SoloCard = () => {
  return (
    <Card
      title={ProductCard.title}
      image={ProductCard.image}
      description={ProductCard.description}
      isProduct={ProductCard.isProduct}
      price={ProductCard.price}
    />
  );
};

export default SoloCard;
