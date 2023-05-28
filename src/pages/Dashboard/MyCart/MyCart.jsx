import { Helmet } from "react-helmet-async";
import UseCart from "../../../hooks/UseCart";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
  const [cart] = UseCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div className="max-h-screen">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="text-2xl font-semibold flex justify-between items-center h-16">
        <h3>Total Items:{cart.length}</h3>
        <h3>Total Price: ${total}</h3>
        <button className="btn btn-sm btn-warning">PAY</button>
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
                <td>
                 {item?.name}
                </td>
                <td className="text-end">${item?.price}</td>
                <td>
                  <button className="btn btn-error btn-sm text-white"><FaTrashAlt/></button>
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
