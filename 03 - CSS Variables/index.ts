// Learned the hard lesson: put the script towards the end of the html, not the head
// This script doesn't work initially because the elements were not created yet

const controls = document.querySelector("div.controls");
const inputs: NodeListOf<HTMLInputElement> = controls.querySelectorAll("input");
console.log(inputs);

function handleChange(this: HTMLInputElement) {
    const suffix: string = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}
inputs.forEach((input) => {
    input.addEventListener("change", handleChange)
    console.log(input.name);
})