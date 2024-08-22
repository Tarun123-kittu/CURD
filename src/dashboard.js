import React from 'react'
import Sidebar from './sidebar';
import { IoMdAddCircle, IoMdNotificationsOutline } from "react-icons/io";
import "./dashboard.css"
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import camera_img from "./Assets/camera.svg"
import Conversion_img from "./Assets/right_1.svg"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import insight_img from "./Assets/insight.png"
import { Image } from 'react-bootstrap';
import ChartView from './chart';
const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <section className='dashboard_wrapper'>
                <div className='dashboard_container'>
                    <div className='row'>
                        <div className='col-lg-8 col-sm-12 col-md-12'>
                            <h3 className='Properties_heading'>Properties: SpringHill Suites</h3>
                            <h6 className='key_stone_heading'>Keystone Marketplace</h6>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12'>
                            <div className='search_outer'>
                                <IoSearchOutline className='search_icon' />
                                <div className='d-flex gap-3'>
                                    <div className='search_box'>
                                        <input type='text' placeholder='Search...' />
                                    </div>
                                    <div className='notification_outer'>
                                        <IoMdNotificationsOutline />
                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>


                    <div className='dashboard_content'>
                        <div className='d-flex gap-4'>
                            <div className='w-100'>
                                <div className='d-flex content_outer'>
                                    <div className='revenue_wrapper yellow_bg'>
                                        <div className='d-flex revenue_outer'>
                                            <div className='revenue_content d-flex gap-2 align-items-center'>
                                                <Image src={camera_img} alt='image' />
                                                <h3>Revenue</h3>
                                            </div>
                                            <FaBars />

                                        </div>
                                        <h2 className='text-center revenue_heading'>$14,350</h2>
                                    </div>

                                    <div className='revenue_wrapper green_bg'>
                                        <div className='d-flex revenue_outer'>

                                            <div className='revenue_content d-flex align-items-center gap-2'>
                                                <Image src={Conversion_img} alt='image' />
                                                <h3>Conversion</h3>
                                            </div>

                                            <FaBars />

                                        </div>
                                        <h2 className='text-center revenue_heading'>78%</h2>
                                    </div>

                                    <div className='revenue_wrapper red_bg'>
                                        <div className='d-flex revenue_outer'>
                                            <div className='revenue_content d-flex gap-2 align-items-center'>
                                                <Image src={insight_img} alt='image' />
                                                <h3>Abandonment</h3>
                                            </div>
                                            <FaBars />

                                        </div>
                                        <h2 className='text-center revenue_heading'>20%</h2>
                                    </div>
                                </div>
                            </div>
                            <div className=''>

                                <div className='Opportunities_wrapper'>
                                    <h3 className='cmn_large_font'>Opportunities</h3>

                                    <div className='d-flex opportunity_outer'>
                                        <h4 className='cmn_small_font'>Sales Increase</h4>
                                        <h4 className='cmn_small_font'>$4,230</h4>
                                    </div>
                                    <div className='d-flex opportunity_outer'>
                                        <h4 className='cmn_small_font'> Design Optimization</h4>
                                        <h4 className='cmn_small_font'>$3,220</h4>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3 custom_tabs"
                        >
                            <Tab eventKey="home" title="Opportunities">
                                Tab content for Home
                            </Tab>
                            <Tab eventKey="profile" title="Visitors">
                                <div className='dateIcon'>
                                    <button className='date_range'>Date Range</button>
                                    <IoMdAddCircle className='add_icon' />
                                </div>
                                <div className='garphWrapper'>
                                    <ChartView />
                                </div>
                            </Tab>
                            <Tab eventKey="contact" title="Space">
                                Tab content for Contact
                            </Tab>
                        </Tabs>

                    </div>




                </div>
            </section>
        </>
    )
}

export default Dashboard