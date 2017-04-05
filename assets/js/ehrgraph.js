//create container 
var svgContainer = d3.select("body").append("svg")
    .attr("width", 600)
    .attr("height", 600);



var margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

//create bar graph 
//set x-axis as the states 
//set y-axis as the perecentage 

var allStates = [];


d3.json("assets/data/ehr.json", function(err, data) {
    if (err) {
        console.log(err);
    }

    for (var i = 0; i < data.length; i++) {
        //console.log(data[i]); 
        var stateData = {};
        if (data[i]["period"] === "2015") {
            allStates.push({
                year: data[i]["period"],
                state: data[i]["region"],
                basicEHR: data[i]["pct_phys_basic_ehr"]
            });
        }
    }

});
