
var svg = d3.select("svg");

var path = d3.geoPath();

d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
  if (error) throw error;

  svg.append("g")
      .attr("class", "states")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
      .attr("class", "state-path")
      .attr("d", path);

  svg.append("path")
      .attr("class", "state-borders")
      .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));
});

// add circles to svg
setTimeout(function() {
var div = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

a = [-122.490402, 37.786453, "i was mentored by my grade school teacher, and she gave me this token after we spoke about self-pride"];
b = [-72.389809, 40.72728, "gifted this token by a young man i'm a mentor to, whom i see on a daily basis"];
c = [50.389809, -20.72728, "was given this token by a student who rides the bus i drive"];

d = [0.490402, -40, "one of my soccer players gave this to me after practice"];
e = [100, 0, "my reading partner gave this to me after we read huckleberry fin 2gether"];
f = [25, -25.72728, "my school bus driver handed these out to our entire bus one day"];

g = [-50, -40, "an older student in class gave me this"];
h = [75, -20, "the lunch lady at my school handed these out on each tray"];
i = [-100, 35, "my neighbor's son gave me this after we talked in the yard yesterday"];

j = [-8, -4, "the local police officer gave this to me"];
k = [38, 19, "my mother's best friend handed this to me during graduation"];
l = [14, -33, "my mailman left this with me after we talked about dogs"];

pittsburgh = [105,5,"ayyyye whats good"];

c1_1 = [105,5,"hi"];
c1_2 = [111,7,"Thanks to you, I got into the college I wanted to and am pursuing my dreams. - MentorByte from Michelle"];
c1_3 = [108,15,"I'll never forget the qutoes you would tell me when I was struggling at school. - MentorByte from Mike"];
c1_4 = [90,4,"I'll never forget the help you've provided to me and my family. - MentorByte from Sarah"];
c1_5 = [100,0,"You've been a key part in my success over the years. Thank you. - MentorByte from Tom"];
c1_6 = [78,17,"You've always helped me talk through tough times when I needed it the most. - MentorByte from Andy"];

a1 = [115,15,"ayyyye whats good"];
a2 = [80,10,"ayyyye whats good"];
a3 = [89,-5,"ayyyye whats good"];
a4 = [70,17,"ayyyye whats good"];


a5 = [-125,-8,"ayyyye whats good"];
a6 = [-152,-10,"ayyyye whats good"];
a7 = [-142,-11,"ayyyye whats good"];

b1 = [-154,-20,"hi hi"];
b2 = [-156,-25,"hi hi"];
b3 = [-150,-29,"hi hi"];
b4 = [-161,-19,"hi hi"];
b5 = [-153,-22,"hi hi"];

d1 = [0,-65,"hi hi"];
d2 = [-6,-66,"hi hi"];
d4 = [3,-67,"hi hi"];
d5 = [-1,-70,"hi hi"];
d6 = [-9,-72,"hi hi"];

e1 = [22,30,"ayyyye whats good"];
e2 = [32,10,"ayyyye whats good"];
e3 = [12,0,"ayyyye whats good"];
e4 = [20,7,"ayyyye whats good"];
e5 = [25,-8,"ayyyye whats good"];
e6 = [52,-10,"ayyyye whats good"];
e7 = [42,-11,"ayyyye whats good"];

f1 = [122,-30,"ayyyye whats good"];
f2 = [122,-10,"ayyyye whats good"];
f3 = [122,0,"ayyyye whats good"];
f4 = [120,-7,"ayyyye whats good"];
f5 = [125,-18,"ayyyye whats good"];
f6 = [122,-10,"ayyyye whats good"];
f7 = [122,-21,"ayyyye whats good"];

g1 = [92,-30,"ayyyye whats good"];
g2 = [99,-50,"ayyyye whats good"];
g3 = [89,-45,"ayyyye whats good"];
g4 = [108,-59,"ayyyye whats good"];
g5 = [95,-34,"ayyyye whats good"];
g6 = [93,-49,"ayyyye whats good"];
g7 = [90,-36,"ayyyye whats good"];


var projection = d3.geoMercator();

var lines = svg.selectAll("line");
lines.data([
  [c1_1,c1_2],[c1_1,c1_3],[c1_1,c1_4],[c1_1,c1_5],[c1_1,c1_6]
]).enter()
.append("line")
.style("stroke", "black")  // colour the line
.attr("x1", function (d) { console.log(d); return projection(d[0])[0]; })     // x position of the first end of the line
.attr("y1", function (d) { return projection(d[0])[1]; })        // y position of the first end of the line
.attr("x2", function (d) { return projection(d[1])[0]; })       // x position of the second end of the line
.attr("y2", function (d) { return projection(d[1])[1]; })
.transition().duration(1000)
.style("stroke", "black")  ;

var lines_secondary = svg.selectAll("line");
lines.data([
  [c1_2,a1],[c1_6,a2],[c1_4,a3],[c1_6,a4]]).enter()
.append("line")
.style("stroke", "grey")  // colour the line
.attr("x1", function (d) { console.log(d); return projection(d[0])[0]; })     // x position of the first end of the line
.attr("y1", function (d) { return projection(d[0])[1]; })        // y position of the first end of the line
.attr("x2", function (d) { return projection(d[1])[0]; })       // x position of the second end of the line
.attr("y2", function (d) { return projection(d[1])[1]; })
.transition().duration(1000)
.style("stroke", "grey")  ;

var cirlces = svg.selectAll("circle");
cirlces.data([c1_1, c1_2, c1_3, c1_4, c1_5, c1_6]).enter()
.append("circle")
.attr("cx", function (d) { return projection(d)[0]; })
.attr("cy", function (d) { return projection(d)[1]; })
.attr("r", "0px")
.on("mouseover", function(d) {
  if (d[0] != 105){
     div.transition()
       .duration(200)
       .style("background-color", "#D9D6EA")
       .style("color","black")
       .style("opacity", .9);
       console.log(d);
     div.html(d[2])
       .style("left", (d3.event.pageX) + "px")
       .style("top", (d3.event.pageY - 28) + "px");
   } else {
     console.log(d);
   }
 })
 .on("mouseout", function(d) {
   div.transition()
     .duration(500)
     .style("opacity", 0);
   })
.transition().duration(2000).ease(d3.easeBounce).delay(function(d, i) { return i*75; })
.attr("r", "7px")
.attr("fill", function(d){
  if (d[0] == 105){
    return "black";
  } else {
    return "#1D0097";
  }
});

var cirlces_secondary = svg.selectAll("circle");
cirlces.data([a1,a2,a3,a4]).enter()
.append("circle")
.attr("cx", function (d) { return projection(d)[0]; })
.attr("cy", function (d) { return projection(d)[1]; })
.attr("r", "0px")

.transition().duration(2000).ease(d3.easeBounce).delay(function(d, i) { return i*75; })
.attr("r", "7px")
.attr("opacity",.5)
.attr("fill", function(d){
  if (d[0] == 105){
    return "black";
  } else {
    return "#1D0097";
  }
});





}, 500);
