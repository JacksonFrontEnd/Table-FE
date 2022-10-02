const url = (endpoint) => `http://localhost:3001/api/${endpoint}`;

export const getTableData = async () => {
  const response = await fetch(url("table/"));
  return response.json();
};
