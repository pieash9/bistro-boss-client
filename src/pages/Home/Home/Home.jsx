import Recommends from "../Recommends/Recommends";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefServices from "../ChefServices/ChefServices";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <ChefServices />
      <PopularMenu />
      <CallUs />
      <Recommends />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
