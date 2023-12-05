const getPuppeteerBrowser = require("./puppeteer");

let convertHTMLToPDF = async (
  html,
  callback,
  options = null,
  remoteContent = true
) => {
  if (typeof html !== "string") {
    throw new Error("Invalid Argument: HTML expected as string.");
  }

  const browser = await getPuppeteerBrowser();
  const page = await browser.newPage();
  if (!options) {
    options = { format: "Letter" };
  }

  if (remoteContent === true) {
    await page.goto(
      `data:text/html;base64,${Buffer.from(html).toString("base64")}`,
      {
        waitUntil: "networkidle2",
      }
    );
  } else {
    await page.setContent(html);
  }

  await page.emulateMediaType("screen");

  await page.evaluateHandle("document.fonts.ready");

  await page
    .pdf(options)
    .then(callback)
    .catch(function (error) {
      console.log(error);
      throw error;
    });
  await browser.close();
};

module.exports = convertHTMLToPDF;
