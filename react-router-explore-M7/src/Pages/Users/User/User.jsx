import React from "react";
import { Link } from 'react-router-dom';

function User({ user }) {
  console.log(user);
  const { id, name, email } = user;
  return (
    <div className="border-2 border-red-500 p-5 rounded-2xl " >
      <h1>User Id: {id}</h1>
      <h4>Name: {name}</h4>
      <h4>Email: {email}</h4>
      <Link to={`/users/${id}`}> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3" >Details</button>
      </Link>
    </div>
  );
}
// User.propsType = {
//   user: React.PropTypes.object,
// };
export default User;
