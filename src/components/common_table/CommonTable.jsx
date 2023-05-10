import React from "react";
import { Table } from "antd";

function CommonTable({ columns, data }) {
    return (
        <Table
            locale={{
                triggerDesc: "Sortowanie malejąco",
                triggerAsc: "Sortowanie rosnąco",
                cancelSort: "Anuluj sortowanie",
            }}
            columns={columns}
            dataSource={data}
            pagination={{ position: ["bottomCenter"], defaultPageSize: 10 }}
            scroll={{
                x: 1300,
            }}
        />
    );
}

export default CommonTable;
