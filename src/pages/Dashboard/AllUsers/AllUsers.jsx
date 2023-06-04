import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get(`/users`);
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(
      `https://bistro-boss-server-zeta.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now an Admin!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDelete = (user) => {};
  return (
    <div className="w-full max-h-full md:px-10">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">
        Total users: {users.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role == "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost !outline-none bg-orange-600 btn-sm text-white"
                    >
                      <FaUserShield size={18} />
                    </button>
                  )}
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(user._id)}
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

export default AllUsers;
