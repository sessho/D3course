// d3.select('');
// d3.selectAll('.');


d3.select('h1').style('color','red')
    .attr('class', 'heading' )
    .text('Updated H1 tag');

d3.select('body').append('p').text('first paragraph');
d3.select('body').append('p').text('second paragraph');
d3.select('body').append('p').text('third paragraph');

d3.selectAll('p').style('color','blue');

// ------------------ lesson 2 set data  ---------------------

let dataset = [1,2,3,4,5,6,7,8];

d3.select('body') // The code is traveled one by one element. print it an see it
    .selectAll('p')
    .data(dataset)
    .enter() // this method will take data elements one by one an perform further operations 
    .append('p').style('color','blue') // append data for each data element
   // .text('D3 is awesome!');
    .text(function(d){return d;})
    .append('p').style('color', 'blue')
    .text(dataset);
    
// // // ------------------ lesson 3 simple bar chart ---------------------

let dataset2 = [80,100,56,200,180,30,40,120,160];

let svgWidth = 500; 
let svgHeight = 300; 
let barPadding = 5;
let barWidth = (svgWidth / dataset2.length); // to define the width of each bar

let svg = d3.select('.bar-chart')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

let barChart = svg.selectAll('rect') // Define de bar object with the dataset2
    .data(dataset2)
    .enter()
    .append('rect')
    
    .attr('y',function(d) {
        return svgHeight - d
    })
    .attr('height', function(d) {
        return d;
    })
    .attr('width', barWidth - barPadding)
    .attr('transform', function(d,i) {
        let translate = [barWidth * i, 0]; // The first number is X (barWidth * i), the second is (0)
        return 'translate(' + translate + ')';
    })

// ------------------ lesson 4 text labels  ---------------------

    
let text = svg.selectAll('text') // Now this selection is empty since there ir no text element in HTML right now
    .data(dataset2)
    .enter()
    // From here everything will be set one by one element
    .append('text')
    .text (function(d) { // Print the numbers of the dataset as a text
        return d;
    })
    .attr("y", function(d,i) {
        return svgHeight - d - 2;
    })
    .attr('x', function(d,i) {
        return barWidth * i;
    })
    .attr('fill','#A64C38');


    // ------------------ lesson 5 Scales ---------------------

let dataset3 = [1,2,3,4,5];

let svgWidth2 = 500;
let svgHeight2 = 300;
let barPadding2 = 5;
let barWidth2 = (svgWidth2 / dataset3.length); 

let svg2 = d3.select('.bar-chart2')
    .attr('width', svgWidth2)
    .attr('height', svgHeight2)
    .style('background-color', '#EEEEEE');

let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset3)]) // ( d3.max(dataset2) the maximum number in the dataset 
    .range([0, svgHeight2]); // range will keep the values within the svg container

let barChart2 = svg2.selectAll('rect') // Define de bar object with the dataset2
    .data(dataset3)
    .enter()
    .append('rect')

    .attr('y', function (d) {
        return svgHeight2 - yScale(d)
    })
    .attr('height', function (d) {
        return yScale(d);
    })
    .attr('width', barWidth2 - barPadding2)
    .attr('transform', function (d, i) {
        let translate2 = [barWidth2 * i, 0]; // The first number is X (barWidth * i), the second is (0)
        return 'translate(' + translate2 + ')';
    })


// ------------------ lesson 6 Axes ---------------------

// d3.axisTop()
// d3.axisBottom()
// d3.axisRigth()
// d3.axisLeft()

let dataset4 = [80,100,56,120,100,30,40,120,160];

let svgWidth3 = 500
let svgHeight3 = 300; 

let svg3 = d3.select('.axis')
    .attr('width', svgWidth3)
    .attr('height', svgHeight3);

let xScale2 = d3.scaleLinear()
    .domain([0, d3.max(dataset4)])
    .range([0, svgWidth3]);

let yScale2 = d3.scaleLinear()
    .domain([0,d3.max(dataset4)])
    .range([svgHeight3,0]);

let x_axis = d3.axisBottom()
    .scale(xScale2);

let y_axis = d3.axisLeft()
    .scale(yScale2);

svg3.append('g')
    .attr('transform', 'translate(50,10)')
    .call(y_axis);

let xAaxisTranslate = svgHeight3 - 20;

svg3.append('g')
    .attr('transform', 'translate(50,' + xAaxisTranslate +')')
    .call(x_axis);


// ------------------ lesson 7 SVG Elements ---------------------

let svgWidth4 = 600;
let svgHeight4 = 500;

let svg4 = d3.select('#simple') // This is the container of the shape to be designed
    .attr('width', svgWidth4)
    .attr('height', svgHeight4)
    .attr('class', 'svg-container');

let line = svg4.append('line')
    .attr('x1',100)
    .attr('x2',500)
    .attr('y1',50)
    .attr('y2',50)
    .attr('stroke','red')
    .attr('stroke-width', 5 );

let rect2 = svg4.append('rect')
    .attr('x',100)
    .attr('y',100)
    .attr('width',200)
    .attr('height',100)
    .attr('fill','#9b96ff');

let circle = svg4.append('circle')
    .attr('cy',200)
    .attr('cx',300)
    .attr('r',80)
    .attr('fill','#7ce8d5');
   
// ------------------ lesson 8 Pie Chart  ---------------------





