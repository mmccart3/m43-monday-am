const Movie = require("./utils")

function app (input) {
    switch (input[2]) {
        case "add":
            const newMovie = new Movie (input[3],input[4]);
            newMovie.add();
            // const movie = [input[3],input[4]];
            // console.log ("your movie is ", movie);
            break;
        case "addmulti":
            console.log("Hello Mr. Potter");
            break;
        default:
            console.log("hello whoever you are");
            break;
    }
}

app(process.argv);