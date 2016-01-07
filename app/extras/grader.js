var brick = angular.element( '#brick-view' ).scope().brick;

if (brick.color === 'Green') {
  window.dispatchEvent(new CustomEvent('brick-color', {'detail': 'passed'}));
}

if (brick.size === '2 x 6') {
  window.dispatchEvent(new CustomEvent('brick-size', {'detail': 'passed'}));
}

if (brick.price === 0.03) {
  window.dispatchEvent(new CustomEvent('brick-price', {'detail': 'passed'}));
}

if (brick.quantity === 697) {
  window.dispatchEvent(new CustomEvent('brick-quantity', {'detail': 'passed'}));
}
