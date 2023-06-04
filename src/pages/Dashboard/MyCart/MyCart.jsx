import { Helmet } from "react-helmet-async";
import UseCart from "../../../hooks/UseCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = UseCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bistro-boss-server-zeta.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your Order has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="max-h-screen w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="text-2xl font-semibold flex justify-between items-center h-16">
        <h3>Total Items:{cart.length}</h3>
        <h3>Total Price: ${total}</h3>
        <Link to="/dashboard/payment">
          <button className="btn btn-sm btn-warning">PAY</button>
        </Link>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item image</th>
              <th>Item name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item?.image} alt="food image" />
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td className="text-end">${item?.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-error btn-sm text-white"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
