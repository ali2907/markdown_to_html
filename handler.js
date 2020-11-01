'use strict';

module.exports.markdown_html_converter = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        test: "POST",
        body: event.body
      },
      null,
      2
    ),
  };

};
