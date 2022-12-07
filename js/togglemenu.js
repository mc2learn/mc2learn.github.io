function togglemenu(){
  d3.select("#sgrmenu").on("mouseover", function(){
    d3.select("#sgrmenu").style("overflow","visible")
  })
  d3.select("#sgrmenu").on("mouseout", function(){
    d3.select("#sgrmenu").style("overflow","hidden")
  })
}