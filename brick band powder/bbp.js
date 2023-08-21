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
    let length = (+$.getElementById("band-length").value);
    let width = (+$.getElementById("band-width").value);
    let height = +$.getElementById("band-height").value;

    const density = 1.53;
    var result = ((length*width*height)/1000)*density;
    var showSpan = $.getElementById("result");
    showSpan.innerHTML = result.toFixed(3);
    showSpan.innerHTML = showSpan.innerHTML.replace(".", "/");
    //var showSpan2 = $.getElementById("result2");
    //showSpan2.innerHTML = Math.ceil(result/15)
    //$.getElementById("result-btn2").style.visibility = "visible";
    $.getElementById("result-btn").style.visibility = "visible";

})