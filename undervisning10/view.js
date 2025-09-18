   updateView() 
        function updateView(){            
            document.getElementById('app').innerHTML = `
            <div class="container" >
            <div>${darthVader.name}</div>
            <img src="${darthVader.img}" width="100">
            <div>${darthVader.health}</div>
            <br>
            <br>
            ${drawSelectedCharacter()}
            </div>
            <button onclick="attackDarth()">Attack</button>
            <div>${fightMessage}</div>
            ${drawHeroes()}
            `
        }

        function drawSelectedCharacter(){
            if(selectedCharacter == null){return ""}
            let html = `
            <div class="container">
            <img src="${selectedCharacter.img}" width="100">          
                Name: ${selectedCharacter.name}
                Strength: ${selectedCharacter.strength}
                Health: ${selectedCharacter.health} 
                </div>
                `  
            return html;
        }

        function drawHeroes(){
            let html = `<div class="container">`

            for(let i = 0; i<heroes.length; i++){
                html += `
               <img src="${heroes[i].img}" width="100" onclick="setSelectedCharacter(${i})">          
                `
            }
            html += '</div>'
            return html;
        }