# Random Quote Generator

 In this app, user can get the random quote. To get the random quote, the user should have to click the "click me to get quote card" or "next button". If the user click the "prev button". we have two situation, One is if the user do not visited before the notification will come up in the right top corner of the app. If the user visited before, the app will generate the random quote which had been seeing. And user can get the quote by key words and press enter. If Something went wrong in the site which is not user error, the site will show the error page.

## Demo

<img src='./public/Animation.gif' width=400 height=220 alt='demo' />
<a href="https://65451955053cee0e282af8c8--snazzy-crisp-0d8259.netlify.app/">View</a>

## Tech Stack

React, TailwindCSS, localforage, reactQuery

## Getting Started

To Run the App in developement server

```bash
git clone https://github.com/yawai990/randomquotegenerator.git
```

## Installing Dependency

```bash
npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
NOTE:: .env file should be placed9 in root foldere

```bash
VITE_QUOTE_URL=https://api.adviceslip.com/advice
```

### Run In developement

```bash
npm run dev
```

The app will run in http://localhost:3000
