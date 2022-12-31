import FoodCard from "./FoodCard";

function FoodContainer() {
  // makes an API call and retrieves food content
  const menuItems = [
    {
      foodName: "Spaghetti",
      desc: "The best spaghetti made from Italy that you have ever tasted! You will never forget it!",
      imageLink: "https://www.olivetomato.com/wp-content/uploads/2022/06/Greek-Spaghetti-with-Ground-Beef-Sauce-recipe-%E2%80%93-Makaronia-me-Kima-2.jpeg",
      price: 9.50
    },
    {
      foodName: "Bread",
      desc: "The best bread that you have ever tasted! You will never forget it!",
      imageLink: "https://www.girlversusdough.com/wp-content/uploads/2020/04/italian-bread-3.jpg",
      price: 2.00
    },
    {
      foodName: "Haandmade Gelato",
      desc: "Handmade gelato straight from our chef's hands!",
      imageLink: "https://www.askchefdennis.com/wp-content/uploads/2017/08/strawberry-gelato-4-scaled.jpg",
      price: 5.15
    }
  ];

  const foodCardItems = menuItems.map((item) => 
    <FoodCard
      title={item.foodName}
      desc={item.desc}
      imageLink={item.imageLink}
      price={item.price}
    /> 
  );

  return (
    <div>
      {foodCardItems}
    </div>
  );
};

export default FoodContainer;