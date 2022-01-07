const putdataAction = (data: any) => {
  return {
    type: "update",
    data: data.value,
    datasource: data.datasour.datasource,
  };
};
const updatedataAction = (item: string) => {
  return {
    type: "delete",
    data: item,
  };
};

export { putdataAction, updatedataAction };
