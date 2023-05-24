import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="py-8">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 mt-16 mb-8">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`} className="text-center block">
        <button className="btn btn-outline border-t-0 border-x-0 mt-4 border-b-4 bg-slate-100">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
