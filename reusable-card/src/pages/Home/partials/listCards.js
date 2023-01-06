import React from "react";
import Card from "../../../components/Card";
import modal from "../../../assets/model3.jpg";
import useHomePage from "../hooks/useHomePage";
import "../style.css";

const ListCard = () => {
  const { ProductList } = useHomePage();

  return (
    <div className="list">
      {ProductList.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          price={item.price}
          isProduct={true}
        />
      ))}
    </div>
  );
};

export default ListCard;
