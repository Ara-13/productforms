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
    let surface = (+$.getElementById('kahgel-surface').value);
    var result = surface*2;
    var showSpan = $.getElementById("result");
    showSpan.innerHTML = result.toFixed(3);
    var showSpan2 = $.getElementById("result2");
    showSpan2.innerHTML = Math.ceil(result/15)
    $.getElementById("result-btn2").style.visibility = "visible";
    $.getElementById("result-btn").style.visibility = "visible";

})