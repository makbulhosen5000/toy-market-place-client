import React, { useEffect, useState } from 'react';

const Search = (props) => {
    const [searchText, setSearchText] = useState('');

    const handleChange = (e) =>{
      e.preventDefault();
      setSearchText(e.target.value);

    }
    useEffect(() => {
      props.onSearch(searchText);
    }, [searchText]);
    return (
      <div>
        <input
          value={searchText}
          onChange={handleChange}
          type="text"
          className="border-2 mb-2 py-2 px-4 rounded-lg shadow-md  focus:ring-2"
          placeholder="Search By Name"
        />
      </div>
    );
};

export default Search;