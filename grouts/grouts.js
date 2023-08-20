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
    let length = (+$.getElementById('grout-length').value)/10;
    let width = (+$.getElementById('grout-width').value)/10;
    let height = (+$.getElementById('grout-height').value)/10;
    const density = 1.4;
    var result = length*width*height*density;
    var showSpan = $.getElementById("result");
    showSpan.innerHTML = result.toFixed(3);
    $.getElementById("result-btn").style.visibility = "visible";
})