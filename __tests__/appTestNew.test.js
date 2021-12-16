import {remote} from 'webdriverio';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
const android = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'Android',
    deviceName: '52000bbe4a443511',
    // app: 'D:/Study/app-debug.apk',
    automationName: 'UiAutomator2',
    appPackage: 'com.reanimatedtest',
    appActivity: '.MainActivity',
  },
};

let client;

beforeEach(async () => {
  client = await remote(android);
  console.error(client);
});

afterEach(async () => {
  if (client) {
    await client.deleteSession();
  }
});

it('test', async () => {
  await client.pause(2000);
  const text1 = await client.$('~text1');
  expect(await text1.getText()).toMatch('This is Test Reanimated');
  const element = await client.$('~button1');
  await element.click();
  const text2 = await client.$('~text2');
  expect(await text2.getText()).toMatch('Some text');
});
