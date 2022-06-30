# Getting Started with Daily Cards React App

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The UI will display a number of cards and we can add and delete any card.
There is a delete button on each card to delete the card.
The last card having add card button which creates new card.
The color to these card will come randomly and also there is transition ease out provided on focus and hover on the cards.

## Use below hooks using the import command 

### `import useState, useEffect hooks`

#### `useState` ####
useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

#### `useEffect` ####
useEffect(callback, dependencies) is the hook that manages the side-effects in functional components. callback argument is a function to put the side-effect logic. dependencies is a list of dependencies of your side-effect: being props or state values.

## Install below packages using the npm command 

### `npm install json-server`

#### `JSON Server` is a Node Module that you can use to create demo rest json webservice in less than a minute. All you need is a JSON file for sample data

### `npm install axios --save`

#### `Axios` is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests.

## Newly Added Scripts

### `npm run server`

Runs the JSON server in the development mode.\
Open [http://localhost:5000/cards](http://localhost:5000/cards) to view it in your browser.
Added this script in package.json as `"server": "json-server --watch src/cards.json --port 5000"` to sun server

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.






