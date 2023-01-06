import model from "../../../assets/model3.jpg";

const useHomePage = () => {
  const ProductList = [
    {
      id: "P1",
      title: "Dress",
      description: "fsd",
      image: model,
      isProduct: true,
      price: 300,
    },
    {
      id: "P2",
      title: "Pants",
      description: "fsd",
      image: model,
      isProduct: true,
      price: 300,
    },
    {
      id: "P3",
      title: "Jacket",
      description: "fsd",
      image: model,
      isProduct: true,
      price: 300,
    },
    {
      id: "P4",
      title: "Coat",
      description: "fsd",
      image: model,
      isProduct: true,
      price: 300,
    },
    {
      id: "P5",
      title: "Dress",
      description: "fsd",
      image: model,
      isProduct: true,
      price: 300,
    },
    {
      id: "P6",
      title: "Shirt",
      description: "fsd",
      image: model,
      isProduct: true,
      price: 300,
    },
    {
      id: "P7",
      title: "Skirt",
      description: "fsd",
      image: model,
      isProduct: true,
      price: 300,
    },
  ];

  return { ProductList };
};

export default useHomePage;
