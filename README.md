# A Multi Tenant App Demo
This app is my test app for multitenancy in payloadcms.

Two webapps will be managed using payloadcms.
- videocache
- carshowcase

## Videocache
An app that allows users to upload their videos. They can also watch the videos there

## Carshowcase
A website that showcases different kinds of cars according to different categories.

## How to run
- clone the repo
- go to /cms and run `yarn`, then `yarn dev`
- go to /videocache and run `npm i`, then `npm run dev`

- once the cms has started, open a private browser window (or a different browser) and go to `http://localhost:8988/admin`, signup a new user.
- once the videocache has started, open your regular browser window and go to `http://localhost:3000`, signup a new user.

- you can use the payload admin dashboard to setup the tenant and populate the various collections.
