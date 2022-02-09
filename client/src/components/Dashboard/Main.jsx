import React from 'react';
import TrendList from './TrendList';

function Main() {
    return (
      <main>
        <form className='search-bar'>
          <input type="text" placeholder='Search' />
        </form>
        <h1>Trending</h1>
        <TrendList />
      </main>
    )

}

export default Main;

