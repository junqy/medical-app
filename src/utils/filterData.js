export const filterData = (data, selectedId) => {
    const filteredData = data.find(
        (item) => item.id === selectedId
    );

    return filteredData;
};