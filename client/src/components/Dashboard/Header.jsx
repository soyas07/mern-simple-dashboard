import '../../css/App.css'
import React from 'react';

import { AiFillHome } from 'react-icons/ai'
import { FiTrendingUp } from 'react-icons/fi' 
import { FaVideo } from 'react-icons/fa' 
import { RiPlayListFill } from 'react-icons/ri'
import { BsFillBookmarksFill } from 'react-icons/bs'

function Header() {
    return (
        <header>
            <div className="logo">skateboard</div>
            <h2>MENU</h2>
            <ul>
                <li><i><AiFillHome /></i>Discover</li>
                <li className='active-tab'><i className='active'><FiTrendingUp /></i>Trending</li>
                <li><i><FaVideo /></i>Streaming</li>
                <li><i><RiPlayListFill /></i>Playlist</li>
                <li><i><BsFillBookmarksFill /></i>Bookmark</li>
            </ul>
            <hr />
            <ul>
                <li><i><AiFillHome /></i>Live Stream</li>
                <li><i><FiTrendingUp /></i>Tutorial</li>
                <li><i><FaVideo /></i>Competition</li>
                <li><i><BsFillBookmarksFill /></i>Community</li>
            </ul>
            <hr />
        </header>
    );
}

export default Header;
