import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableData: [],
  filtredTableData: [],
  selectedColumn: "",
  selectedSettings: "",
  selectedValue: "",
};

export const tableSlice = createSlice({
  //adding actions to work with storage
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
} = tableSlice.actions;

export default tableSlice.reducer;
