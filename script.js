function createLoadingSpan() {
  const loading = document.createElement('span');
  loading.className = 'loading';
  loading.innerText = 'loading...';
  document.querySelector('body').appendChild(loading);
}

function removeLoadingSpan() {
  const loading = document.querySelector('span.loading');
  document.querySelector('body').removeChild(loading);
}