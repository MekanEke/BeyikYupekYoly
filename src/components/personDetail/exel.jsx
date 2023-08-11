import React, { useState } from 'react';
import { Table, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';

function ExcelViewer() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const handleFileUpload = (info) => {
    if (info.file.status === 'done') {
      const file = info.file.originFileObj;
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        setData(jsonData);

        if (jsonData.length > 0) {
          const firstRow = jsonData[0];
          const columnNames = Object.keys(firstRow).map((key) => ({
            title: key,
            dataIndex: key,
            key: key,
          }));
          setColumns(columnNames);
        }
      };
      reader.readAsArrayBuffer(file);
    } else if (info.file.status === 'error') {
      message.error('File upload failed.');
    }
  };

  return (
    <div>
      <Upload
        accept=".xlsx, .xls"
        customRequest={({ file, onSuccess }) => {
          setTimeout(() => {
            onSuccess('ok');
          }, 0);
        }}
        onChange={handleFileUpload}
      >
        <Button icon={<UploadOutlined />}>Upload Excel File</Button>
      </Upload>
      <Table dataSource={data} columns={columns} />
    </div>
  );
}

export default ExcelViewer;

import React from 'react';
import './App.css';
import ExcelViewer from './ExcelViewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Excel Viewer with Ant Design</h1>
      </header>
      <main className="App-main">
        <ExcelViewer />
      </main>
    </div>
  );
}

export default App;
