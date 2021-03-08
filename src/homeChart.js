

const addData = (chart, data) => {
    chart.data.datasets.data = data
    chart.update();
}


const removeData = (chart) => {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}



export { addData, removeData }