let $ = document;
$.getElementById("form").addEventListener("submit", (e)=>{btn.click()});

var inputs = $.getElementsByTagName("input");
for(let i=0; i<inputs.length; i++){
    let input = inputs[i];
    input.addEventListener("keyup", (e)=>{
        let val = +input.value;
        if(val < 0){input.value = -val}
    }
    )
}

var btn = $.getElementById("cal-btn");
btn.addEventListener("click", (e)=>{
    let milRadius = (+$.getElementById("mil-num").value)/200;
    let holeRadius = (+$.getElementById("hole-d").value)/200;
    let height = (+$.getElementById("hole-h").value)/10;

    const pi = 3.14;
    const density = 1.7;
    let milM = milRadius**2*pi*density*height;
    let holeM = holeRadius**2*pi*density*height;

    var result = holeM - milM;
    var showSpan = $.getElementById("result");
    showSpan.innerHTML = Math.floor(result*1000);
    //var showSpan2 = $.getElementById("result2");
    //showSpan2.innerHTML = Math.ceil(result/15)
    //$.getElementById("result-btn2").style.visibility = "visible";
    $.getElementById("result-btn").style.visibility = "visible";

})