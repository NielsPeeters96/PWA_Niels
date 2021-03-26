##### Progressive Web App

# Ghibli Studio

## Project
In this course I will convert the client side web application previously made Web App From Scratch into a server side rendered application. I also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Ultimately I'm going to implement a series of optimisations to improve the performance of the application. All the basic parts covered in this course are very useful to know when you later choose to make an app using a framework. All these parts are (almost) all automated in a framework and are therefore done for you. So it is helpful to know exactly how those parts work.

### Things I completed
1. Copy the WAFS application
2. Check code and delete unnecessary features
3. Install npm, Node.js and Express
4. Change code to Node.js and Express
5. Upload project on Heroku

## Screenshot

![Frontend ](https://github.com/NielsPeeters96/NielsPeeters_Web_App_From_Scratch/blob/main/img/Screenshot.png)

#### Features
- By clicking on movies or people you'll see all movies and people related to Ghibli Studios
- after that you can click on a movie or person
- it will show a detailpage with information about the movie or person

### [Live version](https://pwa-niels.herokuapp.com/)

## Techniques
This app is built, using:
- [npm](https://www.npmjs.com/)
- [Node.js server](https://nodejs.org/)
- [Express router](https://expressjs.com/)
- [EJS Templating engine](https://ejs.co/)
- [Heroku deployment](https://www.heroku.com/nodejs)

## :gear: Installation
1. Clone the repository:  
```
git clone https://github.com/ralfz123/progressive-web-apps-2021.git
```

2. Install dependencies   
```
npm install
```

3. To run the app   
```
npm run start
```

4. To run the app in developer mode (with nodemon)
```
npm run dev
```
5. Go to [localhost](http://localhost:5000/) in the browser and voilà :sparkles:
```
http://localhost:5000/
```

#### Server 
For running the server i use the Express framework for Node.js. This is a web framework for Node.js which is good for setting up a server.

1. Require Express
```
const express = require("express");
```

After that you init your app
```
const app = express();
```

Config your Express-app
```js
app.use(express.static('static')); // Declare your static folder

// Declare folders in the static folder for easy use
app.use('/styles', express.static(__dirname + 'static/styles'));
app.use('/scripts', express.static(__dirname + 'static/scripts'));
app.use('/icons', express.static(__dirname + 'static/icons'));

// Run the server on a port
app.listen(5000, () => console.log(`App is running on port 5000`));
```

#### Templating engine
For the templating engine I use EJS. I never worked with EJS so it's all new to me.

### Performance
<!--- <img src="https://raw.githubusercontent.com/ralfz123/CATCH-YOUR-LAUGH--PWA/master/readme/perform-best-prac-26-3.png" width=400px />

<!--- <img src="https://raw.githubusercontent.com/ralfz123/CATCH-YOUR-LAUGH--PWA/master/readme/performance-26-3.png" width=400px />

<!---Before & after minifying
Screenshots!
Though building/minifying it gets .5 seconds faster
- It works I think 5 milliseconds faster with the minified code :)

<!---<img src="https://raw.githubusercontent.com/ralfz123/CATCH-YOUR-LAUGH--PWA/master/readme/seo-optimisations.png" width=400px />
Added robots.txt and sitemap.xml, because of SEO. Although it was 100%, it can also be improved ;)

<!---PWA statics... Because the manifest don't loaded correctly, it isn't installable. I have to take a look at this. because the service worker don't work at the moment, the manifest cannot be read.
<img src="https://raw.githubusercontent.com/ralfz123/CATCH-YOUR-LAUGH--PWA/master/readme/pwa-26-3.png" width=400px />

### Serviceworker
first time I used a serviceworker

#### Cache
At the moment I want to add a new favourite, it is added to a global array. But at the moment when the list where the page lives is `/favourites`. When the app starts (and during the app), this page **must not** be added to the cache. Because when you hit the like button to create a new fav combo and you want to see the fav list, you click on MY FAVOURITES and go to `/favourites`. The service worker takes then this page from the cache and you see an empty fav list. Therefore you need to whitelist `/favourites` so this page won't be cached, but retrieved from the server. But on the other side I want to see my fav list when I am offline.

All pages will be cached, excluded the /favourites. All pages will be served from the server when online. While the user is offline, then the pages will be shown whose are cached when the user was online. The pages whose are not cached and when the user wants to enter them, he receives an offline page.
