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
    let surface = (+$.getElementById('lbp').value);
    var result = surface*2.5;
    var showSpan = $.getElementById("result");
    showSpan.innerHTML = result.toFixed(3);
    showSpan.innerHTML = showSpan.innerHTML.replace(".", "/");
    $.getElementById("result-btn").style.visibility = "visible";
})