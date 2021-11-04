# Contact Manager App using React Axios

> Quick and simple CRUD(Create, Read, Update and Delete) application on Reactjs using Axios and JSON Server.
> Thank you @dmalvia for the Tutorial.

## Installation
1. Create the file packages include `.gitignore` file `node_modules/`, `package-lock.json`, `package.json`. 
2. Run the Commands in both sever-api and contact-app: 
  `npm` or `yarn`
3. Now you can start the apps:
   for starting Server : 
    `cd server-api npm start` 
   and for starting Frontend : 
    `cd contact-app yarn start`
## About Axios
Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.
Let's see how this app works with Axios.

| Actions | HTTP Methods | Endpoints |
| :---: | :---: | :---: |
| Read contacts | GET | /contacts |
| Create contact | POST | /contacts |
| Update contact | PUT | /contacts/:id |
| Delete contact | DELETE | /contacts/:id |

## About JSON Server
JSON Server is a Node Module that you can use to create demo REST JSON services within a short span of minutes. The contacts we manage with the app will be stored in *db.json* inside the server folder. Also the connection with frontend is done through axios, inside `/api/contact.js` file we are specifying the baseURL to the JSON Server.


## References
[React Axios CRUD with JSON SERVER by Dipesh Malvia](https://www.youtube.com/watch?v=59z1_3-vTOk&t=50s)
[Axios](https://axios-http.com/)
