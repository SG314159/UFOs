// Section 11.2.4 
// import data from data.js
const tableData=data;

// Reference the HTML table using d3
// Use d3.select to tell JS to look for the <tbody> tags in html
var tbody =d3.select("tbody");


// Clearing existing data because appending data from the 
// array. Otherwise, the users will end up with pre-filtered data.
// Standard way to clear data is tbody.html(""); which creates table with blank string
function buildTable(data){
    tbody.html("");
    data.forEach((dataRow) => {
        let row=tbody.append("tr"); // find <tbody> tag in HTML and add table row
        // Loop thru each field in the row and add whatever is in td tag
        // Object.values is reference to one obj from array of UFO sightings and send the values into
        // the dataRow. The forEach(val) specifies one obj per row. i.e. 
        // "put each UFO sighting onto its own row of data"
        Object.values(dataRow).forEach((val)=>{
            let cell=row.append("td"); // append data into a table data tag <td>
            cell.text(val);  // extract text of the value 
        });
    });   
};

// dealing with clicks from user; filters table each time filter button clicked
function handleClick(){
    // select elmt matching "datetime" id in the HTML tags (date value will be here)
    // Chaining property("value") says D3 to grab date info and hold it in 'date' variable
    let date=d3.select("#datetime").property("value");

    // Set default filter & save to new variable. Default is original data.
    let filteredData=tableData;
    if (date) {
        // Apply filter method to match datetime value selected
        // Arrow fcn: show only rows where date equals date filter. The === tests for strict equality.
        filteredData=filteredData.filter(row => row.datetime === date);
    };

    // Build the filtered table
    buildTable(filteredData);
};

// Listen for the event of button clicked. Selector string "#filter-btn" is id for HTML tag.
// .on( , ) tells D3 to execute handleClick fcn when button with that id is clicked.
d3.selectAll("#filter-btn").on("click", handleClick);

// Load table as soon as page loads. Allows user to see original table before filtering it.
buildTable(tableData);

