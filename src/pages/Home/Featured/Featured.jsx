import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white  my-20 ">
      <div className="bg-black py-8 bg-opacity-50">
        <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
        <div className="md:flex justify-center items-center py-8 px-36 pb-20 pt-12">
          <div>
            <img className="rounded" src={featuredImg} alt="" />
          </div>
          <div className="ml-10">
            <p>Aug, 20, 2029</p>
            <p className="uppercase">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque non alias blanditiis vel illo natus, expedita impedit
              ex libero et reiciendis voluptas mollitia. Nulla earum totam
              tenetur unde quos, maiores dolores corrupti ea est. Ad sunt ut
              veritatis maiores doloribus facilis in ab provident quo. Fuga
              maiores nostrum non odio?
            </p>
            <button className="btn btn-outline border-t-0 border-x-0 mt-4 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
