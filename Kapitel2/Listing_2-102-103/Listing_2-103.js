function init() {
  const dragTarget = document.getElementById('drag-target');
  // Datenstrom für das mouseup-Event
  const mouseUpStream = Rx.Observable.fromEvent(document, 'mouseup');
  // Datentrom für das mousemove-Event
  const mouseMoveStream = Rx.Observable.fromEvent(document, 'mousemove');
  // Datenstrom für das mousedown-Event
  const mouseDownStream = Rx.Observable.fromEvent(dragTarget, 'mousedown');
  mouseDownStream
    .mergeMap(mouseDownEvent =>
      mouseMoveStream
        .map(mouseMoveEvent => {
          mouseMoveEvent.preventDefault();
          return {
            left: mouseMoveEvent.clientX - mouseDownEvent.offsetX,
            top: mouseMoveEvent.clientY - mouseDownEvent.offsetY
          };
        })
        .takeUntil(mouseUpStream)
    )
    .subscribe(position => {
      console.log(
        'Relative Position:',
        'links:',
        position.left,
        'oben:',
        position.top
      );
    });
}
document.addEventListener('DOMContentLoaded', init);
