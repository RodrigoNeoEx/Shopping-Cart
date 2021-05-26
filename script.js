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

function createProductItemElement({ sku, name, image, salePrice }) {
  const section = document.createElement('section');
  section.className = 'item';
  const divBox = document.createElement('div');
  divBox.className = 'box';
  section.appendChild(divBox);
  const divContent = document.createElement('div');
  divContent.className = 'content';
  divBox.appendChild(divContent);
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  divContent.appendChild(createCustomElement('span', 'item__title revertText ', name));
  divContent.appendChild(createCustomElement('span', 'item__title revertText ', `Preço: R$${salePrice.toFixed(2)}`))
  section.appendChild(createProductImageElement(image));
  divContent.appendChild(createCustomElement('button', 'item__add revertText', 'Adicionar ao carrinho!'));
  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

async function fetchItemById(itemId) {
  createLoadingSpan();
  const endPoint = `https://api.mercadolibre.com/items/${itemId}`;
  const response = await fetch(endPoint);
  removeLoadingSpan();
  return response.json();
}

async function sumAllItemPricesOnCart() {
  let sumPrices = 0;
  const allCartItens = document.querySelectorAll('.cart__item');
  allCartItens.forEach(item => (sumPrices += +item.innerText.split('$')[1]));
  document.querySelector('.total-price').innerText = sumPrices.toFixed(2);
}

function storageCart() {
  const allProductsDetails = document.querySelectorAll('ol.cart__items');
  allProductsDetails.forEach((product) => {
    localStorage.setItem('cartProducts', product.innerHTML);
  });
  sumAllItemPricesOnCart();
}

function cartItemClickListener(event) {
  event.target.remove();
  sumAllItemPricesOnCart();
  storageCart();
  cartCounter();
}

function clearCart() {
  const buttomClear = document.querySelector('.empty-cart');
  buttomClear.addEventListener('click', () => {
    document.querySelectorAll('.cart__item')
    .forEach(li => li.remove());
    sumAllItemPricesOnCart();
    storageCart();
    cartCounter();
  });
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `${name}
  Valor R$${salePrice.toFixed(2)}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function sendItemToCart(event) {
  const section = event.target.parentNode.parentNode.parentNode;
  const productId = getSkuFromProductItem(section);
  const { id, title, price } = await fetchItemById(productId);
  const cartElement = createCartItemElement({ sku: id, name: title, salePrice: price });
  document.querySelector('.cart__items').appendChild(cartElement);
  sumAllItemPricesOnCart();
  storageCart();
  cartCounter();
}