import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableData: [],
  filtredTableData: [],
  selectedColumn: "",
  selectedSettings: "",
  selectedValue: "",
};

export const tableSlice = createSlice({
  name: "tableStore",
  initialState,
  reducers: {
    setFiltredData: (state, action) => {
      state.filtredTableData = action.payload;
    },
    setTableData: (state, action) => {
      state.tableData = action.payload;
    },
    setSelectedColumn: (state, action) => {
      state.selectedColumn = action.payload;
    },
    setSelectedSettings: (state, action) => {
      state.selectedSettings = action.payload;
    },
    setSelectedValue: (state, action) => {
      state.selectedValue = action.payload;
    },

    filterTable: (state) => {
      /*switch (state.selectedSettings) {
        case "Equal":
          console.log("state.tableData", state.tableData);
          state.filtredTableData = state.tableData.filter(
            (el) => String(el.selectedColumn) === String(state.selectedValue)
          );
          console.log("state.filtredTableData", state.filtredTableData);
          break;
        case "Include":
          state.filtredTableData = state.tableData.filter((el) =>
            String(el.selectedColumn).includes(String(state.selectedValue))
          );
          break;
        case "More":
          state.filtredTableData = state.tableData.filter(
            (el) => String(el.selectedColumn) >= String(state.selectedValue)
          );
          break;
        case "Less":
          state.filtredTableData = state.tableData.filter(
            (el) => String(el.selectedColumn) <= String(state.selectedValue)
          );
          break;
        default:
          state.filtredTableData = state.tableData;
          break;
      }*/
    },
    resetFilter: (state) => {
      state.filtredTableData = state.tableData;
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["tableStore/setTableData"],
        ignoredActions: ["tableStore/setFiltredData"],
      },
    }),
});

export const {
  setFiltredData,
  setTableData,
  setSelectedColumn,
  setSelectedSettings,
  setSelectedValue,
  filterTable,
  resetFilter,
} = tableSlice.actions;

export default tableSlice.reducer;
