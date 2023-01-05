import React from 'react';

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResults = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.SEARCH_API_KEY}`
  );

  throw new Error('Whoops something broke');
  const data: SearchResults = await res.json();
  return data;
};

const SearchResults = async ({ params: { searchTerm } }: PageProps) => {
  const searchResults = await search(searchTerm);
  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>

      <ol className="space-y-5 p-5">
        {searchResults.organic_results.map((result) => (
          <li>
            <p className="font-bold">{result.title}</p>
            <p>{result.title}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
