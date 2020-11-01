const { convertToHtml } = require('../utils/index.js')

describe('ReadMe to HTML Converter tests', () => {
    beforeEach(() => {})

    test('H1 String', () => {
        const testString = '# Heading 1'
        expect(convertToHtml(testString)).toEqual('<h1>Heading 1</h1>')
    })
})
