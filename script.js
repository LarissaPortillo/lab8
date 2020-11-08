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
  
  
  
  
});