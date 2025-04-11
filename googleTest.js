//Setting Up and Basic Automation
const { Builder, By, Key, until } = require("selenium-webdriver");

async function openGoogle() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://www.google.com");
        await driver.findElement(By.name("q")).sendKeys("isbat university", Key.RETURN);
        await driver.wait(until.titleContains("isbat university"), 50000);
    } finally {
        await driver.quit();
    }
}
openGoogle();