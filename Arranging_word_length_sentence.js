// Arranging words by their length in a sentence

// input = "react is a Library"
// output = " a is react library"

// split > convert string to array
// sort > sort the array
// join > array to string

const input = "react is a Library";

function arrangeString(data) {
    const dataArray = data.split(" ");

    dataArray.sort((a,b) => {
        // Asc order
        return a.length - b.length;

        // desc order
        // return b.length - a.length;
    });

    // console.log(dataArray);
    dataArray.join(" ");
}

console.log(arrangeString(input))