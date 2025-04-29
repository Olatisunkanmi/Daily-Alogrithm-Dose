def replaceVowelsWithAsterisks(input):
    vowels = 'aeiou'
    inputArray = list(input)
    for i in range(len(inputArray)):
        if inputArray[i].lower() in vowels:
            inputArray[i] = '*'

    return ''.join(inputArray)


result = replaceVowelsWithAsterisks("HEllo!!")
print(result)