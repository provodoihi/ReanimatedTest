# React Native App Testing With Appium and WebdriverIO Instruction

This document will give you the basic tutorial about E2E testing of a React Native app using Appium and WebdriverIO (This tutorial aims at using Android devices)

## Installing Appium

Appium can be installed by downloading [Appium Desktop](https://github.com/appium/appium-desktop/releases), which is a graphical, desktop-based way to launch the Appium server.

### Verifying the Appium Installation

To verify that all of Appium's dependencies are met you can use
`appium-doctor`. Install it with `npm install appium-doctor`, then run the
`appium-doctor` command, supplying the `--ios` or `--android` flags to verify
that all of the dependencies are set up correctly.

## Running Your Test

### Prerequisites

- We'll assume you have an Android emulator or real device configured and running 
- We'll assume you have the app on your device or the apk file and available on your local filesystem

### Setting up the Appium Client

For this example, we'll use [Webdriver.io](http://webdriver.io) as our Appium
client. Create a new React Native project:

```
npx react-native init YourProjectName
```
Once the project has been initialized, install `webdriverio`:
```
npm install webdriverio
```

### Session Initialization

Now we can create our test file, for example, named `appTest.test.js`, and initialize the
client object:

```js
import {remote} from 'webdriverio';
```

The next thing we need to do is to start an Appium session. We do this by
defining a set of server options and Desired Capabilities, and calling
`remote()` with them. The set of required capabilities for any Appium driver should include:

- `platformName`: the name of the platform to automate
- `platformVersion`: the version of the platform to automate
- `deviceName`: the kind of device to automate (Android device's name can be found using `adb devices`)
- `app`: the path to the app you want to automate or 
- `appPackage` and `appActivity` for testing an Android app
- `automationName`: the name of the driver you wish to use


So here is how we begin to construct a session in our test file:

```js
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
```

This configuration is used to conduct the test on a real Android device. You can also use the Android simulator or IOS simulator. **Please Note:** testing on IOS real device requires a valid Apple Developer Account.

### Running Test Commands

In this case, we will find a text element and check if the correct text was rendered:

```js
const text1 = await client.$('~text1');
expect(await text1.getText()).toMatch('This is Test Reanimated');
```

`$` command is a short way to call the `findElement` command in order to fetch a single element on the page and `~` is for `accessibility id` locator to read a unique identifier for a UI element.

For older React Native version (<=0.63), we use `accessibilityLabel` to access and find the element. `TestID` can be used in React Native 0.64 or above for providing the same functionality. In this example, we will add the `TestID` to the `<Text>` component in Main Screen:

```js
// MainScreen.tsx
<Text
  testID="text1"
  style={styles.txtMainScreen}>
  This is Test Reanimated
</Text>
```


Putting it all together, the file should look like this:

```js
// appTest.test.js
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
  const text1 = await client.$('~text1');
  expect(await text1.getText()).toMatch('This is Test Reanimated');
});
```

You can try and run this test on your own. Simply save it and execute it using
`jest`:
```
yarn test appTest
```

**Please note:** if your app using `React Navigation`, please follow this guide [Testing with Jest](https://reactnavigation.org/docs/testing) in order to avoid the error.

If everything is set up correctly, you'll see Appium begin spitting out
lots of logs and eventually, the app will pop up on the screen and start
behaving as if an invisible user were tapping on it! When the test finishes, you'll see the jest test result.

## Reference
Check out these resources for more information:

- [Cưỡi React Native xem Appium](https://viblo.asia/p/cuoi-react-native-xem-appium-phan-1-cung-tim-hieu-cach-hoat-dong-cua-appium-Eb85o4z2K2G) - tutorial in Vietnamese
- The [React Native 0.60 UI Testing with Appium in 10 Easy Steps](https://medium.com/@mahmoudsnatch/react-native-0-60-ui-testing-with-appium-in-10-easy-steps-61e68ae6eb4c) - tutorial using `wd`, an alternative to `WebdriverIO`
