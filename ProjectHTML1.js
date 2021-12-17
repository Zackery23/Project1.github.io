function rollingDice(clicked_id){
    if(clicked_id == 'd20'){
        let die20 = Math.floor(Math.random() * 20) + 1;
        let txt20Output = document.getElementById('d20Out');
        txt20Output.value = die20;
    }
    else if(clicked_id == 'd12'){
        let txt12Output = document.getElementById('d12Out');
        let die12 = Math.floor(Math.random() * 12) + 1;
        txt12Output.value = die12;
    }
    else if(clicked_id == 'd10'){
        let txt12output = document.getElementById('d10Out');
        let die10 = Math.floor(Math.random() * 10) + 1;
        txt12output.value = die10;
    }
    else if(clicked_id == 'd8'){
        let txt8output = document.getElementById('d8Out');
        let die8 = Math.floor(Math.random() * 8) + 1;
        txt8output.value = die8;
    }
    else if(clicked_id == 'd6'){
        let txt6Output = document.getElementById('d6Out');
        let die6 = Math.floor(Math.random() * 6) + 1;
        txt6Output.value = die6;
    }
    else if(clicked_id == 'd4'){
        let txt4Output = document.getElementById('d4Out');
        let die4 = Math.floor(Math.random() * 4) + 1;
        txt4Output.value = die4;
    }
    else if(clicked_id == 'd3'){   
        let txt3Output = document.getElementById('d3Out');
        let die3 = Math.floor(Math.random() * 3) + 1;
        txt3Output.value = die3;
    }
}
function hideAll(){
    let hide = document.getElementsByClassName("hide_me");
    for (let el of hide) {
        el.value = "";
    }
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
class statInput{
    constructor(initProfecMod, initStrMod, initDexMod, initConMod, initIntMod, initWisMod
        , initChaMod) {
            this.profecMod = initProfecMod;
            this.strMod = initStrMod;
            this.dexMod = initDexMod;
            this.conMod = initConMod;
            this.intMod = initIntMod;
            this.wisMod = initWisMod;
            this.chaMod = initChaMod;


    
    }
    hideInfo(){
        var article = document.getElementById('characterInfo');
        article.style.display = "none";
    }
    rollSkill(clicked_id){
        this.initProfecMod = document.getElementById("profecMod").value;
        this.initStrMod = document.getElementById("strMod").value;
        this.initDexMod = document.getElementById("dexMod").value;
        this.initConMod = document.getElementById("conMod").value;
        this.initIntMod = document.getElementById("intMod").value;
        this.initWisMod  = document.getElementById("wisMod").value;
        this.initChaMod = document.getElementById("chaMod").value;

        if(clicked_id == 'acroButton'){
            if(document.getElementById("Arcobatics").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initDexMod);
                let txt20Output = document.getElementById('arcoOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initDexMod);
                let txt20Output = document.getElementById('arcoOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'AnimalButton'){
            if(document.getElementById("animalHandling").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('animalOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('animalOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'ArcanButton'){
            if(document.getElementById("arcana").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('animalOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('arcanaOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'AthletButton'){
            if(document.getElementById("athletics").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initStrMod);
                let txt20Output = document.getElementById('athletOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initStrMod);
                let txt20Output = document.getElementById('athletOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'decepButton'){
            if(document.getElementById("deception").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('decepOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('decepOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'histButton'){
            if(document.getElementById("history").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('historyOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('historyOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'insightButton'){
            if(document.getElementById("insight").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('insightOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('insightOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'intimButton'){
            if(document.getElementById("intimidation").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('intimidOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('intimidOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'investButton'){
            if(document.getElementById("investigation").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('investOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('investOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'medicButton'){
            if(document.getElementById("medicine").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('medicineOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('medicineOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'naturButton'){
            if(document.getElementById("nature").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('natureOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('natureOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'percepButton'){
            if(document.getElementById("percep").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('percepOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('percepOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'peformButton'){
            if(document.getElementById("performance").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('performOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('performOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'persuaButton'){
            if(document.getElementById("persuade").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('persuadeOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('persuadeOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'religionButton'){
            if(document.getElementById("religion").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('religionOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('religionOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'sleightButton'){
            if(document.getElementById("sleight").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initDexMod);
                let txt20Output = document.getElementById('sleightOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initDexMod);
                let txt20Output = document.getElementById('sleightOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'stealthButton'){
            if(document.getElementById("sleight").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initDexMod);
                let txt20Output = document.getElementById('stealthOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initDexMod);
                let txt20Output = document.getElementById('stealthOut');
                txt20Output.value = die20;
            }
            
        }
        if(clicked_id == 'survivalButton'){
            if(document.getElementById("survival").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('survialOut');
                txt20Output.value = die20;
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('survialOut');
                txt20Output.value = die20;
            }
            
        }
    }
    hideSkills(){
        let hide = document.getElementsByClassName("hide_skills");
        for (let el of hide) {
            el.value = "";
        }
    }
}
let In = new statInput(0, 0, 0, 0, 0, 0)


