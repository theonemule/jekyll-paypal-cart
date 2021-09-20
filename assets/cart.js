var cart = {};

if (typeof(Storage) !== "undefined" && localStorage.cart) {
	cart = JSON.parse(localStorage.cart);
}

if(window.location.hash) {
	var itemId = window.location.hash.substring(1);
	if (catalog[itemId]){
		if(cart[itemId]){
			cart[itemId]++;
		}
		else{
			cart[itemId] = 1;
		}
		localStorage.cart = JSON.stringify(cart);
	}
}

function addItem(itemId){
	cart[itemId]++;
	localStorage.cart = JSON.stringify(cart);
	drawCart();
}

function subtractItem(itemId){
	cart[itemId]--;
	if(cart[itemId] == 0){
		removeItem(itemId);
	}else{
		drawCart();
		localStorage.cart = JSON.stringify(cart);
	}
}

function removeItem(itemId){
	delete cart[itemId];
	drawCart();
	localStorage.cart = JSON.stringify(cart);	;
}

var cartHtml = "";

function drawCart(){
	if (Object.keys(cart).length == 0){
		cartHtml = "<h2>Cart is empty</h2>";
	}else{
		var total = 0 ;
		cartHtml = `<table><tr><td>Item</td><td>Description</td><td colspan=2>Qty.</td><td>Price</td></tr>`;
		for (const item in cart) {
			cartHtml += `<tr><td>${catalog[item].name}</td><td>${catalog[item].description}</td><td>${cart[item]}</td>
			<td>
			<button onclick="addItem('${item}')">+</button>
			<button onclick="subtractItem('${item}')">-</button>
			<button onclick="removeItem('${item}')">🗑</button>
			</td>
			<td>${(catalog[item].price * cart[item]).toFixed(2)}</td></tr>`;
			total += catalog[item].price * cart[item];
		}
		cartHtml += `<tr><td>TOTAL</td><td></td><td></td><td></td><td>${(total).toFixed(2)}</td></tr>`;
		cartHtml += `</table><button onclick="window.location='/checkout'"><h4>Proceed to Checkout</h4></button>`;
		
	}

	document.getElementById("cartcontent").innerHTML = cartHtml;
		
}

drawCart();