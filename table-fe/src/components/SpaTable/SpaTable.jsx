import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "../controls/Dropdown/Dropdown";
import Table from "react-bootstrap/Table";
import useSort from "../hooks/useSort/useSort";
import {
  setFiltredData,
  setTableData,
  setSelectedValue,
  setSelectedSettings,
  setSelectedColumn,
} from "../redux/slicers/tableSlice";
import "./spaTable.styles.scss";
import { columns, settings, dropdownColumns } from "../constants/constants";
import TablePagination from "./../controls/Pagination/Pagination";

const SpaTable = ({ rows }) => {
  const [localTableData, setLocalTableData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNoResult, setIsNoResult] = useState(false);
  const { items, requestSort, sortConfig } = useSort(localTableData);

  const dispatch = useDispatch();

  const tableData = useSelector((state) => state.table.tableData);

  const selectedColumn = useSelector((state) => state.table.selectedColumn);
  const selectedSettings = useSelector((state) => state.table.selectedSettings);
  const selectedValue = useSelector((state) => state.table.selectedValue);

  useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    const newData = rows.slice(firstPageIndex, lastPageIndex);

    setLocalTableData(newData);
  }, [currentPage, pageSize]);

  useEffect(() => {
    dispatch(setFiltredData(items));
    dispatch(setTableData(items));
    setLocalTableData(items);
  }, []);

  useEffect(() => {
    setLocalTableData(items);
  }, [sortConfig]);

  useEffect(() => {
    if (currentPage >= rows.length / pageSize) setCurrentPage(1);
  }, [pageSize]);

  useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    const newData = rows.slice(firstPageIndex, lastPageIndex);

    setLocalTableData(newData);
  }, []);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };

  const formatDate = (date) => {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  };
  const useApplyFilterHandler = () => {
    let resArr;
    switch (selectedSettings) {
      case "Equal":
        resArr = tableData.filter((el) => {
          return String(el[selectedColumn]) === String(selectedValue);
        });
        if (resArr.length === 0) {
          setIsNoResult(true);
        } else {
          setIsNoResult(false);
          setLocalTableData(resArr);
        }

        setPageSize((prevState) => prevState);
        break;
      case "Include":
        resArr = tableData.filter((el) =>
          String(el[selectedColumn]).includes(String(selectedValue))
        );
        if (resArr.length === 0) {
          setIsNoResult(true);
        } else {
          setIsNoResult(false);
          setLocalTableData(resArr);
        }
        setPageSize((prevState) => prevState);
        break;
      case "More":
        resArr = tableData.filter(
          (el) => String(el[selectedColumn]) >= String(selectedValue)
        );
        if (resArr.length === 0) {
          setIsNoResult(true);
        } else {
          setIsNoResult(false);
          setLocalTableData(resArr);
        }
        setPageSize((prevState) => prevState);
        break;
      case "Less":
        resArr = tableData.filter(
          (el) => String(el[selectedColumn]) <= String(selectedValue)
        );
        if (resArr.length === 0) {
          setIsNoResult(true);
        } else {
          setLocalTableData(resArr);
        }
        setPageSize((prevState) => prevState);
        break;
      default:
        break;
    }
  };

  const useResetFilterHandler = () => {
    setLocalTableData(tableData);
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((column) => {
            return (
              <th key={column.field}>
                <button
                  type="button"
                  className={
                    column.isSort ? getClassNamesFor(column.field) : ""
                  }
                  onClick={
                    column.isSort ? () => requestSort(column.field) : undefined
                  }
                >
                  {column.fieldName}
                </button>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {localTableData.map((row, id) => {
          return (
            <tr key={id + 1}>
              <td>{id + 1}</td>
              <td>{formatDate(row.date)}</td>
              <td>{row.name}</td>
              <td>{row.count}</td>
              <td>{row.distance}</td>
            </tr>
          );
        })}
      </tbody>
      <div className="d-flex p-2 m-2 justify-content-between">
        <div>
          <div className="d-flex gap-3">
            <Dropdown
              content={dropdownColumns.map((el) => el.field)}
              dispatch={dispatch}
              func={setSelectedColumn}
            />
            <Dropdown
              content={settings}
              dispatch={dispatch}
              func={setSelectedSettings}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Field value"
              name="name"
              onChange={(e) => dispatch(setSelectedValue(e.target.value))}
            />
            <button
              type="button"
              class="btn btn-outline-primary px-5"
              onClick={useApplyFilterHandler}
            >
              Filter
            </button>
            <button
              onClick={useResetFilterHandler}
              type="button"
              class="btn btn-outline-danger px-5"
            >
              Reset
            </button>
          </div>
          {isNoResult && <span>Search has not given any results</span>}
        </div>

        <TablePagination
          totalCount={rows.length}
          pageSize={pageSize}
          changeItemsPerPage={(page) => setPageSize(page)}
          onPageChange={(page) => setCurrentPage(page)}
          currentPage={currentPage}
        />
      </div>
    </Table>
  );
};
export default SpaTable;
