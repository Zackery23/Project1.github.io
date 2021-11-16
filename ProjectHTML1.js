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

class statModRoller{
    constructor(initStrMod, initDexMod, initConMod, initIntMod, initWisMod
        , initChaMod) {
        this.strMod = initStrMod;
        this.dexMod = initDexMod;
        this.conMod = initConMod;
        this.intMod = initIntMod;
        this.wisMod = initWisMod;
        this.chaMod = initChaMod;


    
    }
}
//let ls = new statModRoller(0, 0, 0, 0, 0, 0)

