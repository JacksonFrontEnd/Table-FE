import SpaTable from "./components/SpaTable/Table";
function App() {
  const columns = [
    { field: "id", fieldName: "#" },
    { field: "date", fieldName: "Date" },
    { field: "name", fieldName: "Name" },
    { field: "count", fieldName: "Count" },
    { field: "distance", fieldName: "Distance" },
  ];
  const data = [
    { date: "15-10-2017", name: "Tickets", count: 9, distance: 189 },
    { date: "15-10-2017", name: "Tickets", count: 9, distance: 189 },
  ];
  return (
    <>
      <SpaTable columns={columns} rows={data} />
    </>
  );
}

export default App;
