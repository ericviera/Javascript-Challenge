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

//Referencing Filter Table button on page
var fil_btn = d3.select("#filter-btn");

// Referencing inpuit element on page
var dateTime = d3.select("#datetime");

fil_btn.on("click", function(){

// Remove table data when button is clicked
d3.select("tbody").html("");
}
);

// Reference value from DateTime field
dateTime.on("change", function(){
    var newText =d3.event.target.value;
    console.log(newText);
});

