# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To see the project running:
1. clone this repo
2. run `npm install` in project directory
3. run `npm start`(will run the app in development mode) - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

1. assets 
   - contains all the project assets (images, fonts etc)

2. components
   - contains all the reusable components that are used within a page (buttons, article items etc)

3. i18n 
   - contains all the static strings used on the page(supports front end translations)

4. pages
   - contains all the pages(what the route loads). A page is destructured into smaller sections. The tree structure looks like this:
  Page -> Sections -> Components

5. partials
  - contains Header, Footer and the MainLayout

There are 2 generic layout components:  
  a. MainLayout (which affects the Page layout, width etc)  
  b. Page (which affects the section layout, width etc)  

All the general settings (colors, links, urls, page sizes etc) are located in constants.js  
All the shared styling can be found into /components/sharedStyle.js file

## Routes
The app routing is done using [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  - you can see it in action by clicking the menu items (you will see the same shared header, footer but different bodies)

### Translations
Translations are applied using [react-i18next](https://www.npmjs.com/package/react-i18next)
   - in the i18n/config.js file updating the `showLanguages: true` flag will display the change language buttons, which, for test purposes, are currently placed near the logo

