import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: '52000bbe4a443511',
  // app: 'D:/Study/app-debug.apk',
  automationName: 'UiAutomator2',
  appPackage: 'com.reanimatedtest',
  appActivity: '.MainActivity',
};
const driver = wd.promiseChainRemote('localhost', PORT);
beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(3000);
}); // Sometime for the app to load
it('test', async () => {
  expect(await driver.hasElementByAccessibilityId('text1')).toBe(true);
  const element = await driver.elementByAccessibilityId('button1');
  await element.click();
  expect(await driver.hasElementByAccessibilityId('text2')).toBe(true);
});
