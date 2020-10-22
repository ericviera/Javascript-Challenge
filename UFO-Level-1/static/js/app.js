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
    })
})