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
    let length = (+$.getElementById("band-length").value)*10;
    let width = (+$.getElementById("band-width").value)*10;
    let height = +$.getElementById("band-height").value;
    let bandWidth = +$.getElementById("band-w-width").value;
    let metraj = +$.getElementById("metraj").value;


    const density = 1.53;
    var result = ((length + width) / (length*width))*density*height*bandWidth;
    var resultKol = result*metraj
    var showSpan = $.getElementById("result");
    showSpan.innerHTML = result.toFixed(3);
    showSpan.innerHTML = showSpan.innerHTML.replace(".", "/");
    var showSpan2 = $.getElementById("result2");
    showSpan2.innerHTML = resultKol.toFixed(3);
    showSpan2.innerHTML = showSpan2.innerHTML.replace(".", "/");
    var showSpan3 = $.getElementById("result3");
    showSpan3.innerHTML = Math.ceil(resultKol/4);
    $.getElementById("result-btn2").style.visibility = "visible";
    $.getElementById("result-btn").style.visibility = "visible";

})