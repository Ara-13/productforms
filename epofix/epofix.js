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
var dataSelect = $.getElementById("type");
var glueDiv = $.getElementById("glue-div");
var groutDiv = $.getElementById("grout-div");
dataSelect.addEventListener("change", (e)=>{
    let value = dataSelect.value;
    if(value=="glue"){
        groutDiv.style.display = "none";
        glueDiv.style.display = "block";
    }else{
        groutDiv.style.display = "block";
        glueDiv.style.display = "none";
    }
}) 
var btn1 = $.getElementById("cal-btn");
var btn2 = $.getElementById("cal-btn2");
btn1.addEventListener("click", (e)=>{
    let surface = (+$.getElementById('glue-surface').value);
    var result = surface*5;
    var showSpan = $.getElementById("result");
    showSpan.innerHTML = result.toFixed(3);
    showSpan.innerHTML = showSpan.innerHTML.replace(".", "/");
    var showSpan2 = $.getElementById("result2");
    showSpan2.innerHTML = Math.ceil(result/20)
    $.getElementById("result-btn2").style.visibility = "visible";
    $.getElementById("result-btn").style.visibility = "visible";

})
btn2.addEventListener("click", (e)=>{
    let length = (+$.getElementById('grout-length').value)/10;
    let width = (+$.getElementById('grout-width').value)/10;
    let height = (+$.getElementById('grout-height').value)/10;
    const density = 1.4;
    var result = length*width*height*density;
    var showSpan = $.getElementById("result3");
    showSpan.innerHTML = result.toFixed(3);
    showSpan.innerHTML = showSpan.innerHTML.replace(".", "/");
    $.getElementById("result-btn-e").style.visibility = "visible";
})