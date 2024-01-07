import CategoryComponent from "./components/categoryItem/categoryComponent";

function HomePage() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Womens",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Mens",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div className="flex w-full flex-row flex-wrap p-8 justify-between gap-y-6">
      {categories.map((category, index) => (
        <CategoryComponent
          key={category.id}
          imageURL={category.imageUrl}
          subtitle={category.subtitle}
          title={category.title}
          isLastTwo={index >= categories.length - 2}
        />
      ))}
    </div>
  );
}

export default HomePage;