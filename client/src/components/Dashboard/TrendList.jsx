import React from 'react';
import { FcLike } from 'react-icons/fc'
import { GrView } from 'react-icons/gr'

function TrendList() {
    return (
        <div className='trend-list'>
            <span>01</span>
            <div className="dp-image">
                <img src="" alt="" />
            </div>
            <div className="title-content">
                <h2>How to do Basic Jumping and how to landing safely</h2>
                <i><GrView /></i>
                <span>41,231 views</span>
                <i><FcLike /></i>
                <span>41,212 likes</span>

            </div>
            <div className="like">
                <i><FcLike /></i>
            </div>
        </div>
    )
}

export default TrendList;
