const express = require('express');
const puppeteer = require('puppeteer');
const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/:id', (req, res) => {
    // let takeOverId = req.params.id;
    // let imagePath = 'http://localhost:8000/coop/monthly_coup_takeover/TV2/4/'
    // let getScreenshot = imagePath + takeOverId
    // console.log('takeOverId', takeOverId );

    async function run() {
        let browser = await puppeteer.launch({ headless: false });
        let page = await browser.newPage();

        // Credentials
        const USERNAME_SELECTOR = '#id_username';
        const PASSWORD_SELECTOR = '#id_password';
        const BUTTON_SELECTOR = '.login__button';
        // await page.goto('http://localhost:8000/login');
        await page.goto('https://render.colorcode.dk//login');

        // Login with credentials
        await page.click(USERNAME_SELECTOR);
        await page.keyboard.type('joi.ingi');
        await page.click(PASSWORD_SELECTOR);
        await page.keyboard.type('joey1007');
        await page.click(BUTTON_SELECTOR);

        // await page.goto('http://localhost:8000/coop/monthly_coup_takeover/TV2/4/');
        await page.goto('https://render.colorcode.dk/coop/monthly_coup_takeover/EB/6/');

        // Test further and remove
        // await page.waitForNavigation();
        // await page.waitFor(2*1000);

        const element = await page.$('div.message')

        // Set image info
        await page.setViewport({
            width: 736,
            height: 736,
            deviceScaleFactor: 1,
        });
        const image = await element.screenshot({ path: './image.jpeg', type: 'jpeg', quality: 100});

        // Send screenshot to route
        // res.type('application/png')
        // res.send(image)

        // Screnshot timing
        // const performance = JSON.parse(await page.evaluate(
        //     () => JSON.stringify(window.performance)
        //  ));

        //  console.log('performance', performance)

        // Finish
        await page.close();
        await browser.close();
    }
    // Run puppeteer
    run();
// });


// app.listen(3000, () => {
//     console.log('screenshot server on port 3000');
// });
