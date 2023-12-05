const ejs = require('ejs');
var path = require('path');
var getTestHtml = require('../testHtml');
const convertHTMLToPDF = require('../convertToPdf');

const pdfGenerator = async (request, response) => {

  const { executionPath } = request.params;
  const longContent = executionPath == 'bad';

  var html = getTestHtml(longContent);
 
  convertHTMLToPDF(
    html,
    pdf => {
      response.setHeader('Content-Type', 'application/pdf');
      response.send(pdf);
    },
    {
      margin: {
        top: 48,
        bottom: 48,
        left: 48,
        right: 48,
      },
      displayHeaderFooter: false,
      printBackground: true,
      format: 'A4',
      preferCSSPageSize: true,
    },
    true,
  ).catch(err => {
    response.status(500).send(err);
  });
};

module.exports = pdfGenerator;
