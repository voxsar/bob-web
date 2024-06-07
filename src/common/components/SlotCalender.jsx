import React, { useState, useEffect } from 'react';
import { generateDates } from '../../utils/dateUtils';
import './styles/SlotCalendar.css';
import { Carousel } from 'react-bootstrap';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const SlotCarousel = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [days, setDays] = useState([]);

    useEffect(() => {
        // Generate dates for the next 365 days
        const generatedDates = generateDates(365);
        setDays(generatedDates);
    }, []);

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        const weekday = date.toLocaleString('en-US', { weekday: 'short' });
        return `${weekday}, ${month} ${day}`;
    };

    const groupDatesByMonth = () => {
        const monthsMap = {};

        days.forEach((day) => {
            const month = day.getMonth();
            if (!monthsMap[month]) {
                monthsMap[month] = [];
            }
            monthsMap[month].push(day);
        });

        return Object.keys(monthsMap).map((month) => ({
            month: months[month],
            days: monthsMap[month]
        }));
    };

    const renderMonthSlide = (monthData, index) => {
        return (
            <Carousel.Item key={index}>
                <div className="month-header">{monthData.month}</div>
                <div className='month-grid-container'>
                    <div className="month-grid">
                        {monthData.days.map((day, dayIndex) => (
                            <button
                                key={dayIndex}
                                className={`day-button ${selectedDate && selectedDate.getTime() === day.getTime() ? 'selected' : ''}`}
                                onClick={() => handleDateClick(day)}
                            >
                                {formatDate(day)}
                            </button>
                        ))}
                    </div>
                </div>

            </Carousel.Item>
        );
    };

    return (
        <Carousel interval={null} indicators={false} className='data-carousel'>
            {groupDatesByMonth().map((monthData, index) => renderMonthSlide(monthData, index))}
        </Carousel>
    );
};

export default SlotCarousel;