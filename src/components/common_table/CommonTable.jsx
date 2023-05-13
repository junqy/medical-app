import React from "react";
import { Table } from "antd";
import "./styles.css";

function CommonTable({ columns, data, isAgreement }) {
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
            rowClassName={
                isAgreement
                    ? (record) =>
                          record.agreement === true ? "green-row" : "red-row"
                    : null
            }
        />
    );
}

export default CommonTable;
