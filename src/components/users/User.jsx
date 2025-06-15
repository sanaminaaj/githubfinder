import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext'
export default function User() {
    const params= useParams();
    const {user,fetchUser,repos}=useContext(GithubContext);
    useEffect(()=>{
        
        fetchUser(params.login);
    },[params.login]);

  return (
   <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{user.name || user.login}</h1>
          <p className="text-gray-600 mb-2">@{user.login}</p>
          {user.bio && <p className="text-gray-700 mb-4">{user.bio}</p>}

          <div className="flex flex-col space-y-2">
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View GitHub Profile
            </a>
            {user.blog && (
              <a
                href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Website / Blog
              </a>
            )}
            {user.location && (
              <p className="text-gray-500">📍 {user.location}</p>
            )}
          </div>

          <div className="mt-4 flex gap-6 text-sm text-gray-700">
            <p>👥 Followers: {user.followers}</p>
            <p>👤 Following: {user.following}</p>
            <p>📦 Public Repos: {user.public_repos}</p>
          </div>
          {repos?.length > 0 && (
  <div className="mt-8">
    <h2 className="text-xl font-semibold mb-4">Repositories</h2>
    <ul className="space-y-4">
      {repos.map(repo => (
        <li key={repo.id} className="p-4 bg-gray-100 rounded-md">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            {repo.name}
          </a>
          {repo.description && (
            <p className="text-gray-700 mt-1">{repo.description}</p>
          )}
        </li>
      ))}
    </ul>
  </div>
)}

        </div>
      </div>
    </div>
  )
}
