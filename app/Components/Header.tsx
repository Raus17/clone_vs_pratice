import React from "react";

const Header = () => {
  return (
    <header className="p-4 bg-[#373737] flex justify-between items-center text-white ">
      <div className="flex space-x-4">
        <span className="font-bold">Visual Studio Code</span>
        <span>Docs</span>
        <span>Update</span>
        <span>Blogs</span>
        <span>API</span>
        <span>Extensions</span>
        <span>Github Co-pilot</span>
      </div>

      <div className="flex space-x-4">
        <span>icon</span>
        <div className="relative">
        <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white px-3 py-1 rounded-lg focus:outline-none"
            />
        </div>
        <span className="bg-blue-500 px-4 py-1 rounded shadow-lg">
          Download
        </span>
      </div>
    </header>
  );
};

export default Header;
