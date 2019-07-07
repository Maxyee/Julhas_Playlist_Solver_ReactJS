This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to navigate one page to another work description.

This is a simple project called playlist solver I made it using reactjs and backend will be in python Django Rest Framework. When I try to making this website, I face a problem which is called navigation problem. The problem is that, if I load Login Page I can not see another component pages. So at last by googling and reading the documentation of ReactJs I found a solution called `react-router-dom`.
Its a module of ReactJs which gives some features which can handle the multiple components and also we can load and see all of the component page without changing code simultaniously.

So at first I made the project by writting the command of reactjs provided at their website you can also visit their website for make your own.
Here is the link of their website : https://reactjs.org/docs/create-a-new-react-app.html

After making my component pages I tried to load all of the pages from `App.js` file because it is the root file of a project. But its not possible if you can not install the module called `react-router-dom`.

Open up your console and then write this command for installing this module

`npm install --save react-router-dom`

When it is installed just go to your `package.json` file and check `react-router-dom` is added or not.

react-router-dom this module give us so many features such as `Route`, `BrowserRouter`, `Link`, `Redireact`, `Switch` etc.

In this section we will use `Route`,`BrowserRouter`, and `Switch`. Now go to your `App.js` file and call all of the component files into
the top of the code. Cause when we add those component into our feature code it will not recognise.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
