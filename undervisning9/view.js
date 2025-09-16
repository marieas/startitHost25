//View
        updateView();
        function updateView(){
        document.getElementById('app').innerHTML = /*HTML*/ `
        <div>Wallet: ${wallet}</div>
        <img onclick="addToCart('bread',36)" src="images/bread.jpg">
        <img onclick="addToCart('butter',52)" src="images/butter.jpg">
        <img onclick="addToCart('milk',40)" src="images/milk.jpg">
        <img onclick="addToCart('salami',36)" src="images/salami.jpg">
        <div>Total price: ${totalPrice}</div>
        <div>${getShoppingCartView()}</div>
        <button onclick="buyItems()">Buy items</button>
        <div>${checkOutMsg}</div>
        `
        }

        function getShoppingCartView(){
            let html ='';
            for(let i = 0; i < cart.length; i++){
                html += `<li onclick="removeItem(${i})"> ${cart[i]}</li>`;
            }
            return html;
        }