
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

c1_1 = [105,5,"I lost my parents in a car accident when I was 13. The odds were stacked against me. It is only thanks to my mentor's support that today I am a father of two."];
c1_2 = [111,7,"It’s hard to describe everything that Julie has meant to me. She helped become the person that I am today."];
c1_3 = [108,15,"Sam, I still carry that moment in my heart, when you sat me down and looked me straight in the eyes and said “John, there is nothing more valuable in your life than your family”."];
c1_4 = [90,4,"So proud of my boy! He graduated from university today! We couldn’t be more proud of everything that he’s accomplished."];
c1_5 = [100,0,"I feel blessed that I have had the opportunity in my life to be a positive force other people’s lives and help them grow. "];
c1_6 = [78,17,"I feel blessed that I have had the opportunity in my life to be a positive force other people’s lives and help them grow. "];

a1 = [-122,30,"I feel blessed that I have had the opportunity in my life to be a positive force other people’s lives and help them grow. "];
a2 = [-132,10,"I lost my parents in a car accident when I was 13. The odds were stacked against me. It is only thanks to my mentor's support that today I am a father of two."];
a3 = [-112,0,"Sam, I still carry that moment in my heart, when you sat me down and looked me straight in the eyes and said “John, there is nothing more valuable in your life than your family”."];
a4 = [-120,7,"It’s hard to describe everything that Julie has meant to me. She helped become the person that I am today."];
a5 = [-125,-8,"I feel blessed that I have had the opportunity in my life to be a positive force other people’s lives and help them grow. "];
a6 = [-152,-10,"I've mentored my neighbor's son a couple of times when he asks me about tough life questions."];
a7 = [-142,-11,"My mentor is a great person who always takes the time to give me answers to tough questions."];

b1 = [-154,-20,"It’s hard to describe everything that Julie has meant to me. She helped become the person that I am today."];
b2 = [-156,-25,"Sam, I still carry that moment in my heart, when you sat me down and looked me straight in the eyes and said “John, there is nothing more valuable in your life than your family”."];
b3 = [-150,-29,"I feel blessed that I have had the opportunity in my life to be a positive force other people’s lives and help them grow. "];
b4 = [-161,-19,"I lost my parents in a car accident when I was 13. The odds were stacked against me. It is only thanks to my mentor's support that today I am a father of two."];
b5 = [-153,-22,"My mentor is a great person who always takes the time to give me answers to tough questions."];

d1 = [0,-65,"It’s hard to describe everything that Julie has meant to me. She helped become the person that I am today."];
d2 = [-6,-66,"Sam, I still carry that moment in my heart, when you sat me down and looked me straight in the eyes and said “John, there is nothing more valuable in your life than your family”."];
d4 = [3,-67,"I feel blessed that I have had the opportunity in my life to be a positive force other people’s lives and help them grow. "];
d5 = [-1,-70,"I lost my parents in a car accident when I was 13. The odds were stacked against me. It is only thanks to my mentor's support that today I am a father of two."];
d6 = [-9,-72,"My mentor is a great person who always takes the time to give me answers to tough questions."];

e1 = [22,30,"It’s hard to describe everything that Julie has meant to me. She helped become the person that I am today."];
e2 = [32,10,"Sam, I still carry that moment in my heart, when you sat me down and looked me straight in the eyes and said “John, there is nothing more valuable in your life than your family”."];
e3 = [12,0,"I feel blessed that I have had the opportunity in my life to be a positive force other people’s lives and help them grow. "];
e4 = [20,7,"I lost my parents in a car accident when I was 13. The odds were stacked against me. It is only thanks to my mentor's support that today I am a father of two."];
e5 = [25,-8,"I've mentored my neighbor's son a couple of times when he asks me about tough life questions."];
e6 = [52,-10,"I've mentored my neighbor's son a couple of times when he asks me about tough life questions."];
e7 = [42,-11,"My mentor is a great person who always takes the time to give me answers to tough questions."];

