    /* multiple sections
    for (var i = 2; i <= colors.length; i++) { //enquanto cada cor tiver sido atribuida
      if (colors[i-1] !== colors[i]) { // se as cores forem diferentes
        _setColor(colors[i-1], meta);
        meta.dataset._children = originalDatasets.slice(startIndex, i);
        meta.dataset.draw();
        startIndex = i - 1;
      }
    }
    meta.dataset._children = originalDatasets.slice(startIndex);
    meta.dataset.draw();
    meta.dataset._children = originalDatasets;
    points.forEach(function(point) {
      _setBorderColor('rgb(179,14,235)', point);
      point.draw(area);
    });
    */
   