import React from 'react'
import logo from "./Assets/logo.png"
import chat_img from "./Assets/bx-chat.svg"
import { IoIosLogOut } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import user_bg from "./Assets/user_bg.png"

import "./sidebar.css"
const Sidebar = () => {
    return (
        <section className='sidebar_wrapper'>
            <div>
                <div className='d-flex justify-content-center '>
                    <img src={logo} className='logo_img' alt="logo" />

                </div>
                <ul className='sidebar_list'>
                    <li>
                        <div className='list_wrapper'>
                            <IoLocationOutline />
                            <h3>Properties</h3>
                        </div>
                    </li>
                    <li>
                        <div className='list_wrapper'>
                            <BiSolidBarChartAlt2 />
                            <h3>Insights</h3>
                        </div>
                    </li>
                    <li>
                        <div className='list_wrapper'>
                            <img src={chat_img} alt='chat' />
                            <h3>Notifications</h3>
                        </div>
                    </li>
                    <li>
                        <div className='list_wrapper'>
                            <IoDocumentTextOutline />
                            <h3>Download</h3>
                        </div>
                    </li>
                    <li>
                        <div className='list_wrapper'>
                            <IoSettingsOutline />
                            <h3>Settings</h3>
                        </div>
                    </li>

                    <li>

                    </li>

                    <li>
                        <div className='user_info d-flex'>
                            <div>
                                <img src={user_bg} alt="user" />
                                <div>
                                    <h3 className='cmn_large_font mt-3'>Kurt Franz</h3>
                                    <h3 className='user_profile'>Founder CEO</h3>
                                </div>
                            </div>
                        </div>
                        <div className='list_wrapper'>
                            <IoIosLogOut />
                            <h3>Logout</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Sidebar