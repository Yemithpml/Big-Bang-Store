import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Search = () => {
  return (
    <div className="relative w-64">
      <form>
        <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b378e6]"
      />
      <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />

      
      </form>
    </div>
  );
};

export default Search
