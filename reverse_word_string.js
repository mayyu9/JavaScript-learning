// input = "I Love Javascript";
// output = " I evoL tpircsavaj"

// split > string to Array
// reverse > reverse a string
// join > array to string

const input = "I Love Javascript";

function ReverseString(data) {

    const arrayInput = data.split(" ");

    const result = arrayInput.map(d => {
        // here we use split again so that each word is array index so that we cna change every literall
        return d.split("").reverse().join("");
    })
    return result.join(" "); // conversion to string from array
}

console.log(ReverseString(input));