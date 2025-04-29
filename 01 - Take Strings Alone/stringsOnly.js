function replaceVowelsWithAsterisks(input) {
    let rep;
    const vows = "aeiou";

    const inputArr = input.split("");

    for (let i = 0; i < inputArr.length; i++) {
        const element = inputArr[i];

        if (vows.includes(element.toLowerCase())){
            inputArr[i] = '*';
        }
    }
    return inputArr.join("");
  }

  replaceVowelsWithAsterisks("HEllo World")