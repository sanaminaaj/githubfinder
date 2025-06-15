import { createContext, useReducer } from "react";
import githubReducer from "./GithubReucer";
const GithubContext = createContext();
const GITHUB_URL = "https://api.github.com";

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //search results
  const fetchUsers = async (text) => {
    dispatch({ type: "LOADING", payload: true });

    try {
      const params = new URLSearchParams({
        q: text,
      });
      const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
      const { items } = await response.json();
      if (response.status === 404) {
        window.location = "/notfound";
      }
      dispatch({
        type: "GET_USERS",
        payload: items,
      });
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      dispatch({ type: "LOADING", payload: false });
    }
  };
  const clearUsers = () =>
    dispatch({
      type: "CLEAR",
      payload: [],
    });
  const Loading = () => {
    dispatch({
      type: "LOADING",
      payload: false,
    });
  };
  const fetchUser = async (login) => {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await fetch(`https://api.github.com/users/${login}`);

    const repoRes = await fetch(`https://api.github.com/users/${login}/repos`);
    const repos = await repoRes.json();

    dispatch({
      type: "SET_REPO",
      payload: repos,
    });

    if (res.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await res.json(); 
      dispatch({
        type: "LOADING",
        payload: false
      })
      dispatch({
        type: "GET_USER",
        payload: data,
      });

    }
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        fetchUsers,
        clearUsers,
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
