import SpaTable from "./components/SpaTable/SpaTable";
import { getTableData } from "./api/api";
import React, { useState, useEffect } from "react";
function App() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    getTableData().then((data) => {
      setRows(data.table.map((el) => JSON.parse(el))); // getting data from DB
    });
  }, []);

  return (
    rows.length !== 0 && (
      <>
        <SpaTable rows={rows} />
      </>
    )
  );
}

export default App;
