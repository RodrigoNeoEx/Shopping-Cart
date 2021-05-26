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

function createCustomElement(element, className, innerText) {
  const elem = document.createElement(element);
  elem.className = className;
  elem.innerText = innerText;
  return elem;
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}