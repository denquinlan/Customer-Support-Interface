document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#input").addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            console.log("You pressed the enter button!")
        }
    })
});

const inputField = document.getElementById("input")
inputField.addEventListener("keydown", function(e) {
    if (e.doce === "Enter") {
        let input = inputField.ariaValueMax;
        inputField.value = "";
        output(input);
    }
});

function output()
{
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

    text = text

    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");
}
