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
    let surface = (+$.getElementById('glue-surface').value);
    var result = surface*5;
    var showSpan = $.getElementById("result");
    showSpan.innerHTML = result.toFixed(3);
    var showSpan2 = $.getElementById("result2");
    showSpan2.innerHTML = Math.ceil(result/20)*4;
    var showSpan3 = $.getElementById("result3");
    showSpan3.innerHTML = Math.ceil(result/20);
    $.getElementById("result-btn2").style.visibility = "visible";
    $.getElementById("result-btn").style.visibility = "visible";

})