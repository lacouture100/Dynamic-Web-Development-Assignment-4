# Dynamic Web Development 
## Assignment 4
***
## About
***
This repository contains my fourth assignment for the Dynamic Web Development Class at ITP. The assignment contains a website that displays a list of toppings you choose to include in a virtual pizza. This project consists of a website made with CSS, HTML, and JS using the fetch API/ GET method to access data from an online API made by me and display it interactively on a webpage. 

![8 bit pizza image](public/assets/pizza.png)

## Setup
***

 - This project runs on Node.js and npm. In order to setup the project you must have these installed and running. You can find more detailed instructions below.
  

### Prerequisites

 -  An internet browser.
 -  An internet connection.
 -  Access to computer terminal.
 -  Npm installed.
 -  Node.js installed.

### Installation

  1. Download the repository to your computer.
  2. Open your terminal in the repository folder.
  3. Make sure you have npm and node.js installed. You can check this with the following commands:
   `npm - v` 
   `node -v`
  4. If npm and/or node.js are not installed, you may follow this easy to follow guide from Tania Rascia. [How to Install and Use Node.js and npm (Mac, Windows, Linux)](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/)
  5. Once everything is installed, type in the following command while in the repository folder:
  `npm start`
  6. Open your preffered browser and in the address bar type in `http://localhost:3000/`


### Develop

To develop this document, you can follow the steps provided below:
1. Create a fork of this project on Github.
2. Ping the author of this repo via Github Issues to see if they are looking for contributions with the specific feature you're looking to add.
3. Open the file in VS Code and make updates .
4. Add and commit those changes in your forked Github repo.
5. Make a pull request specifying what additions and changes were made.
6. Have a nice chat and open communication with me about those changes. 
7. Celebrate the contribution! 

## Built with
***
* [VS Code](https://code.visualstudio.com/)
* [Github](https://github.com)
* [Node.js](https://nodejs.org)
* [npm](npmjs.com)

***
## Author

* [Alvaro Lacouture](https://alvarolacouture.com) 

***
## Acknowledgements

* [Joey Lee](https://jk-lee.com) -- adjunct professor -- [NYU ITP](https://itp.nyu.edu)
* [Cassie Tarakajian](https://cassietarakajian.com/) -- adjunct professor -- [NYU ITP](https://itp.nyu.edu)
* [The Good Project Readme Project](https://github.com/itp-dwd/2020-spring/blob/master/templates/readme-template.md)

***
## Notes & Process

I urge you to look into the files to see what's going on. Each line of code is commented.
My process began with going through the [Back-end foundations workbook](https://github.com/itp-dwd/back-end-foundations-workbook) provided by Joey and Cassie. Following the guide, I went through the process of creating a server, a client, and a database to manipulate data with Node. Though I would have liked to make some kind of attractive UI, I'm satisfied it works how it's supposed to.

### Process & Documentation

#### Setting up our environment

We are going to run a server using server side Javascript and Node.js. To follow this guide please start in an empty directory/folder where you want your project to be.

We will start by creating our directories. I will use terminal commands for the next steps, but you are welcome to use any other method your are comfortable with.

Let's first create our server file in the root directory.

```
touch server.js
```
To create our web server we will be using several Node.js packages. You can think of them as libraries to use with node to make everything easier. In our case, we will be using the `Express`, `fs`, and `path` packages. First we need to tell `npm` we will be using these dependencies in our development environment. The following command creates the `package.json` file, which enumerates our packages for npm.

```
npm init
```
If everything is installed correctly you should see something similar to this:

![npm Init command output](public/assets/npminit0.png)

To accept the details npm is giving us press the `Enter` key to accept or `ctrl + C` on your keyboard to quit. These details may be customized to an extent. Our package name, for example, is the folder's name. Our version and git repository may also be set right away. Don't worry about this for now, it may be changed later. However, for this project we need to make sure our "main" parameter has a reference to our server.js file, as seen below:

![npm Init command output](public/assets/npminit.png)

After you have confirmed we can now install our dependencies. Type in the following commands:

```
npm install express
npm install fs
npm install path
touch .gitignore
```

This `.gitignore` file is made for when we upload our folder into Github, it tells git which files (or patterns) it should ignore. Open the file and copy the following text into it:

```
node_modules  
.DS_Store
```

We have one last step to do before we can start coding our web server. Open your `package.json` file and cheack to see if you have the `"scripts"` field with the following entries:

![npm Init command output](public/assets/packageJson.png)

Once we have our server setup, these commands will later on allow us to run it.

Now that we have solved our npm packages, let's start developing our web server.
 
#### Setting up our web app

We first need to make a couple of directories to store our HTML, CSS, JSON data file, and our client.js code. No problem. 

1. Let's make a `public` folder, a `data` folder, and a `views` folder. 
2. Inside our `public` folder, let's create a `css` and a `js` folder. 
3. Inside our `public/css` folder, create a `style.css` file.
4. Inside our `public/js` folder, create a `client.js` file.
5. Inside our `views` folder, create a `index.html` file.
6. Inside our `data` folder, create a `toppings.json` file.

Now that we have our directories and files set, let's make the magic happen.

First, let's fill up our `toppings.json` file with some data. For our pizza toppings website we are going to use pizza toppings as our data (duh?). I decided to make the data with a description and a list, like so:

![npm Init command output](public/assets/process1_json.png)

QUICK NOTE: For the purpose of this demonstration `pineapple` appears on the list, however, I would kindly recommend you reconsider. 

Anyways, once we have our data set, let's setup a simple html and css file to display our information. I started by making a simple blank webpage with a link to my `toppings.json` file. Though this is not necessary (you can see the `toppings.json` file directly in your code editor) it's a good way to test your access to the API once you have everything setup.

![Link to my API/Pizza topping in JSON format.](public/assets/process0.png)



***

## Challenges & Struggles

- I had some trouble deciding when to implement the `async` and `await` into the requests. However, I managed to implemented it in different ways in every functions to learn how.
- I could not get the website to run correctly when the `style.css` file was in the `public/css` folder. I got the following mistake `Refused to apply style from 'http://localhost:3000/assets/css/style.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.`
***FIXED!: added `type="text/css"` to the `<style>` tag in the html file.

## Questions
- In practical terms, at least in this example, what is the use of a PUT request in addition to a POST?
- Ok so now my data can be accessed...How can I keep my data in MY server on MY computer without having to upload it? How can I filter users, requests, etc beyond an access key?
- Still don't understande very well how to implement the authentication tokens into the requests. I know it has to do with the header but honestly I could no grasp in the time we had. I'm sure I'll have it down by next week.


## References
 -  [Back-end foundations workbook](https://github.com/itp-dwd/back-end-foundations-workbook)
 -  [Nice Await/Async explanation](https://dev.to/johnpaulada/synchronous-fetch-with-asyncawait)

