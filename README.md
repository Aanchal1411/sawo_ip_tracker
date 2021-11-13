## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Run The Local Setup](#run-local)
## Overview

The IP Address Tracker App is built using:
- MERN Stack
- API for Location: https://geo.ipify.org/
- Leaflet.js for Map.


### The challenge - Tasks completed are as follows:

Users is able to:

- Login using SAWO sdk (the passwordless way)
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./Solution_Screenshots/) 
- Please find all the screenshots to the solution in the above mentioned folder.
- The Images are in order of the app flow:
  1. Sawo Login Screen 
  2. Sawo Login Screen with email
  3. IP Address Tracker App Screen, Showing my IP Address.
  4. IP Address Tracker App Screen, Showing Details with test IP Address.

### Links


## My process
1. First Designed the Layout for the IP Address Tracker Using the specified styling and fonts.
2. Integrated the Leaflet.js for Map.
3. Integrated the Sawo sdk for passwordless login.
4. Integrated the geo ipify API for fetching IP Address Details.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Ant Design 
- Mobile-first workflow
- Leaflet.js
- [React](https://reactjs.org/) - JS library

## Run The Local Setup 
- Unzip the sawo_ip_address_tracker.
- Open Command Prompt in the folder location.
- npm install 
- Change the keys (API_KEY and APP_KEY) in code (app.js)
- npm run start
