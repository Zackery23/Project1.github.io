

//this function takes the text from the input and puts it in a variable
function formdata() 
        {
        let rollReq= document.getElementById("request").value;

            let [numRolls, numSides, modifier] = rollReq.split(/[dD+-]{1}/);
            //let mod = rollReq.match(/([+-]{1})([0-9]{1,})/);
            console.log(numRolls, numSides, modifier);
            rollDie(numRolls, numSides, modifier);
        }    


function rollDie(numRolls, numSides, modifier) {
    //this function is a for loop that will roll a (numSides) die (numRoll) times
    if (modifier == undefined){
        modifier = 0;
    }
    if (numRolls && numSides)
        var result = 0
        
        for(let step = 0; step < numRolls; step++){

            result += (1 + Math.floor(Math.random()*numSides))
        }
        //+ + will turn the variable from a string into a number
        let total = result + + modifier
    console.log(total);
    return total
}
function updatePrice(f){
    if (f.key == "Enter"){
        ls.price = +f.target.value;
        ls.updateAdmin();
    }

}
function initUpdatePrice(){
    let priceUpdate = document.querySelectorAll(".update");
    for (let el of priceUpdate){
        el.addEventListener("click", showInput, false);
        el.addEventListener("keyup", updatePrice);
    }
}