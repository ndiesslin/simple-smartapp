# Simple SmartApp - Randomly changes smart-light color.

The purpose of this repository is to demo a simple SmartThings SmartApp. The demo will randomly change the color of a smart-light.

## Setup

### Prerequisites
- A SmartThings compatible color light.
- A [Samsung account](https://account.samsung.com/membership/index.do)
- The SmartThings mobile application, [Android](https://play.google.com/store/apps/details?id=com.samsung.android.oneconnect&hl=en_US&gl=US) or [iOS](https://apps.apple.com/us/app/smartthings/id1222822904).
- A SmartThings [Developer Workspace](https://smartthings.developer.samsung.com/workspace/) account. You can use your Samsung account login for the Developer Workspace.
- A [Heroku](https://www.heroku.com/) account if you want to host this project.
- [Node.js](https://nodejs.org) installed.
- [npm](https://npmjs.com) installed.
- [ngrok](https://ngrok.com/) installed. Ngrok will create a secure tunnel to the local node server.

### Getting started

#### Local setup
- Run `npm install` to install the project dependencies.
- Start the Node.js server `npm run start`.
- Start ngrok `ngrok http 3000`. Once started, copy and save the "Forwarding" HTTPS URL. This is the URL used in the [Developer Workspace.](https://smartthings.developer.samsung.com/workspace/)

#### SmartApp creation
- Log in to the [Developer Workspace.](https://smartthings.developer.samsung.com/workspace/)
- In the [Developer Workspace](https://smartthings.developer.samsung.com/workspace/), create a new project.
- Select "Automation for the SmartThings App" as the project type.
- Give the project the desired name.
- Select "Register App" in the created project.
- Choose "WebHook Endpoint" and enter your ngrok HTTPS URL.
- Give your SmartApp a name and description.
- Enable the following OAuth2 scopes under "Permissions required by your connector app."
	- `r:devices:*`
	- `x:devices:*`
- Save the APP.
- You will not need the Client ID or Secret for this, but you can save it anyways.
- Click on "VERIFY APP REGISTRATION"; this will send a post to your application with a URL in your logs. Copy this URL and visit it in your browser to verify the connection. 
- After you have verified your app registration, then click on the "Deploy to Test" button.

More information on:
- [Registering a SmartApp.](https://smartthings.developer.samsung.com/docs/smartapps/app-registration.html)
- [Verifying your domain ownership.](https://smartthings.developer.samsung.com/docs/smartapps/webhook-apps.html#Verify-your-domain-ownership)

#### Testing SmartApp on your phone
- Sign in to the SmartThings app on your smartphone.
- Make sure you have a smart-light added in the SmartThings app.
- __IMPORTANT:__ Enable developer mode in the SmartThings app. Go to the settings menu and hold down on "About SmartThings" for five seconds. After this, you should see an option to enable developer mode. The SmartThings app will need to restart.
- Open the menu in the SmartThings app and go to SmartApps. Click on the plus sign to add a new SmartApp. If you scroll to the bottom, you should see this app listed under the "Custom" section.
- Fill in the information in the prompt, then click "done > allow" and you should be able to see this project in action.

More information on:
- [Enabling developer mode in the SmartThings app.](https://smartthings.developer.samsung.com/docs/testing/developer-mode.html)
- [Testing a SmartApp.](https://smartthings.developer.samsung.com/docs/testing/how-to-test.html)

### Deploying as a service
- [Heroku](https://www.heroku.com/) can host this project.
- Use the URL in your Heroku app for your SmartThings SmartApp. The URL is in the Heroku app settings.
- To verify your SmartThings SmartApp with Heroku, follow the logs `heroku logs --tail`.

More information on:
- [Getting started with Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

## [SmartThings documentation highlights](https://smartthings.developer.samsung.com/docs/index.html)
- [Enabling developer mode](https://smartthings.developer.samsung.com/docs/testing/developer-mode.html)
- [SmartApps Basics](https://smartthings.developer.samsung.com/docs/smartapps/smartapp-basics.html)
- [Registering SmartApp](https://smartthings.developer.samsung.com/docs/smartapps/app-registration.html)
- [SmartApp samples](https://smartthings.developer.samsung.com/docs/samples.html)
- [SmartApp tutorials](https://smartthings.developer.samsung.com/docs/tutorials/tutorials.html)
- [API reference - capabilities](https://smartthings.developer.samsung.com/docs/api-ref/capabilities.html)
- [API reference - SmartApps](https://smartthings.developer.samsung.com/docs/api-ref/smartapps-v1.html)
- [API reference - SmartThings API](https://smartthings.developer.samsung.com/docs/api-ref/st-api.html)
- [SmartApp Configuration](https://smartthings.developer.samsung.com/docs/smartapps/configuration.html)
