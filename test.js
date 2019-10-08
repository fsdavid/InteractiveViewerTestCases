const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

var robot = require("robotjs");

const assert = require('assert')
const {Builder, By} = require('selenium-webdriver')

const expect = require('chai').expect

const screenSize = {width: 800, height: 798}

describe('Check dataset number for selected regions', function () {
    let driver
    let actions
    before(async function() {
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().headless().windowSize(screenSize))
            .setFirefoxOptions(new firefox.Options().headless().windowSize(screenSize))
            .build()

        driver = await new Builder().forBrowser('chrome').build()
        driver.manage().window().setRect({width: 800, height: 798, x: 0, y: 0})


        actions = driver.actions()
    })
    afterEach(function() {
        if (this.currentTest.state === 'failed') {
            console.log(this.test.parent.title)
            console.log(this.currentTest.title)
            console.log(this.currentTest.err.message)
        }
    })
    it('Should return 4 for Area 4a', async function() {
        await driver.get('https://iv-dev-next2.apps-dev.hbp.eu/')
        await driver.sleep(3000)
        await driver.findElement(By.xpath("//button[contains(.,'Ok')]")).click()
        await driver.sleep(3000)
        await driver.findElement(By.xpath("/html[1]/body[1]/atlas-viewer[@class=\"ng-tns-c0-0\"]/div[@class=\"atlas-container ng-tns-c0-0 ng-star-inserted\"]/ui-nehuba-container[@class=\"ng-tns-c0-0\"]/ui-splashscreen[@class=\"ng-star-inserted\"]/div[@class=\"m-5 d-flex flex-row flex-wrap justify-content-center align-items-stretch pe-none\"]/mat-card[@class=\"m-3 col-md-12 col-lg-6 pe-all mw-400px mat-card mat-ripple ng-star-inserted\"]/mat-card-header[@class=\"mat-card-header\"][count(. | //*[(text() = ' MNI Colin 27 ' or . = ' MNI Colin 27 ')]) = count(//*[(text() = ' MNI Colin 27 ' or . = ' MNI Colin 27 ')])]")).click()
        await driver.sleep(10000)

        console.log(0)
        const nehuba = await driver.findElement(By.xpath("id(\"neuroglancer-container\")/div[@class=\"neuroglancer-viewer neuroglancer-noselect neuroglancer-show-panel-borders\"]/div[2]/div[1]/div[@class=\"neuroglancer-layer-group-viewer\"]/div[@class=\"w-100 h-100 d-flex justify-content-center align-items-stretch flex-column\"]/div[@class=\"w-100 h-100 d-flex justify-content-center align-items-stretch flex-row\"]/div[@class=\"position-relative touch-top touch-left neuroglancer-panel\"]"))

        console.log(1)
        await driver.sleep(3000)
        const actions = driver.actions()

        // //Move the mouse to 100, 100 on the screen.
        // robot.moveMouse(205, 130)
        // robot.mouseClick()
        // robot.mouseClick()
        // console.log(2)
        // robot.moveMouse(205, 130);
        // robot.mouseToggle("down");
        // robot.dragMouse(100, 100);
        // robot.mouseToggle("up");
        // console.log(3)


        //
        // await actions.click(nehuba).move({x: 205, y: 130, duration: 100, origin: nehuba}).doubleClick(nehuba)
        //     .build().perform();
        await actions.move(205, 130)
            .perform();


        // await actions.move(205, 130).click().build().perform()

        await driver.sleep(5000)
        // driver.moveByOffset(205, 130)

        // await driver.doubleClick()




        // const search = await driver.findElement(By.xpath("/html[1]/body[@class=\"modal-open\"]/atlas-viewer[@class=\"ng-tns-c0-0\"]/div[@class=\"atlas-container ng-tns-c0-0 ng-star-inserted\"]/div[@class=\"ng-tns-c0-0 ng-star-inserted\"]/menu-icons[@class=\"ng-tns-c0-0\"]/div[@class=\"d-flex align-items-start flex-wrap ml-n3 ng-star-inserted\"]/button[@class=\"mat-raised-button mat-badge mat-badge-accent mat-badge-overlap mat-badge-above mat-badge-after mat-badge-medium\"]"))
        // search.click()
        // await driver.sleep(1000)
        // const searchText = await search.getAttribute("innerText")
        // await expect(searchText).to.equal('10')
        // await driver.sleep(1000)
    })
    after(() => {
        return driver && driver.quit()
    })
})


