var name_input = document.getElementById("name-input");
//console.log(name_input);

var name_output = document.getElementById("name-output");
//console.log(name_output);

name_input.addEventListener("input", function()
{
    name_output.textContent = name_input.value;
   // console.log("user typed:", name_input.value);
});

var blue_button = document.getElementById("animate");
//console.log(blue_button);

var button_list = document.getElementById("animation-select");
//console.log(button_list);

//Surprisingly, this command didn't work with document.getElementById but works with document.querySelector
var output_animate = document.querySelector(".animated");
//console.log(output_animate);

blue_button.addEventListener("click", function()
{
    output_animate.classList.add(button_list.value);
     //console.log(button_list.value);
     
     output_animate.addEventListener("animationend", function() {
     
     //console.log("Animation ended!")

     output_animate.classList.remove(button_list.value);
    //console.log('Button is clicked.');
});
});