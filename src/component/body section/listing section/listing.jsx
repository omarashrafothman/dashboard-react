import React from 'react';
import "./listing.css";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import image from "../../../assets/short2.jpeg"
import plant1 from "../../../assets/plant1.png"
import user1 from "../../../assets/user1.jpg"
import user2 from "../../../assets/user2.jpg"
import user3 from "../../../assets/user3.jpg"
import user4 from "../../../assets/user4.jpg"


const Listing = () => {
    return (
        <div className='listingSection'>
            <div className="heading flex">
                <h1>My Listings</h1>
                <button className='btn flex'>See All <BsArrowRightShort className="icon" /></button>
            </div>
            <div className="secContainer flex">
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={plant1} alt="" />
                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={plant1} alt="" />
                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={plant1} alt="" />
                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={plant1} alt="" />
                    <h3>Annual Vince</h3>
                </div>
            </div>

            <div className="sellers flex">
                <div className="topSeller">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className="btn flex">See All <BsArrowRightShort className='icon' /></button>
                    </div>
                    <div className="card flex">
                        <div className="user">
                            <img src={user1} alt="" />
                            <img src={user2} alt="" />
                            <img src={user3} alt="" />
                            <img src={user4} alt="" />
                        </div>
                        <div className="cardText">
                            <span>14.556 plant sold<br /><small>21 Seller <span className="date">7 Days</span></small> </span>
                        </div>
                    </div>
                </div>
                <div className="featureSeller">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className="btn flex">See All <BsArrowRightShort className='icon' /></button>
                    </div>
                    <div className="card flex">
                        <div className="user">
                            <img src={user4} alt="" />
                            <img src={user3} alt="" />
                            <img src={user1} alt="" />
                            <img src={user2} alt="" />
                        </div>
                        <div className="cardText">
                            <span>116 plant sold<br /><small>26 Seller <span className="date">31 Days</span></small> </span>
                        </div>
                    </div>
                </div>
            </div>



        </div >
    )
}

export default Listing
