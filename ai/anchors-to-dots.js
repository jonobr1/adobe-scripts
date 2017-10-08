(function() {

  if (app.documents.length <= 0) {
    app.documents.add();
  }

  if (selection.length <= 0) {
    alert([
      'You must select at least one path in',
      'order to run this script.'
    ].join(' '));
    return;
  }

  var radius = 2.5;
  var fill = new RGBColor();
  fill.red   = '255';
  fill.green = '100';
  fill.blue  = '100';

  for (var i = 0; i < selection.length; i++) {

    var item = selection[i];

    if (!(/pathitem/i.test(item.typename))) {
      continue;
    }

    if (!item.editable) {
      // Don't modify locked paths
      continue;
    }

    var points = item.pathPoints;
    var group = item.parent.groupItems.add();

    for (var j = 0; j < points.length; j++) {

      var point = points[j];
      var x = point.anchor[0];
      var y = point.anchor[1];

      var top = y + radius;
      var left = x - radius;
      var width = height = radius * 2;

      var circle = group.pathItems.ellipse(top, left, width, height);
      circle.fillColor = fill;
      circle.stroked = false;


    }

  }

})();
