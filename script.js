function firstWord(s) {
    // Trim leading spaces and find the first space index
    s = s.trim();
    let spaceIndex = s.indexOf(" ");

    // If there is no space, return the entire string
    return spaceIndex === -1 ? s : s.slice(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
