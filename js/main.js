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
    .replace(/cant/g, "can not")
    .replace(/Im/g, "I am")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");
}

//Customer Submitted queries
const utterances = [
    ["I can not log in", "I need to reset my password", "I am having issues with my account"],  // 0
    ["I need to return an item", "I would like to request a refund", "I am having issues with a product I ordered"], // 1
    ["Track a shipment", " "] // 2
   
]

//Bot Responses
const answers = [
    [
        "I am sorry to hear that. Please let me have your email address so I can find your account.",
        "Certainly, I can help you out with that. I will send a password reset link to the email attached to your account. Can I have your email address?",
        "I am sorry to hear that. What sort of issues are you having with your account?"
    ], // 0
    [
        "I can help you out with that. Can you tell me the order number so that I can locate this transaction?",
        "I can help you out with that. Can you tell me the order number so that I can locate this transaction?",
        "I can help you out with that. Can you tell me the order number so that I can locate this transaction?"
    ] // 1

]

//Bot Triggers and Responses Function
function compare(utterancesArray, answersArray, string) {
    let item;
    for (let x = 0; x < utterancesArray.length; x++) {
        for (let y = 0; y < utterancesArray[x].length; y++) {
            if (utterancesArray[x][y] === string) {
                items = answersArray[x];
                items = items[Math.floor(Math.random() * items.length)];
            }
        }
    }
    return item;
}

//Call the compare function
function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
        .replace(/ a /g, " ")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");
    if (compare(utterances, answers, text)) {
        product = compare(utterances, answers, text);
    } else {
        product = alternatives[Math.floor(Math.random() * alternatives.length)];
    }

    //update DOM
    addChatEntry (input, product);

}

//Update DOM
function addChatEntry(input, product) {
    const messagesContainer = document.getElementById("messages");

    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `${input}`;
    messagesContainer.appendChild(userDiv);

    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);


    setTimeout(() => {
        botText.innerText = `${product}`;
    
    }, 2000);
}
