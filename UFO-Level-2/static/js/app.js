// from data.js
var tableData = data;

// YOUR CODE HERE!

//Getting reference to table body
var tbody = d3.select("tbody");

// Console.log the data
console.log(data);


// Looping through and appending data rows on table
data.forEach(function(ufo_data){
    console.log(ufo_data);
    var tableRow = tbody.append("tr");
    
    Object.entries(ufo_data).forEach(function([k,v]){
        console.log(k,v)
        var Cell = tableRow.append("td");
        Cell.text(v);
    });
});

//Referencing Filter Table button on page
var button = d3.select("#filter-btn");

//Event Handler
button.on("click", function(){

// Remove table data when button is clicked
d3.select("tbody").html("");

// Prevent the page from refreshing
d3.event.preventDefault();

 // Select the input element and get the raw HTML node
var inputElement= d3.select("#datetime");
console.log(inputElement);

// Get the value property of the input element
var inputValue = inputElement.property("value");
console.log(inputValue);

var filteredData = tableData.filter(diatiempo => diatiempo.datetime === inputValue);
console.log(filteredData);

filteredData.forEach((ufo_data) => {
    var row = tbody.append('tr');

    Object.entries(ufo_data).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});

