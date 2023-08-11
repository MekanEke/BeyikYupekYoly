// import React, { useState } from "react";
// import { Calendar } from "antd";
// import "antd/dist/antd.css";

// const DateSearchComponent = () => {
//     const [selectedDate, setSelectedDate] = useState("");
//     const [filteredDates, setFilteredDates] = useState([]);

//     const handleDateSelect = (date) => {
//         setSelectedDate(date);
//     };

//     const handleSearch = () => {
//         if (selectedDate) {
//             const filtered = filteredDates.filter((date) =>
//                 date.isSame(selectedDate, "day"),
//             );
//             setFilteredDates(filtered);
//         }
//     };

//     // Calculate a month ago
//     const monthAgo = new Date();
//     monthAgo.setMonth(monthAgo.getMonth() - 1);

//     return (
//         <div>
//             <Calendar defaultValue={monthAgo} onSelect={handleDateSelect} />
//         </div>
//     );
// };

// export default DateSearchComponent;

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space } from "antd";
// import style from "./header.module.css";
dayjs.extend(customParseFormat);

// const dateFormat = "YYYY/MM/DD";
// const weekFormat = "MM/DD";

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
// const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
// const customWeekStartEndFormat = (value) =>
//     `${dayjs(value).startOf("week").format(weekFormat)} ~ ${dayjs(value)
//         .endOf("week")
//         .format(weekFormat)}`;
const HeaderCalendar = () => {
    return (
        <Space direction="vertical" size={12}>
            <DatePicker
                defaultValue={dayjs("05/08/2023", dateFormatList[0])}
                format={dateFormatList}
            />
        </Space>
    );
};
export default HeaderCalendar;
