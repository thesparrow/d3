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
    console.log(allStates);

    //move through each dataset for 2015 
    //console.log(data.period);

    //create circles based on json data 
    /*var circles = svgContainer.selectAll("circle")
        .data(data)
        .enter()
        .append("circle");

    //graph attributes     
    var circleAttributes = circles
        .attr("cx", function(d) { return d.x_axis; })
        .attr("cy", function(d) { return d.y_axis; })
        .attr("r", function(d) { return d.radius; })
        .style("fill", function(d) { return d.color; }); */
});
