import React from 'react';
import './sidebar.css';
import logo from '../../assets/logo.jpg';
import { IoMdSpeedometer } from 'react-icons/io';
import { MdDeliveryDining } from 'react-icons/md';
import { MdOutlineExplore } from 'react-icons/md';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BsTrophy } from 'react-icons/bs';
import { BsCreditCard2Front } from 'react-icons/bs';
import { BsQuestionCircle } from 'react-icons/bs';
import { BiTrendingUp } from 'react-icons/bi';
import { MdOutlineAccountBox } from 'react-icons/md';
const Sidebar = () => {
    return (
        <div className='sideBar grid'>
            <div className='flex logoDiv'>
                <h1>plant.</h1>
            </div>



            <div className='menuDiv'>
                <h3 className='divTittle'>QUICK MENU</h3>
                <ul className="menuList grid">
                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <IoMdSpeedometer className='icon' />
                            <span className='smallText'>
                                Dash Board
                            </span>
                        </a>

                    </li>
                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <MdDeliveryDining className='icon' />
                            <span className='smallText'>
                                My Order
                            </span>
                        </a>

                    </li>
                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <MdOutlineExplore className='icon' />
                            <span className='smallText'>
                                Explore
                            </span>
                        </a>

                    </li>
                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <BsTrophy className='icon' />
                            <span className='smallText'>
                                Products
                            </span>
                        </a>

                    </li>

                </ul>
            </div>
            <div className='settingDiv'>
                <h3 className='divTittle'>SETTING</h3>
                <ul className="menuList grid">
                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <AiOutlinePieChart className='icon' />
                            <span className='smallText'>
                                Charts
                            </span>
                        </a>

                    </li>
                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <BiTrendingUp className='icon' />
                            <span className='smallText'>
                                Trends
                            </span>
                        </a>

                    </li>
                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <MdOutlineAccountBox className='icon' />
                            <span className='smallText'>
                                Contact
                            </span>
                        </a>

                    </li>
                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <BsCreditCard2Front className='icon' />
                            <span className='smallText'>
                                Billings
                            </span>
                        </a>

                    </li>

                </ul>
            </div>
            <div className='sideBarCard'>

                <BsQuestionCircle className='icon' />
                <div className='cardContent'>
                    <div className='circle1'></div>
                    <div className='circle2'></div>
                    <h3>help center</h3>

                    <p>have trouble in plant</p>
                    <button className='btn'>go to help center</button>

                </div>

            </div>
        </div>
    )
}

export default Sidebar
