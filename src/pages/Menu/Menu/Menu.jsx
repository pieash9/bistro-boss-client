import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg"
import desertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
  const [menu] = useMenu()
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main Cover */}
      <Cover img={img} title={"OUR MENU"}/>
      {/* Offered menu items */}
      <SectionTitle heading={"TODAY'S OFFER"}subHeading={"Don't miss"}/>
      <MenuCategory items={offered}/>
      {/* Desert items */}
      <MenuCategory img={desertImg}items={desserts}title={"desert"}/>
      <MenuCategory img={pizzaImg}items={pizza}title={"pizza"}/>
      <MenuCategory img={saladImg}items={salad}title={"salad"}/>
      <MenuCategory img={soupImg}items={soup}title={"soup"}/>
    </div>
  );
};

export default Menu;
