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
// Create new function to filter on date
function handleClick() {
    // Get datetime value from filter  
    let date = d3.select("#datetime").property("value");

    // Set a default filter and save it to a new variable
    let filteredData = tableData;

    // Check for a date filter using an if statement; see if date was entered then filter on date
    if (date) {
        //Apply 'filter' to the table data to only keep rows where 'datetime' matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using filtered data
    // @Note: If no date was entered, the filteredData will just be original tableData
    buildTable(filteredData);
}

// Listen for button click
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads to see original table--all unfiltered data
buildTable(tableData);
