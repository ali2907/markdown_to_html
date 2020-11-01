const handleHeaders = (input) => {
    const maxHeaderSize = 6

    const inputArray = input.split(' ')

    //Handle no seperator
    if (inputArray.length === 1) {
        return `<p>${handleTextLinks(inputArray[0])}</p>`
    }

    //Limit to H6
    if (inputArray[0].length > maxHeaderSize) {
        return `<p>${handleTextLinks(input)}</p>`
    }

    //Validate Header Count
    for (let i = 0; i < inputArray[0].length; i++) {
        if (inputArray[0][i] !== '#') {
            return `<p>${handleTextLinks(input)}</p>`
        }
    }

    let headerText = inputArray[1]

    for (let i = 2; i < inputArray.length; i++) {
        headerText += ' ' + inputArray[i]
    }

    const headerType = inputArray[0].length

    return `<h${headerType}>${handleTextLinks(headerText)}</h${headerType}>`
}

const handleTextLinks = (input) => {
    const links = [
        {
            startTextPos: null,
            endTextPos: null,
            startLinkPos: null,
            endLinkPos: null,
            validLink: false,
        },
    ]

    for (i = 0; i < input.length; i++) {
        const count = links.length - 1

        if (input[i] === '[' && links[count].startTextPos === null) {
            links[count].startTextPos = i
            continue
        }

        if (
            input[i] === ']' &&
            links[count].startTextPos !== null &&
            links[count].endTextPos === null
        ) {
            links[count].endTextPos = i
            continue
        }

        if (
            input[i] === '(' &&
            links[count].endTextPos !== null &&
            links[count].startLinkPos === null
        ) {
            links[count].startLinkPos = i
            continue
        }

        if (
            input[i] === ')' &&
            links[count].endTextPos !== null &&
            links[count].startLinkPos !== null &&
            links[count].endLinkPos === null
        ) {
            links[count].endLinkPos = i
            links[count].validLink = true
            links.push({
                startTextPos: null,
                endTextPos: null,
                startLinkPos: null,
                endLinkPos: null,
                validLink: false,
            })
            continue
        }
    }

    let response = ''
    let stringStart = 0

    links.forEach(
        ({ startTextPos, endTextPos, startLinkPos, endLinkPos, validLink }) => {
            if (validLink === true) {
                response += input.slice(stringStart, startTextPos)

                const url = input.slice(startLinkPos + 1, endLinkPos)
                const urlText = input.slice(startTextPos + 1, endTextPos)

                response += `<a href="${url}">${urlText}</a>`

                stringStart = endLinkPos + 1
            } else {
                response += input.slice(stringStart, input.length)
            }
        }
    )

    return response
}

const readMeToHtml = (input) => {
    if (typeof input !== 'string' || input.length === 0) {
        return ''
    }

    //Handle Headers
    if (input.startsWith('#')) {
        return handleHeaders(input)
    }

    //Handle Unformatted text
    return `<p>${handleTextLinks(input)}</p>`
}

const readInput = (inputMarkDown) => {
    if (typeof inputMarkDown !== 'string' || inputMarkDown.length === 0) {
        return ''
    }

    const markDownArray = inputMarkDown.split(/\r|\n/)

    let htmlOutput = ''

    markDownArray.forEach((elem) => {
        htmlOutput += readMeToHtml(elem)
    })

    return htmlOutput
}

module.exports = {
    readInput: readInput,
}
