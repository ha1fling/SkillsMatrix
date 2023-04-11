fetch('data.json')
    .then(function (response) {
        return response.json();
    }).then(function (apiJsonData) {
    console.log(apiJsonData);
    renderDataInTheTable(apiJsonData);
})

function renderDataInTheTable(skills) {
    const table = document.getElementById("table");
    skills.forEach(skill => {
        skills.forEach(skill => {
            let column = document.createElement("tr");
            Object.keys(skill).forEach((key) => {
                let cell = document.createElement("th");
                cell.innerText = key;
                column.appendChild(cell);
            })
            let row = document.createElement("tr");
            Object.values(skill).forEach((value) => {
                let cell = document.createElement("td");
                cell.innerText = value;
                row.appendChild(cell);
            })
            table.appendChild(column);
            table.appendChild(row);
        });
    });
}