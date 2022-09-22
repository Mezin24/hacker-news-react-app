import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { handleSearch } = useGlobalContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input
        type='text'
        className='form-input'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
