import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = ({ search, setSearch }) => {
    return (
        <div>
            <Header textSearch={search} setTextSearch={setSearch} />

            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
