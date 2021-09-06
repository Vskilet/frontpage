Plotly.d3.csv('data/victor.csv', function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) {return row[key]})
  }

  var data = [{
    type: "sunburst",
    maxdepth: 3,
    ids: unpack(rows, 'ids'),
    labels: unpack(rows, 'labels'),
    parents: unpack(rows, 'parents'),
    hovertext: unpack(rows, 'text'),
    showlegend: 'false',
    insidetextorientation: 'radial'
  }]

  var layout = {
    margin: {l: 0, r: 0, b: 0, t:0},
    width: 800,
    height: 800
  }

  Plotly.newPlot('myDiv', data, layout)
})
