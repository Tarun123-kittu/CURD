import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ChartView = () => {
    const [days_of_week, setDays_of_week] = useState([]);
    const [total_guest, setTotal_guest] = useState([]);
    const [total_timeout, setTotal_timeout] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [search, setSearch] = useState(false);
    const [error, setError] = useState(null);  // State to track errors

    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <input
            ref={ref}
            value={value}
            onClick={onClick}
            readOnly
            style={{ cursor: 'pointer' }}
        />
    ));

    function formatDateToYYYYMMDD(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        fetchResult();
    }, []);

    useEffect(() => {
        if (search) {
            fetchResult();
        }
    }, [search]);

    const fetchResult = async () => {
        let url;
        if (search && startDate && endDate) {
            url = `http://13.233.101.106:8000/api/weekly-summary?startDate=${formatDateToYYYYMMDD(startDate)}&endDate=${formatDateToYYYYMMDD(endDate)}`;
        } else {
            url = "http://13.233.101.106:8000/api/weekly-summary?startDate=2024-05-06&endDate=2024-06-03";
        }

        const myHeaders = new Headers({
            'Content-Type': 'application/json',
        });

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            if (result?.length > 0) {
                setDays_of_week(result.map(item => item?.DayOfWeek?.slice(0, 3)));
                setTotal_guest(result.map(item => parseFloat(item?.TotalGuests)));
                setTotal_timeout(result.map(item => parseFloat(item?.TotalTimeoutHours)));
                setIsDataLoaded(true);
                setError(null);  // Clear any previous errors
            } else {
                setIsDataLoaded(false);
                setError("No data found for the selected date range.");
            }
            setSearch(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsDataLoaded(false);
            setError("Failed to fetch data. Please try again later.");
        }
    };

    const options = {
        chart: {
            zooming: {
                type: 'xy'
            }
        },
        title: {
            text: 'Total Marketplace Turnout vs Total Time',
            align: 'left',
            style: {
                color: "gray",
                fontSize: "20px"
            }
        },
        credits: {
            text: 'Data Source: Your Data Source'
        },
        xAxis: [{
            categories: days_of_week,
            crosshair: true
        }],
        yAxis: [{
            title: {
                text: 'Guests',
                style: {
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "20px"
                },
            },
            labels: {
                format: '{value}',
                style: {
                    color: "black"
                }
            }
        }, {
            title: {
                text: '',
                style: {
                    color: "black"
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: "black"
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'rgba(255,255,255,0.25)'
        },
        series: [{
            name: 'Guest Turnout',
            type: 'column',
            yAxis: 0,
            data: total_guest,
            tooltip: {
                valueSuffix: ''
            },
            dataLabels: {
                enabled: true,
            },
            color: '#46bdc6'
        }, {
            name: 'Guest Time',
            type: 'spline',
            yAxis: 1,
            data: total_timeout,
            tooltip: {
                valueSuffix: ''
            },
            color: "#4286f1",
            dataLabels: {
                enabled: true,
                formatter: function () {
                    return this.y.toFixed(2) + ' hrs';
                }
            }
        }]
    };

    return (
        <div className='bg_wrapper'>
            <div className="date_range_outer d-flex mb-3">
                <div className='d-flex align-items-center gap-3'>
                    <span className="date_end">Date From</span>
                    <DatePicker
                        className="date_picker"
                        selected={startDate ? startDate : new Date()}
                        customInput={<CustomInput />}
                        onChange={(date) => setStartDate(date)}
                    />
                    <span className="date_end">Date To</span>
                    <DatePicker
                        className="date_picker"
                        selected={endDate ? endDate : new Date()}
                        customInput={<CustomInput />}
                        onChange={(date) => setEndDate(date)}
                    />
                </div>
                <button
                    className="button_search ms-auto"
                    onClick={() => startDate && endDate && setSearch(true)}
                >
                    Search
                </button>
            </div>
            {error ? (
                <p>{error}</p>
            ) : isDataLoaded ? (
                <HighchartsReact highcharts={Highcharts} options={options} />
            ) : (
                <p>Loading chart data...</p>
            )}
        </div>
    );
};

export default ChartView;
