const { convertToHtml } = require('../utils/index.js')

describe('ReadMe to HTML Converter tests For Headers', () => {
    beforeEach(() => {})

    test('H1 String', () => {
        const testString = '# Heading 1'
        expect(convertToHtml(testString)).toEqual('<h1>Heading 1</h1>')
    })

    test('H2 String', () => {
        const testString = '## Heading 2'
        expect(convertToHtml(testString)).toEqual('<h2>Heading 2</h2>')
    })

    test('H3 String', () => {
        const testString = '### Heading 3'
        expect(convertToHtml(testString)).toEqual('<h3>Heading 3</h3>')
    })

    test('H4 String', () => {
        const testString = '#### Heading 4'
        expect(convertToHtml(testString)).toEqual('<h4>Heading 4</h4>')
    })

    test('H5 String', () => {
        const testString = '##### Heading 5'
        expect(convertToHtml(testString)).toEqual('<h5>Heading 5</h5>')
    })

    test('H6 String', () => {
        const testString = '###### Heading 6'
        expect(convertToHtml(testString)).toEqual('<h6>Heading 6</h6>')
    })

    test('H7 String should return unformatted text', () => {
        const testString = '####### Heading 7'
        expect(convertToHtml(testString)).toEqual('<p>####### Heading 7</p>')
    })

    test('Header text broken should return unformatted text', () => {
        const testString = '##!# Heading 4'
        expect(convertToHtml(testString)).toEqual('<p>##!# Heading 4</p>')
    })

    test('Header with no text should return unformatted text', () => {
        const testString = '####'
        expect(convertToHtml(testString)).toEqual('<p>####</p>')
    })

    test('Header text with URL', () => {
        const testString = '#### Heading 4 [link text](http://mailchimp.com)'
        expect(convertToHtml(testString)).toEqual(
            '<h4>Heading 4 <a href="http://mailchimp.com">link text</a></h4>'
        )
    })

    test('Header text with multiple URLs', () => {
        const testString =
            '#### Heading 4 [link text](http://mailchimp.com) Another Link [link text 2](http://example.com) More Text'
        expect(convertToHtml(testString)).toEqual(
            '<h4>Heading 4 <a href="http://mailchimp.com">link text</a> Another Link <a href="http://example.com">link text 2</a> More Text</h4>'
        )
    })
})

describe('ReadMe to HTML Converter tests For Unformatted Texts', () => {
    beforeEach(() => {})

    test('Unformatted Text', () => {
        const testString = 'How are you?'
        expect(convertToHtml(testString)).toEqual('<p>How are you?</p>')
    })

    test('Empty Unformatted Text', () => {
        const testString = ''
        expect(convertToHtml(testString)).toEqual('')
    })

    test('Unformatted Text with URL in middle', () => {
        const testString =
            'This is a paragraph [with an inline link](http://google.com). Neat, eh?'
        expect(convertToHtml(testString)).toEqual(
            '<p>This is a paragraph <a href="http://google.com">with an inline link</a>. Neat, eh?</p>'
        )
    })

    test('Unformatted Text with URL in start', () => {
        const testString = '[with an inline link](http://google.com). Neat, eh?'
        expect(convertToHtml(testString)).toEqual(
            '<p><a href="http://google.com">with an inline link</a>. Neat, eh?</p>'
        )
    })

    test('Unformatted Text with multiple URLs', () => {
        const testString =
            'This is a paragraph [with an inline link](http://google.com). Neat, eh? [link text 2](http://example.com) More Text'
        expect(convertToHtml(testString)).toEqual(
            '<p>This is a paragraph <a href="http://google.com">with an inline link</a>. Neat, eh? <a href="http://example.com">link text 2</a> More Text</p>'
        )
    })
})
