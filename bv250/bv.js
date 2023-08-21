let $ = document;
$.getElementById("form").addEventListener("submit", (e)=>{btn.click()});

let materialObj = {
    "1" : 0.14,
    "2" : 0.125,
    "3" : 0.15,
    "4" : 0.13,
    "5" : 0.135,
}


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
    let material = materialObj[$.getElementById("material").value];
    let metraj = +$.getElementById("metraj").value;

    var result = metraj*material;
    var showSpan = $.getElementById("result");
    showSpan.innerHTML = result.toFixed(3);
    showSpan.innerHTML = showSpan.innerHTML.replace(".", "/");
    $.getElementById("result-btn").style.visibility = "visible";

})