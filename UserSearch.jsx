import React, { useContext, useState } from "react";
import GithubContext from "../context/github/GithubContext";

export default function UserSearch() {
  const [searchText, setSearchText] = useState("");

  const { users, fetchUsers,clearUsers } = useContext(GithubContext);


  const handleChange = (e) => setSearchText(e.target.value);
  const handleClear = () =>{ 
    setSearchText("")
    clearUsers();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") {
      alert(" Please enter something");
    } else {
      fetchUsers(searchText);
      setSearchText("");
    }
    console.log("Search for:", searchText);
  };

  return (
    <div className="flex justify-center items-center mt-12">
      <form onSubmit={handleSubmit} className="flex space-x-4 w-full max-w-2xl">

        <input
          type="text"
          placeholder="Search Github user here"
          className="flex-1 h-14 pl-5 pr-5 rounded-full shadow-md bg-white text-black font-medium focus:outline-none"
          value={searchText}
          onChange={handleChange}
        />

        {users.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            className="h-14 px-6 rounded-full bg-gray-200 text-black font-semibold hover:bg-gray-300 transition-all"
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
}
