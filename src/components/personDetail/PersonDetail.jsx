import { Table } from "antd";
import { useParams } from "react-router-dom";

const PersonDetail = () => {
    const { name } = useParams();

    const columns = [
        { title: name, dataIndex: "name", key: "name" },
        { title: "Details", dataIndex: "details", key: "details" },
        { title: "Algy/bergi", dataIndex: "algyBergi", key: "algyBergi" },
    ];

    const data = [];

    for (let i = 1; i < 7; i++) {
        data.push({
            key: i,
            name: `${i}-10-2023`,
            details: `Details-${i} `,
            algyBergi: -300,
        });
    }

    return (
        <>
            <Table columns={columns} dataSource={data} bordered />
        </>
    );
};
export default PersonDetail;
