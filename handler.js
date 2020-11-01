'use strict'

const { convertToHtml } = require('./utils')

module.exports.markdown_html_converter = (event, context, callback) => {
    const inputMarkDown = event.body

    const outputHtml = convertToHtml(inputMarkDown)

    const html = `<html>
                    <body>
                      ${outputHtml}
                    </body>
                  </html>`

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: html,
    }

    // callback is sending HTML back
    callback(null, response)
}
