var controls = document.querySelector("div.controls");
var inputs = controls.querySelectorAll("input");
console.log(inputs);
function handleChange() {
    var suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty("--".concat(this.name), this.value + suffix);
}
inputs.forEach(function (input) {
    input.addEventListener("change", handleChange);
    console.log(input.name);
});
