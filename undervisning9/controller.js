 //Controller

 //pause til 11.07
        function addToCart(itemName,price){
            if(!cart.includes(itemName)){
                cart.push(itemName);
                totalPrice += price;
                updateView()
            }   
        }

        function removeItem(index){
            if(cart.length == 0){
                throw new Error('handlevogna er tom')
            }   
            totalPrice -= getCost(cart[index]);
            cart.splice(index,1)
            updateView();
        }

        function buyItems(){
            if(totalPrice > wallet){
                checkOutMsg = 'Du har ikke nok penger'
            } else{
                wallet -= totalPrice;
                checkOutMsg = 'Du har kjøpt alt i vogna di ;D'
                resetStore()
            }
            updateView();
        }

        function resetStore(){
            totalPrice = 0;
            cart = [];
            updateView();
        }

        function getCost(itemName){

        if(itemName == 'bread'){
        return breadPrice;
        }
        else if(itemName == 'butter'){
        return buttaPrice;
        }
        else if(itemName == 'milk'){
        return milkPrice;
        }
        else{
        return salamiPrice;
        }
        }