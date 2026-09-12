import { chromium } from "@playwright/test";

async function multiUsertest(){
  let browser = await chromium.launch({headless:false});

  //Admin
  let adminContext = await browser.newContext();
  let adminPage = await adminContext.newPage();
  await adminPage.goto("https://app.vwo.com/login");
  console.log("Admin launching the login page");

  //User
  let userContext = await browser.newContext();
  let userPage = await userContext.newPage();
  await userPage.goto("https://app.vwo.com/login");
  console.log("User launching the login page");

  await adminContext.close();
  await userContext.close();
  await browser.close();
}

multiUsertest();