import "./App.css";
// import Header from "./components/Header/Header";
import Content from "./components/content/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./page/MainLayout";
import PersonDetail from "./components/personDetail/PersonDetail";
import { useState } from "react";

function App() {
    const [searchText, setSearchText] = useState("");
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainLayout
                            search={setSearchText}
                            setSearch={setSearchText}
                        />
                    }>
                    <Route
                        index
                        element={
                            <Content
                                search={searchText}
                                setSearch={setSearchText}
                            />
                        }
                    />
                    <Route path="/person/:name" element={<PersonDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
