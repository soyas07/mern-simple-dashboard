import React from 'react';
import { useSelector } from 'react-redux';
import TrendList from './TrendList';

function Main() {

    const dashState = useSelector(list => list.dashboard.getData)

    const trendList = dashState.map((list, index) => <TrendList key={index} dashState={list} index={index+1} />)

    return (
      <main>
        <form className='search-bar'>
          <input type="text" placeholder='Search' />
        </form>
        <h1>Trending</h1>
        {trendList}
      </main>
    )

}

export default Main;

