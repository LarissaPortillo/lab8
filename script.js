d3.csv("https://cdn.glitch.com/a3e24eba-b378-48e5-a881-609f19dd60d6%2Fdriving.csv?v=1604803460994",d3.autoType)
  .then(data=>{
  data=data;
  const sorted= data.sort((a,b)=>a.year-b.year);
  console.log(sorted);
  
  const height = 500;
  const width= 650;
  
  const svg = d3.select("body")
  .append("svg")
  .attr("viewBox", [0,0, width, height]) ;
  
  const xScale = d3.scaleLinear()
    .domain(d3.extent(data,d=> d.miles)).nice()
    .range([0,width]);
  
  const yScale = d3.scaleLinear()
    .domain(d3.extent(data,d=> d.gas)).nice()
    .range([height,0]);
  
  svg.append("g")
        .attr("class", "y-axis");

  svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0, ${height})`);

  const xAxis = d3.axisBottom()
        .scale(xScale);

        const yAxis = d3.axisLeft()
        .scale(yScale);

  
});