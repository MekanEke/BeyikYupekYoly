import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: " http://localhost:5000/customer",
    // headers: {
    //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA2LCJpYXQiOjE2OTE2NjU0ODMsImV4cCI6MTY5MjUyOTQ4M30.xjAQ5hItybzbvRr0OgmUqyRoRkcuT7GYVnu76uD4jPk`,
});
