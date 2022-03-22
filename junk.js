const puppeteer = require('puppeteer')
(async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('https://d9junk.ddev.site/core/install.php')
  await page.screenshot({ path: 'start' })
  // await page.type('#login_field', process.env.GITHUB_USER)
  // await page.type('#password', process.env.GITHUB_PWD)
  await page.waitForSelector('[id="edit-langcode"]')
  await page.click('[id="edit-submit"]')
  await page.waitForNavigation()
  await page.waitForSelector('[id="edit-site-name"]')
  await page.screenshot({ path: 'finish' })
  browser.close()
  console.log('See screenshot: ' + screenshot)
})()
