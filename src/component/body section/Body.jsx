import React from 'react'
import './Body.css';
import Top from "./top section/top";
import Listing from "./listing section/listing";
import Activity from "./activity section/activity"

function Body() {
    return (
        <div className='mainContent'>
            <Top />
            <div className='bottom flex'>
                <Listing />
                <Activity />

            </div>
        </div>
    )
}

export default Body
