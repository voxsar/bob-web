import moment from 'moment';

export const generateDates = (numDays) => {
    const dates = [];
    const today = new Date();
    today.setDate(today.getDate() + 1); // start from tomorrow

    for (let i = 0; i < numDays; i++) {
        const currentDate = new Date();
        currentDate.setDate(today.getDate() + i);
        dates.push(currentDate);
    }

    return dates;
};

export const getTodayDate = (format = 'YYYY-MM-DD') => {
    return moment().format(format);
};

export const formatDate = (date, format = 'YYYY-MM-DD') => {
    return moment(date).format(format);
}

export const formatDateString = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const weekday = date.toLocaleString('en-US', { weekday: 'short' });
    return `${weekday}, ${month} ${day}`;
};

export const generateDateRange = (startDateString, endDateString) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    const dateArray = [];

    // Check if start date is valid
    if (isNaN(startDate.getTime())) {
        throw new Error("Invalid start date");
    }

    // Check if end date is valid
    if (isNaN(endDate.getTime())) {
        throw new Error("Invalid end date");
    }

    // Check if start date is before end date
    if (startDate > endDate) {
        throw new Error("Start date must be before or equal to end date");
    }

    let currentDate = startDate;
    while (currentDate <= endDate) {
        dateArray.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dateArray;
};

export const isSameDay = (date1, date2) => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
};

export const getTomorrowDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
};

export const updateTime = (date, timeStr) => {
    const newDateTime = new Date(date ? date : '');

    const [hours, minutes, seconds] = timeStr.split(':').map(Number);

    newDateTime.setHours(hours, minutes, seconds, 0);

    return newDateTime;
}
