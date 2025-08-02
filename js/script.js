let height =document.querySelector(".height")
let weight = document.querySelector(".weight")
let button = document.querySelector(".bmi button")
let result = document.querySelector(".bmi .result")
let messege = document.querySelector(".bmi .messege")
let error = document.querySelector(".bmi .error")


button.addEventListener("click", function(){
    if(height.value == "" && weight.value == ""){
        error.innerHTML="Please Enter Your Height & weight"
    }else{
        let bmi=(weight.value * 2.205)/(height.value*height.value)*703
        result.innerHTML = `result:${ bmi .toFixed(2)}`

        if(bmi >=0 && bmi <=18.5){
            messege.innerHTML=` Underweight`
            messege.style.color = "yellow"
            error.innerHTML=""
        }
        if(bmi>=18.5 && bmi<=24.9){
            messege.innerHTML ="Healthy weight"
            error.innerHTML=""
            messege.style.color = "green"
        }
        if(bmi>=25 && bmi<=29.9){
            messege.innerHTML ="Overweight"
            error.innerHTML=""
             messege.style.color = "darkred"
        }
        if(bmi>=30 && bmi<=40){
            messege.innerHTML ="Obesity"
            error.innerHTML=""
            messege.style.color = "red"
        }
       
    }
})