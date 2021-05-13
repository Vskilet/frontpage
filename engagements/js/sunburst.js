var data = [{
  type: "sunburst",
  labels: ["Victor", "Jeunesse", "Technique", "GDJ", "AJR", "Sono Culte", "Sono Events", "Site APC", "Hébergement WEB", "Formation" ],
  parents: ["", "Victor", "Victor", "Jeunesse", "Jeunesse", "Technique", "Technique", "Technique", "Technique", "AJR" ],
  values:  [0, 0, 0, 25, 25, 25, 25, 25, 25, 0.2 ],
  outsidetextfont: {size: 20, color: "#377eb8"},
  leaf: {opacity: 0.4},
  marker: {line: {width: 2}},
}];

var layout = {
  margin: {l: 0, r: 0, b: 0, t: 0},
  width: 500,
  height: 500
};


Plotly.newPlot('myDiv', data, layout);
 
