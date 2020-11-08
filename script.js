d3.csv("https://cdn.glitch.com/a3e24eba-b378-48e5-a881-609f19dd60d6%2Fdriving.csv?v=1604803460994",d3.autoType)
  .then(data=>{
  data=data;
  const sorted= data.sort((a,b)=>a.year-b.year);
  console.log(sorted);
  
  const height = 350;
  const width= 600;
  const margin = ({top: 20, right: 30, bottom: 30, left: 40});
  
  const svg = d3.select("body")
  .append("svg")
  .attr("viewBox", [0,0, width, height]) ;
  
  const xScale = d3.scaleLinear()
    .domain(d3.extent(data,d=> d.miles)).nice()
    .range([margin.left, width - margin.right]);
  
  const yScale = d3.scaleLinear()
    .domain(d3.extent(data,d=> d.gas)).nice()
    .range([height - margin.bottom, margin.top]);
  
  svg.append("g")
        .attr("class", "y-axis")
        .attr("transform", `translate(${margin.left},0)`);

  svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height - margin.bottom})`);
  


  const xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(width/80);

  const yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(null, "$.2f");
  
  svg.select(".x-axis")
        .call(xAxis);
  
  svg.select(".y-axis")
        .call(yAxis);
  
  
  
  svg.selectAll("circle")
  .data(sorted)
  .enter()
  .append("circle")
  .attr("cx", d=>xScale(d.miles))
  .attr("cy",d=> yScale(d.gas))
  .attr("r",4)
  .attr("fill","steelblue");
  
  function halo(text) {
  text
    .select(function() {
      return this.parentNode.insertBefore(this.cloneNode(true), this);
    })
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 4)
    .attr("stroke-linejoin", "round");
};

function position(d) {
  const t = d3.select(this);
  switch (d.side) {
    case "top":
      t.attr("text-anchor", "middle").attr("dy", "-0.7em");
      break;
    case "right":
      t.attr("dx", "0.4em")
        .attr("dy", "0.30em")
        .attr("text-anchor", "start");
      break;
    case "bottom":
      t.attr("text-anchor", "middle").attr("dy", "1.4em");
      break;
    case "left":
      t.attr("dx", "-0.1em")
        .attr("dy", "0.30em")
        .attr("text-anchor", "end");
      break;
  }
};

  
svg.selectAll('text')
            .data(sorted)
            .enter()
            .append('text')
            .attr("x",d=>xScale(d.miles))
            .attr("y",d=>yScale(d.gas))
            .attr('font-size', 7.5)
            .attr('text-anchor', 'start')
            .text(d => d.year)
            .each(position)
            .call(halo);
  




  


  
});