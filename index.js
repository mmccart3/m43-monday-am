// if (process.argv[2] === "harry") {
//     console.log("Hello Mr Potter");
// }

function app (input) {
    switch (input[2]) {
        case "Harry":
            const name = input[2];
            console.log ("Hello Mr Potter");
            break;
        case "George":
            console.log("Hello Mr. Weasley");
            break;
        case "Hermione":
            console.log("Hello Ms. Grainger");
            break;
        default:
            console.log("Hello whoever you are");
            break;
    }
};

app(process.argv);