f1 = [122,-30,"It’s hard to describe everything that Julie has meant to me. She helped become the person that I am today."];
f2 = [122,-10,"Sam, I still carry that moment in my heart, when you sat me down and looked me straight in the eyes and said “John, there is nothing more valuable in your life than your family”."];
f3 = [122,0,"I feel blessed that I have had the opportunity in my life to be a positive force other people’s lives and help them grow. "];
f4 = [120,-7,"I lost my parents in a car accident when I was 13. The odds were stacked against me. It is only thanks to my mentor's support that today I am a father of two."];
f5 = [125,-18,"I've mentored my neighbor's son a couple of times when he asks me about tough life questions."];
f6 = [122,-10,"I've mentored my neighbor's son a couple of times when he asks me about tough life questions."];
f7 = [122,-21,"My mentor is a great person who always takes the time to give me answers to tough questions."];

g1 = [92,-30,"It’s hard to describe everything that Julie has meant to me. She helped become the person that I am today."];
g2 = [99,-50,"Sam, I still carry that moment in my heart, when you sat me down and looked me straight in the eyes and said “John, there is nothing more valuable in your life than your family”."];
g3 = [89,-45,"I feel blessed that I have had the opportunity in my life to be a positive force other people’s lives and help them grow. "];
g4 = [108,-59,"I lost my parents in a car accident when I was 13. The odds were stacked against me. It is only thanks to my mentor's support that today I am a father of two."];
g5 = [95,-34,"My mentor is a great person who always takes the time to give me answers to tough questions."];
g6 = [93,-49,"I've mentored my neighbor's son a couple of times when he asks me about tough life questions."];
g7 = [90,-36,"My mentor is a great person who always takes the time to give me answers to tough questions."];


var projection = d3.geoMercator();

var lines = svg.selectAll("line");
lines.data([[a3,a1],[a3,a2],[a4,a5],[a7,a5],[a1,a6],[a2,a5],
  [c1_1,c1_2],[c1_1,c1_3],[c1_1,c1_4],[c1_1,c1_5],[c1_4,c1_6],
  [b1,b2],[b1,b3],[b1,b4],[b2,b5],[b1,b5],
  [d1,d2],[d4,d5],[d6,d2],[d5,d1],[d4,d6],
  [e1,e3],[e1,e5],[e2,e6],[e4,e7],
  [f1,f3],[f2,f6],[f4,f3],[f7,f5],
  [g1,g4],[g6,g7],[g3,g2],
  [a2,b2],[d6,d4],[c1_2,d2]
]).enter()
.append("line")
.style("stroke", "#B6B2C8")  // colour the line
.attr("x1", function (d) { console.log(d); return projection(d[0])[0]; })     // x position of the first end of the line
.attr("y1", function (d) { return projection(d[0])[1]; })        // y position of the first end of the line
.attr("x2", function (d) { return projection(d[1])[0]; })       // x position of the second end of the line
.attr("y2", function (d) { return projection(d[1])[1]; })
.transition().duration(1000).delay(4000)
.style("stroke", "black")  ;

var cirlces = svg.selectAll("circle");
cirlces.data([g1,g2,g3,g4,g5,g6,g7,f1,f2,f3,f4,f5,f6,f7,e1,e2,e3,e4,e5,e6,e7,d1,d2,d6,d4,d5,b1,b2,b3,b4,b5,a1,a2,a3,a4,a5,a6,a7,c1_1, c1_2, c1_3, c1_4, c1_5, c1_6]).enter()
.append("circle")
.attr("cx", function (d) { return projection(d)[0]; })
.attr("cy", function (d) { return projection(d)[1]; })
.attr("r", "0px")
.on("mouseover", function(d) {
  console.log(d3.select("#quote_content").text());
  d3.select("#quote_content").text(d[2]);
  d3.selectAll(".highlight").classed("highlight",false);
  d3.select(this).classed("highlight",true);
})
  /*
 div.transition()
     .duration(200)
     .style("opacity", .9);
     console.log(d);
   div.html(d[2])
     .style("left", (d3.event.pageX) + "px")
     .style("top", (d3.event.pageY - 28) + "px");
   })*/
 .on("mouseout", function(d) {
   //d3.select(this).classed("highlight",false);
   /*
   div.transition()
     .duration(500)
     .style("opacity", 0);
     */
   })
.transition().duration(1000).ease(d3.easeBounce).delay(function(d, i) { return i*75; })
.attr("r", "7px")
.attr("fill", function(d){
  if (d[0] == 110){
    return "#eccc09";
  } else {
    return "#1D0097";
  }
});



}, 500);
