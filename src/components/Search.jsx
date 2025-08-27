import React from 'react';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Search = () => {
  const [searchItem, setSearchItem] = useState('');

  const handleSearch = (e) => {
    setSearchItem(e.target.value);  
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("hello how may i help you")
    setSearchItem('');
  }
  return (
    <div className="relative w-40 sm:w-48 md:w-56 lg:w-64">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What are you looking for..."
          onChange={handleSearch}
          value={searchItem}
          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b378e6]"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </form>
    </div>
  );
};

export default Search;
