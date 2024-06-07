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