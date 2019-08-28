require('chromedriver')
const assert = require('assert')
const {Builder, By} = require('selenium-webdriver')
const expect = require('chai').expect

describe('Open Interactive Viewer', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build()
    })
    it('Check dataset number for Waxholm rat brain', async function() {
        await driver.get('https://iv-dev-next2.apps-dev.hbp.eu/');
        await driver.sleep(1000);
        await driver.findElement(By.xpath("//button[contains(.,'Ok')]")).click()
        await driver.sleep(1000)
        await driver.findElement(By.xpath("/html[1]/body[@class=\"modal-open\"]/atlas-viewer[@class=\"ng-tns-c0-0\"]/div[@class=\"atlas-container ng-tns-c0-0 ng-star-inserted\"]/ui-nehuba-container[@class=\"ng-tns-c0-0\"]/ui-splashscreen[@class=\"ng-star-inserted\"]/div[@class=\"h-100 d-flex flex-column justify-content-start align-items-center overflow-auto appendMargin\"]/div[@class=\"d-flex w-100 flex-wrap justify-content-center\"]/div[@class=\"ng-star-inserted\"]/div[@class=\"template-card\"]/div[1][count(. | //div[(text() = ' Waxholm Space rat brain atlas v.2.0 ' or . = ' Waxholm Space rat brain atlas v.2.0 ')]) = count(//div[(text() = ' Waxholm Space rat brain atlas v.2.0 ' or . = ' Waxholm Space rat brain atlas v.2.0 ')])]")).click()
        await driver.sleep(1000)
        const search = await driver.findElement(By.xpath("/html[1]/body[@class=\"modal-open\"]/atlas-viewer[@class=\"ng-tns-c0-0\"]/div[@class=\"atlas-container ng-tns-c0-0 ng-star-inserted\"]/div[@class=\"ng-tns-c0-0 ng-star-inserted\"]/menu-icons[@class=\"ng-tns-c0-0\"]/div[@class=\"d-flex align-items-start flex-wrap ml-n3 ng-star-inserted\"]/button[@class=\"mat-raised-button mat-badge mat-badge-accent mat-badge-overlap mat-badge-above mat-badge-after mat-badge-medium\"]"))
        search.click()
        await driver.sleep(1000)
        const searchText = await search.getAttribute("innerText")
        await expect(searchText).to.equal('10')
        await driver.sleep(1000)
    })
    after(() => {
        return driver && driver.quit()
    })
})


