import React from "react";
import Table from "react-bootstrap/Table";
import "./EditableTable.styles.scss";
const SpaTable = ({ columns, rows }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column.field}>{column.fieldName}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, id) => {
          return (
            <tr key={id + 1}>
              <td>{id + 1}</td>
              <td>{row.date}</td>
              <td>{row.name}</td>
              <td>{row.count}</td>
              <td>{row.distance}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default SpaTable;
