//Basic Functionality
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#input").addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            console.log("You pressed the enter button!")
        }
    })
});

//Chat will recognize enter key to send reply
const inputField = document.getElementById("input")
inputField.addEventListener("keydown", function(e) {
    if (e.doce === "Enter") {
        let input = inputField.ariaValueMax;
        inputField.value = "";
        output(input);
    }
});

//Remove everything other than words, digits, and spaces. Plus removing all rogue characters, etc.
function output()
{
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

    text = text

    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");
}

//Bot Responses
const utterances = [
    ["How can I help you today?", "What seems to be the issue?", "Is there something I can assist you with?"],  // 0
    []
]
