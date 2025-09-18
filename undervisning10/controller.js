function setSelectedCharacter(selectedIndex){
    selectedCharacter = heroes[selectedIndex];
    console.log(selectedIndex)
    console.log(selectedCharacter)
    updateView()
}

function attackDarth(){
    if(selectedCharacter == null){
        //Si fra at bruker må velge hero først
        return;
    }
    darthVader.health -= selectedCharacter.strength;

    //Vise på skjerm : eks 
    //"Leia fights with 'hairflip' dealing 10 damage"
    fightMessage = `${selectedCharacter.name} fights with 
    ${selectedCharacter.weapon} dealing
    ${selectedCharacter.strength} damage` 
    darthFightBack()
    updateView();
}

function darthFightBack(){
    selectedCharacter.health -= darthVader.strength;
    //om character er død -> splice
    if(selectedCharacter.health <= 0){
        let index =  getCharacterIndex()
        let foundCharacter = getCharacterByName('Chewbacca')
        console.log('Found character' + foundCharacter.name)
        heroes.splice(index, 1)
    }
}

function getCharacterIndex(){
    return heroes.indexOf(selectedCharacter)
}

function getCharacterByName(heroName){
    return heroes.find(hero => hero.name = heroName) // 1 treff
    //filter isteden for find dersom man ønsker flere treff
}