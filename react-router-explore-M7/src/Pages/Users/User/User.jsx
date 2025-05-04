import React from "react";

function User({ user }) {
  console.log(user);
  const { id, name, email } = user;
  return (
    <div>
      <h1>User Id: {id}</h1>
      <h4>Name: {name}</h4>
      <h4>Email: {email}</h4>
    </div>
  );
}
// User.propsType = {
//   user: React.PropTypes.object,
// };
export default User;
