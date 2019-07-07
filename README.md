
![alt text](https://github.com/Maxyee/Julhas_Playlist_Solver_ReactJS/blob/master/ScreenShots/loginPage.png)

## Julhas Playlist Solver With ReactJs

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## How to navigate one page to another work description.

This is a simple project called playlist solver I made it using reactjs and backend will be in python Django Rest Framework. When I try to making this website, I face a problem which is called navigation problem. The problem is that, if I load Login Page I can not see another component pages. So at last by googling and reading the documentation of ReactJs I found a solution called `react-router-dom`.
Its a module of ReactJs which gives some features which can handle the multiple components and also we can load and see all of the component page without changing code simultaniously.

So at first I made the project by writting the command of reactjs provided at their website you can also visit their website for make your own.
Here is the link of their website : https://reactjs.org/docs/create-a-new-react-app.html

![alt text](https://github.com/Maxyee/Julhas_Playlist_Solver_ReactJS/blob/master/ScreenShots/componentStucture.png)

After making my component pages I tried to load all of the pages into my `App.js` file because it is the root file of a project. But its not possible if you can not install the module called `react-router-dom`.

However before installing the `react-router-dom` I just called all the component into my `App.js` file like this.

![alt text](https://github.com/Maxyee/Julhas_Playlist_Solver_ReactJS/blob/master/ScreenShots/allcomponent.png)

Open up your console and then write this command for installing this module

`npm install --save react-router-dom`

When it is installed just go to your `package.json` file and check `react-router-dom` is added or not.

![alt text](https://github.com/Maxyee/Julhas_Playlist_Solver_ReactJS/blob/master/ScreenShots/packageJson.png)

react-router-dom this module give us so many features such as `Route`, `BrowserRouter`, `Link`, `Redireact`, `Switch` etc.

In this section we will use `Route`,`BrowserRouter`, and `Switch`. Now go to your `App.js` file and call all of the component files into
the top of the code. Cause when we add those component into our `App.js`file, At that time we can use those component name into our featured element code.

Now take help from the screen shot and navigate all of your components into the BrowserRouter as Route. 

![alt text](https://github.com/Maxyee/Julhas_Playlist_Solver_ReactJS/blob/master/ScreenShots/defineRoute.png)

Initial Page which is called the start page, at that line we should write the `exact` keyword. By writting this exact keyword we can verify the initial page which will always called the start page. 

Another component we define into the route which is has no path just calling as a component which will load the page as a Error page. Suppose a user hit the url as a `http://localhost:3000/about` this url will show that user error component because we have no component called About.js


