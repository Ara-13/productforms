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
    let surface = (+$.getElementById('sealing-surface').value);
    var result = surface/6;
    var showSpan3 = $.getElementById("result2");
    showSpan3.innerHTML = Math.ceil(result);
    $.getElementById("result-btn2").style.visibility = "visible";

})