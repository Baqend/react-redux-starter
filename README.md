!["Logo"](https://github.com/Baqend/react-redux-starter/raw/master/react_baqend.png)


#React, Redux and Baqend Starter
With this React, Redux and Baqend starter kit you can build **blazingly fast single page applications** in no time. Setup your project by following the simple steps below.

The starter is based on the [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit) and uses:

* [**Webpack**](http://webpack.github.io)
* [**React**](https://github.com/facebook/react)
* [**Redux**](https://github.com/reactjs/redux)
* [**React-Router**](https://github.com/ReactTraining/react-router)
* [**SASS**](http://sass-lang.com)
* [**Babel**](https://github.com/babel/babel)
* [**Express**](https://github.com/expressjs/express)
* [**Karma**](https://github.com/karma-runner/karma)
* [**ESLint**](http://eslint.org)
* [**Baqend**](http://www.baqend.com) as a fully managed backend service for backend-less development

## How to use the template

1. Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine
2. Clone the repository with `git clone https://github.com/Baqend/react-redux-starter`
3. Install the project with `npm install`
4. Start the server with `npm start`
5. Open the url in your browser [http://localhost:3000](http://localhost:3000), you should see a small sample application with signup capability

Your app is currently connected to a Baqend test instance called 'app-starter', which provides common backend features like data and file storage, user authentication (used in the example), queries and push notifications among others.

To develop your own application 

1. Launch a free Baqend instance at [baqend.com](http://dashboard.baqend.com/register)
2. Change the app name in your projects `src/modules/application.js` from `app-starter` to your app name
3. Your React app will automatically connect to your app instance
4. To start accessing data or backend features, simply import the `db`-object with `import {db} from 'baqend'` 
and see our [Guide](http://www.baqend.com/guide/#accessing-data) and [API Docs](http://www.baqend.com/js-sdk/latest/baqend.html) for details

For more information: on [React](https://facebook.github.io/react/docs/hello-world.html), [Redux](http://redux.js.org/), the structure of this 
[project](https://github.com/davezuko/react-redux-starter-kit) or [Baqend](http://www.baqend.com).

## How Baqend fits your Backend requirements

Baqend is a fully managed Backend-as-a-Service platform with a strong focus on performance and scalability 
([click here for details](http://blog.baqend.com/post/139788321880/bringing-web-performance-to-the-next-level-an)). 
The [JavaScript API](http://www.baqend.com/js-sdk/latest/baqend.html) gives you access to common backend features 
while the [dashboard](http://www.baqend.com/guide/#baqend-dashboard) lets you define data models and access rules as 
well as business logic to execute on the server side.

Baqend's feature set includes: 

* Automated Browser and CDN Caching
* Scalable Data Storage
* Realtime Streaming Queries
* Powerful Search and Query Language
* Push Notifications
* User Authentication and OAuth
* File Storage and Hosting
* Access Control on Object and Schema Level

#License

[MIT](https://github.com/Baqend/react-redux-starter/blob/master/LICENSE) 
