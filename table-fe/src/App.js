import SpaTable from "./components/SpaTable/SpaTable";
function App() {
  const data = [
    { date: new Date(), name: "Tickets", count: 1, distance: 120 },
    { date: new Date(), name: "Books", count: 2, distance: 130 },
    { date: new Date(), name: "Pens", count: 3, distance: 140 },
    { date: new Date(), name: "Pencils", count: 4, distance: 150 },
    { date: new Date(), name: "Commits", count: 5, distance: 160 },
    { date: new Date(), name: "Papers", count: 6, distance: 170 },
    { date: new Date(), name: "clips", count: 7, distance: 180 },
    { date: new Date(), name: "staplers", count: 8, distance: 190 },
    { date: new Date(), name: "scissors", count: 9, distance: 200 },
    { date: new Date(), name: "erasers", count: 10, distance: 210 },
    { date: new Date(), name: "markers", count: 11, distance: 220 },
    { date: new Date(), name: "glues", count: 12, distance: 230 },
  ];
  return (
    <>
      <SpaTable rows={data} />
    </>
  );
}

export default App;
