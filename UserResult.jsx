import React, { useEffect, useContext } from "react";
import UserItem from "./UserItem"; 
import GithubContext from "../context/github/GithubContext";
export default function UserResult() {
  const { users, loading } = useContext(GithubContext);

  useEffect(() => {
   // fetchUsers();
  }, []);

  if (loading) {
    return <h3 className="text-center text-xl mt-10">Loading...</h3>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
