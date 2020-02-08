const puppeteer = require('puppeteer'),
    fs = require('fs'),
    path = require('path'),
    args = process.argv.slice(2);

(async () => {
    const regex = /sketch\/(\d+)\/(\d+)\/(\d+)/gm,
        url = args[0],
        regexResult = regex.exec(url),
        year = regexResult[1],
        month = regexResult[2],
        day = regexResult[3]

    let imagePath = path.join(__dirname, '..', 'src', 'images', year, month, day + '.png')

    // console.log({
    //     current,
    //     imagePath,
    //     regexResult
    // })

    /** open browser headless option to see the browser actions */
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('canvas')
    await page.waitFor(1000)

    /** save the image */
    const canvasDataUrl = await page.evaluate(() => document.querySelector('canvas').toDataURL())
    const base64Url = canvasDataUrl.replace(/^data:image\/\w+;base64,/, "");
    const imgBuffer = Buffer.from(base64Url, 'base64');
    fs.writeFileSync(imagePath, imgBuffer);

    await browser.close();
})()