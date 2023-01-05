'use client';

import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="border-white border rounded-sm mr-5 h-8 "
        type={'text'}
        value={search}
        placeholder="Enter the Search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
