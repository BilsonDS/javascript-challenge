
var tbody = d3.select("#target-table-display");
console.log(data);

// tap "submit button" and "input field"
var submitButton = d3.select("#filter-btn-date");
var inputField = d3.select("#datetime");

// tap city buttons
var citysubmitButton = d3.select("#filter-btn-city");
var cityinputField =  d3.select("#cityname");

// choose state buttons
var statesubmitButton = d3.select("#filter-btn-state");
var statesinputField = d3.select("#statename");

// choose country buttons
var countrysubmitButton = d3.select("#filter-btn-country");
var countryinputField = d3.select("#countryname");

// choose shape buttons
var shapessubmitButton = d3.select("#filter-btn-shape");
var shapeinputField = d3.select("#shapename");


// Make table in HTML and insert data objects

        data.forEach((datetime) => {
            var tRow = tbody.append("tr");
            Object.entries(datetime).forEach(([key, value]) => {
              var tData = tRow.append("td");
              tData.text(value);

              data.forEach((cityname) => {
                var cRow = tbody.append("tr");
                Object.entries(cityname).forEach(([key, value]) => {
                  var cCell = cRow.append("td");
                  cCell.text(value);

                  data.forEach((statename) => {
                    var sRow = tbody.append("tr");
                    Object.entries(statename).forEach(([key, value]) => {
                      var sCell = sRow.append("td");
                      sCell.text(value);

    });
});



// submit buttons
submitButton.on("click", function() {
    // empty data in table
    tbody.html("");
    //stop refresh
    d3.event.preventDefault();
    // input
    var inputField = d3.select("#datetime");
    var inputElement = inputField.property("value");
    // console print
    console.log(inputElement);
    var inputTypeArray = data.filter(one => one.datetime === inputElement); 
    console.log(inputTypeArray)

    inputTypeArray.forEach((selection) => {
        //create row for element
        var row = tbody.append("tr");
        Object.entries(selection).forEach(([key,value]) =>  {
            var cell = row.append("td");
            //adding values to rows
            cell.text(value);

        });
    });
});


// allowing queries to understand diff filter searches
citysubmitButton.on("click", function()  {
    tbody.html("");
    // stop refresh
    d3.event.preventDefault();
    // choose imput
    var cityinputField = d3.select("#cityname");
    var cityinputElement = cityinputField.property("value");
    //print in console
    console.log(cityinputElement);
    // filter data by date
    var cityinputTypeArray = data.filter(two => two.city === cityinputElement);
    console.log(cityinputTypeArray)

    //display in html
    cityinputTypeArray.forEach((selects) =>  {
        // create rows for element
        var Crow = tbody.append("tr");
        Object.entries(selects).forEach(([key,value]) =>  {
            var Ccell = Crow.append("td");
            // adding value to rows
            Ccell.text(value);
        });
    });
});


statesubmitButton.on("click", function()  {
    //clear table
    tbody.html("");
    // stop refresh
    d3.event.preventDefault();
    // value of input element
    var stateinputElement = stateinputField.property("value");
    // print in console
    console.log(stateinputElement);
    // filter data by state
    var stateinputTypeArray = data.filter(three => three.state === stateinputElement);
    console.log(stateinputTypeArray)

    stateinputTypeArray.forEach((selectss) =>  {
        // row for element
        var Srow = tbody.append("tr");
        Object.entries(selectss).forEach(([key,value]) =>  {
            var Scell = Srow.append("td");
            //add value
            Scell.text(value);

        });
    });
});


countrysubmitButton.on("click", function()   {
    //clearing data
    tbody.html("");
    // prevent refresh
    d3.event.preventDefault();
    var countryinputElement = countryinputField.property("value");
    //print in console
    console.log(countryinputElement);
    // filter by country 
    var countryinputTypeArray = data.filter(four => four.country === countryinputElement);
    console.log(countryinputTypeArray)

    countryinputTypeArray.forEach((selectsc) => {
        //create row for element
        var Corow = tbody.append("tr");
        Object.entries(selectsc).forEach(([key,value]) =>  {
            var Cocell = Corow.append("td");
            //add value to rows
            Cocell.text(value);

        });
    });
});


shapessubmitButton.on("click", function()  {
    //clear data
    tbody.html("");
    // prevent refresh
    d3.event.preventDefault();
    //value of input element
    var shapeinputElement = shapeinputField.property("value");
    //print in console
    console.log(shapeinputElement);
    //filter by shape
    var shapeinputTypeArray = data.filter(five => five.shape === shapeinputElement);
    //print in console
    console.log(shapeinputTypeArray)

    shapeinputTypeArray.forEach((selectsh) =>  {
        // create row for element
        var Shrow = tbody.append("tr");
        Object.entries(selectsh).forEach(([key,value]) =>  {
            var Shcell = Shrow.append("td");
            Shcell.text(value);

        });
    });
});


















 