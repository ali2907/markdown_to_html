const handleUnformattedText = (inputText) => {
    return `<p1>${inputText}</p1>`
}

const handleHeaders = (input) => {
    const maxHeaderSize = 6

    const inputArray = input.split(' ')

    //Handle no seperator
    if (inputArray.length === 1) {
        return handleUnformattedText(inputArray[0])
    }

    //Limit to H6
    if (inputArray[0].length > maxHeaderSize) {
        return handleUnformattedText(input)
    }

    //Validate Header Count
    for (let i = 0; i < inputArray[0].length; i++) {
        if (inputArray[0][i] !== '#') {
            return handleUnformattedText(input)
        }
    }

    let headerText = inputArray[1]

    for (let i = 2; i < inputArray.length; i++) {
        headerText += ' ' + inputArray[i]
    }

    const headerType = inputArray[0].length

    return `<h${headerType}>${headerText}</h${headerType}>`
}

const readMeToHtml = (input) => {
    if (typeof input !== 'string') return null

    if (input.startsWith('#')) {
        return handleHeaders(input)
    }
}

const readInput = (inputMarkDown) => {
    const markDownArray = inputMarkDown.split(/\r|\n/)

    let htmlOutput = ''

    markDownArray.forEach((elem) => {
        htmlOutput += readMeToHtml(elem) + '\n'
    })

    console.log('htmlOutput', htmlOutput)

    return htmlOutput
}

module.exports = {
    readInput: readInput,
}
