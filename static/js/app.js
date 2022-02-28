// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create new funtion to build the table
function buildTable(data) {
    // Clear any existing data
    tbody.html("");

    // Add the forEach function to Loop through each object the data
    data.forEach((dataRow) => {
        // append row to table body--c.f. <tr> in html
        let row = tbody.append("tr");
   
        // Loop through each field in the dataRow
        // For each key/value pair add values from each pair to the table
        Object.values(dataRow).forEach((val) => {
            // append each value of the object to a cell in the table--c.f. <td> in html
            let cell = row.append("td");
            // add the values
            cell.text(val);
            }
        );
    });
}