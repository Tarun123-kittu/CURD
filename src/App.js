import React, { useState } from "react";
import './App.css';

import "react-datepicker/dist/react-datepicker.css";
import Dashboard from "./dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Dashboard />
      {/* <div className="date_range">
        <span className="date_end">Date From</span>
        <DatePicker className="date_picker" selected={startDate ? startDate : new Date()} customInput={<CustomInput />} onChange={(date) => setStartDate(date)} />
        <span className="date_end">Date To</span>
        <DatePicker className="date_picker" selected={endDate ? endDate : new Date()} customInput={<CustomInput />} onChange={(date) => setEndDate(date)} />
        <button className="button_search" onClick={() => startDate && endDate && setSearch(true)}>Search</button>
      </div> */}
      {/* <div className='barGraph'>
        <ChartView startDate={startDate} endDate={endDate} search={search} />
      </div> */}
    </div>
  );
}

export default App;
