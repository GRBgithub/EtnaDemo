/** @format */
require("dotenv").config();
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto("https://www.marmiton.org/recettes/recette_lasagnes-a-la-bolognaise-tres-facile_70480.aspx", { waitUntil: "networkidle0" });
  await page.waitForTimeout(2000);
    await page.evaluate(() => {
   const elem =  document.querySelector("#didomi-notice-agree-button > span");
    elem?.click()
  });
  await page.waitForTimeout(2000);
  
   await page.evaluate(() => {
    const ingredients = document.querySelectorAll(".ingredient-name");
    console.log(ingredients)
    ingredients.forEach((e)=>{
      console.log(e.innerText)
    })
  });


  // const [input] = await page.$x('//*[@id="mrtn-header-search-input"]');
  // await input.type("lasagne");
  // await page.waitForTimeout(2000);
  // await page.keyboard.press("Enter");

  // await page.waitForTimeout(2000);

}

run().catch(console.error);

