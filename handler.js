'use strict'

const { convertToHtml } = require('./utils')

module.exports.markdown_html_converter = (event, context, callback) => {
    try {
        const inputMarkDown = event.body
        const outputHtml = convertToHtml(inputMarkDown)

        const html = `<html><body>${outputHtml}</body></html>`

        const response = {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/html',
            },
            body: html,
        }

        // callback is sending HTML back
        callback(null, response)
    } catch (err) {
        console.log('Error: ', err)
        callback(null, {
            statusCode: 400,
            headers: {
                'Content-Type': 'text/html',
            },
            body: `<html><body><p>Sytem Error, please try again</p></body></html>`,
        })
    }
}
