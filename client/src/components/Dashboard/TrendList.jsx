import React from 'react';
import { FcLike } from 'react-icons/fc'
import { FcLikePlaceholder } from 'react-icons/fc'
import { GrView } from 'react-icons/gr'
import skateBg from '../../assets/skate-bg.jpg'
import useDashboard from '../../hooks/useDashboard';

function TrendList({dashState, index}) {

    const { isEnabled, checkLike } = useDashboard()
    console.log(dashState);

    return (
        <div className='trend-list'>
            <p id='trend-number'>0{index}</p>
            <div className="dp-image">
                <img src={dashState && dashState.image} alt="" />
            </div>
            <div className="title-content">
                <h2>{dashState.title}</h2>
                <i><GrView /></i>
                <span>{dashState.views} views</span>
                <i>{isEnabled ? <FcLike onClick={checkLike} /> : <FcLikePlaceholder onClick={checkLike}/>}</i>
                <span>{dashState.likes} likes</span>

            </div>
            <div className="like">
                <i>{isEnabled ? <FcLike onClick={checkLike} /> : <FcLikePlaceholder onClick={checkLike}/>}</i>
            </div>
        </div>
    )
}

export default TrendList;
