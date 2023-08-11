import { Table } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../api/axiosInstance";
import { useEffect } from "react";

const Content = ({ search }) => {
    const [customerName, setCustomerName] = useState();
    const columns = [
        {
            title: "Ady",
            dataIndex: "name",
            render: (text) => <Link to={`/person/${text}`}>{text}</Link>,
            width: "500px",
            key: "name",
            filteredValue: [search],
            onFilter: (value, record) => {
                return String(record.name)
                    .toLowerCase()
                    .includes(value.toLowerCase());
            },
        },
        {
            title: "firma-algy ",
            className: "column-balance",
            dataIndex: "balance",
            align: "left",
            width: "200px",
            key: "balance",
        },
        {
            title: "firma-bergi",
            className: "column-debt-balance",
            dataIndex: "debt-balance",
            align: "left",
            width: "200px",
            key: "debt-balance",
        },
        {
            title: "jogapkar",
            dataIndex: "accsess",
            key: "access",
        },
    ];
    async function getData() {
        await axiosInstance
            .get()
            // "/api/v1/temp/customers", {
            // params: {
            //     limit: 20,
            //     offset: 0,
            // },

            .then((response) => {
                setCustomerName(response.data);
            })
            .catch((err) => {
                console.log("asdad");
            });
    }

    useEffect(() => {
        getData();
    }, []);

    // function rows() {
    //     customerName.map((el) => {
    //         return {
    //             key: el.id,
    //             name: el.name,
    //             money: el.balance,
    //             money2: el.currencyName,
    //             accsess: "Vlad",
    //         };
    //     });
    // }

    // const data = [
    //     // {
    //     //     key: "1",
    //     //     name: "Uzuk",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "2",
    //     //     name: "Kyyas",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "3",
    //     //     name: "Danatar",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "4",
    //     //     name: "Atajan",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "5",
    //     //     name: "Didar",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "6",
    //     //     name: "Mekan",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "7",
    //     //     name: "Uzuk2",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "8",
    //     //     name: "Kyyas2",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "9",
    //     //     name: "Danatar2",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "10",
    //     //     name: "Atajan2",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "11",
    //     //     name: "Didar2",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "12",
    //     //     name: "Mekan2",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "13",
    //     //     name: "Uzuk3",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "14",
    //     //     name: "Kyyas3",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "15",
    //     //     name: "Danatar3",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "16",
    //     //     name: "Atajan3",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "17",
    //     //     name: "Didar3",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "18",
    //     //     name: "Mekan3",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "19",
    //     //     name: "Uzuk",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "20",
    //     //     name: "Kyyas",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "21",
    //     //     name: "Danatar",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "22",
    //     //     name: "Atajan",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: "23",
    //     //     name: "Didar",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // {
    //     //     key: 1,
    //     //     name: "Mekan",
    //     //     money: "￥300,000.00",
    //     //     money2: "New York No. 1 Lake Park",
    //     //     accsess: "Vlad",
    //     // },
    //     // rows(),
    // ];

    // const newData = customerName.map((el) => {
    //     return {
    //         key: el.id,
    //         name: el.name,
    //         money: el.balance,
    //         money2: el.currencyName,
    //         accsess: "Vlad",
    //     };
    // });

    return (
        <Table
            columns={columns}
            dataSource={customerName}
            pagination={false}
            bordered
        />
    );
};
export default Content;

//
