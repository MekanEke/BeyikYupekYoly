import DateSearchComponent from "./HeaderCalendar";
// import CalendarInput from "./HeaderCalendar";
// import HeaderCalendar from "./HeaderCalendar";
import style from "./header.module.css";
import { Input } from "antd";

const Header = ({ textSearch, setTextSearch }) => {
    return (
        <div
            style={{
                position: "sticky",
                top: 0,
                zIndex: "9",
            }}
            className={style.header}>
            <div>
                <Input.Search
                    placeholder="поиск"
                    style={{
                        width: "150px",
                    }}
                    onSearch={(value) => {
                        textSearch(value);
                    }}
                    onChange={(e) => setTextSearch(e.target.value)}
                />
            </div>
            <div className={style.calendarInput}>
                <DateSearchComponent />
            </div>
        </div>
    );
};

export default Header;
