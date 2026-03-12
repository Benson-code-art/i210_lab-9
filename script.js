
let calculate =document.getElementById("calculate")

calculate.addEventListener("click",function(){
    let sub1 =parseInt(document.getElementById("sub1").value)
let sub2 =parseInt(document.getElementById("sub2").value)
let sub3 =parseInt(document.getElementById("sub3").value)
    let average= document.getElementById("average")
    let grade= document.getElementById("grade")
    let variable= (sub1+ sub2+ sub3)/3
    if (variable > 89) {
grade.innerHTML= `<p>Grade: A </p>`;
    
} else if(variable > 79 ) {
 grade.innerHTML= `<p>Grade: B </p>`;
}
else if(variable > 69 ) {
 grade.innerHTML= `<p>Grade: C </p>`;
}
else if(variable > 59 ) {
 grade.innerHTML= `<p>Grade: D </p>`;
}
else {
 grade.innerHTML= `<p>Grade: F </p>`;
}
    average.innerHTML= `<p> Average : ${variable} </p>`
})



