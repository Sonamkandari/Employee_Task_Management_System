import React from 'react';

const Header = ({ data, onLogout }) => {
  const username = data?.firstName || data?.name || 'Admin';

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />
        <span className="text-3xl font-bold">{username} 👋</span>
      </h1>
      <button
        onClick={onLogout}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-xl cursor-pointer"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
