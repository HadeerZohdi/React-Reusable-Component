import model from "../../../assets/model3.jpg";

const useHomePage = () => {
  const ProductList = [
    {
      title: "Dress",
      description: "fsd",
      image: model,
      isProduct: true,
      price: 300,
    },
  ];

  return { ProductList };
};

export default useHomePage;
