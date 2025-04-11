const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Google Search Automation", function () {
  this.timeout(30000); // Increase timeout for Selenium actions

  let driver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async () => {
    await driver.quit();
  });

  it("should search for 'isbat university' on Google", async () => {
    await driver.get("https://www.google.com");
    await driver.findElement(By.name("q")).sendKeys("isbat university", Key.RETURN);
    await driver.wait(until.titleContains("isbat university"), 10000);
    const title = await driver.getTitle();
    expect(title.toLowerCase()).to.include("isbat university");
  });
});
