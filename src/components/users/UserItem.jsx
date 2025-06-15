import React from 'react';
import { Link } from 'react-router-dom';

export default function UserItem({ user }) {
  return (
    <div className="card bg-base-100 shadow-md p-4">
      <div className="flex items-center space-x-4">
        <div className="avatar">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.avatar_url} alt={user.login} />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold">{user.login}</h2>
          <Link to={`/users/${user.login}`} className="text-primary hover:underline text-sm">
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
