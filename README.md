# RemindMeDiscord
RemindMeDiscord is a Discord Bot that allows users to make scheduled reminders on Discord (basically Note To Self).

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger) [![Code Climate](http://img.shields.io/codeclimate/github/badges/badgerbadgerbadger.svg?style=flat-square)](https://codeclimate.com/github/badges/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- For more badges, refer to [Badges](http://badges.github.io/badgerbadgerbadger/).

![Remind Me Discord Bot](https://www.eric-liang.com/_nuxt/img/discord-bot-remind-me-screenshot.eb78216.jpg)

---

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Team](#team)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)

---

## Installation

- Make sure you have NPM and NODE installed on your machine.

### Clone

- Clone this repo to your local machine using `https://github.com/ewliang/Remind-Me-Discord-Bot.git`

### Setup

1. Clone the repository using `https://github.com/ewliang/Remind-Me-Discord-Bot.git`
2. Go to the Discord developer's website while you are logged in to your Discord account via this URL [Discord Developer Applications](https://discordapp.com/developers/applications/).
  - Create a new application. Give it a name and description.
  - Copy the "Client ID"
  - Next, add a "Bot" (NOTE - There is a toggle for making the bot public. By default, it's public. Public means anyone can add this bot of yours to their server. I recommend disabling it so only you can add it to server(s))
3. Go here to get your Bot Authorization Flow URL: [Bot Authorization Flow](https://discordapp.com/developers/docs/topics/oauth2)
  - Copy that URL and paste it somewhere convenient.
  - Next, get the "Client ID" you copied earlier, and replace the default client_id string value in your Bot Authorization Flow URL with your Client ID.
  - Set the permissions=1 to permissions=0
4. With your newly updated Bot Authorization URL, use your browser and go to that URL.
5. Select a server from the dropdown where you want to add your bot to. This is where the bot will do its thing. I recommend creating a new private server and testing it there first though.
  - Click Authorize after selecting a server.
  - You may now close the browser for that tab/window once it says it has been authorized.
6. Go back to your application page in your browser from (Step 2). In the bot page where you created a new bot, find the section labeled "Token". Reveal it and copy the string that it reveals. Paste it into a config file in the application. (Make a folder called config/config.js.)

---

## Features
- Enables users in the Discord server to set timed message reminders in which this bot will repeat by sending it back out to the same server once the set time length has elapsed.

---

## Team

- [Eric Liang](https://www.github.com/ewliang)

---

## FAQ

- **How do I set a reminder?**
    - The format to set a reminder is the following: !remindme <number time><time unit> <your message>
    - For example: !remindme 50s Check and see if anyone has emailed me yet.
  
- **What time units does it support?**
    - Seconds: s
    - Minutes: m
    - Hours: h
    - Days: d

- **Why do you not have support for "m" months?**
    - The reason is it's rare for someone to be on discord for months, much less stay logged in that long, so it was most reasonable for me to end it at days being the longest time unit. Plus, you can just use a bigger number for days to mimic a month(s).

---

## Support

Reach out to me at one of the following places!

- Twitter at [@ericwliang](https://www.twitter.com/ericwliang)

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2018 © [Eric Liang](https://www.eric-liang.com).
