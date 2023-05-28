import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseCart from "../../hooks/UseCart";

const FoodCard = ({ item }) => {
  const { _id, name, recipe, image, price } = item;
  const { user } = useContext(AuthContext);
  const [,refetch] = UseCart()

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    
    if (user && user.email) {
      const cartItem = {menuItemId : _id,name,price,image,email:user.email}
     
      fetch(`http://localhost:5000/carts`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch()  //refetch cart to update the number on cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <p className="absolute right-5 bg-slate-900 text-white px-4 py-1 top-5 w-16 text-center">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-orange-400 border-b-4 bg-slate-100 border-t-0 border-x-0 mt-4 "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
