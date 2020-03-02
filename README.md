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
#### Server Side

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

Now we can finally start setting up our web server. Let's head into our `server.js` file and start importing the libraries we need. Import our `express`, `path`, and `fs` node packages. 

```
//Required node packages
const express = require("express");
const path = require("path");
const fs = require("fs");
```
Let's also define the port where we are going to launch our web server. 
```
const port = 3000;
```
We will define our express package inside a variable `app` to access it easier. We will also use the `__dirname` variable to replace our absolute directory path. You may read more about what an absolute path is [here.](https://www.computerhope.com/issues/ch001708.htm) 

```
//define express inside of a variable
const app = express();

//define my static server files directory, in this case the 'public' folder
//__dirname is the absolute path of the directory containing the currently executing file.
app.use(express.static(__dirname + '/public'));

//It parses incoming and outgoing requests with JSON payloads(it means it converts them into JSON-formatted text)
app.use(express.json());
```
Now let's define the path to our `index.html` file our server to run it.

```
//absolute path to my index.html file. 
//__dirname is the absolute path of the directory containing the currently executing file.
const indexPath = path.join(__dirname, 'views/index.html');

```
Now let's define where a `/` request will send us. This is what will define our address `localhost:3000/`  will take us to the content defined in our `index.html` file.

```
//a '/' request will send you to the index.html file
app.get('/', (req, res) => res.sendFile(indexPath))

```

Our next step is to define what will happen when our server receives GET, POST, or DELETE requests from a client. We can say this can be defined as:

1. GET - What happens when a client requests what data is currently in our `toppings.json` file.
2. POST - What happens when a client requests to add data to our `toppings.json` file.
3. DELETE - What happens when a client requests to delete data in our `toppings.json` file.

We can define each of these in the three following functions:

```
//Define our GET function.
function getToppings() {
    //grab the toppings json from the data folder on root
    const toppingsJSON = fs.readFileSync(path.join(__dirname, '/data/toppings.json'));
    //parse the toppings json
    const toppings = JSON.parse(toppingsJSON);
    return toppings
}

//Define our POST function.
function addTopping(topping) {
    //read from the toppings json before adding a topping
    const toppings = getToppings();
    //add the topping to the 'pizzaToppings' item in the json
    toppings.pizzaToppings.push(topping);
    //update the pizzaToppings file with the new toppings
    fs.writeFileSync(path.join(__dirname, '/data/toppings.json'), JSON.stringify(toppings));
    return toppings
}

//Define our DELETE function.
function deleteTopping(deleteTopping) {
    //read from the toppings json before deleting a topping
    const toppings = getToppings();
    //Only keep the toppings that are different from the deleteTopping variable
    toppings.pizzaToppings = toppings.pizzaToppings.filter(topping => topping !== deleteTopping);
    //update the pizzaToppings file with the new toppings
    fs.writeFileSync(path.join(__dirname, '/data/toppings.json'), JSON.stringify(toppings));
    return toppings
}
```
After we define our functions, let's implement them into our `express` GET, POST, and DELETE functions as well.

```
//Express GET request
app.get("/toppings", (req, res) => {
    //read from the toppings json
    const toppings = getToppings();
    // Updated list will be returned by API
    res.json(toppings);
});

//Express POST request
app.post("/toppings", (req, res) => {
    //grab the 'topping' from the POST request. The request must be in the {"topping":"whatever"} format.
    const topping = req.body.topping;
    //add the topping to the toppings list
    const toppings = addTopping(topping);
    // Updated list will be returned by API
    res.json(toppings);
});

//Express DELETE request
app.delete("/toppings/:name", (req, res) => {
    //set the name at the end of the request as the name of the topping to delete
    const toppingToDelete = req.params.name;
    //update the toppings file after deleting the topping
    const toppings = deleteTopping(toppingToDelete);
    // Updated list will be returned by API
    res.json(toppings);
});

```

Finally, let's open our previously defined port and listen to incoming requests using `express`.

```
//Open the port
app.listen(port, () => console.log(`Server app listening on port ${port}!`))
```

#### Client Side

Well, the first we might want to do is see if our client is displaying the information correctly. Let's setup a simple html file to display our information. I started by making a simple blank webpage with a link to my `toppings.json` file. Though this is not necessary (you can see the `toppings.json` file directly in your code editor) it's a good way to test your access to the API once you have everything setup.

![Link to my API/Pizza topping in JSON format.](public/assets/process0.png)

```
    <a href="/toppings">
        <h2>Toppings here!</h2>
    </a>
```

We can run our server to check if the link is working. In order to do it open the terminal in your project directory and type in the following command:

```
npm start
```
You should receive the following message in your console.

![Link to my API/Pizza topping in JSON format.](public/assets/serverRun.PNG)

Once we have this running, we can go ahead and define our functions for the client side. Let's define our request URL and add an event listener for when the DOM is loaded. When the DOM is loaded we will send our GET request and update our website with the `toppings.json` information.

```
//My API endpoint
const url = '/toppings'

//Load when the DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  loadToppings();
  submitTopping();
})
```
To test if the request was working correctly I decided to make a `<p>` element for each of the toppings in our `.json` file in our asynchronous `loadToppings()` function.




```
async function loadToppings() {
  await fetch(url)
    .then(response => {
      //convert the incoming message into JSON format
      return response.json()
    })
    .then(result => {
      //created the container for the list elements
      const toppingList = document.createElement("ul");
      //set the list's class
      toppingList.setAttribute("class", "list");
      //append the empty list of toppings onto the DOM body
      document.body.appendChild(toppingList);

      //Look into the JSON's 'pizzaToppings' field and 
      //create a list element with each of it's elements
      result.pizzaToppings.forEach(element => {

        //created the container for the topping names and buttons
        const toppingContainer = document.createElement("div");
        //set the containers' class
        toppingContainer.setAttribute("class", "topping");
        //set the container's unique id
        toppingContainer.setAttribute("id", `topping__${element}`);
        //Set a random background color for each topping
        randomBackground(toppingContainer);

        //created the list of available toppings
        const toppingName = document.createElement("li");
        //set the toppings' class
        toppingName.setAttribute("class", "topping__name");
        //grab each element in the json and implement it into the topping list element as a text field
        toppingName.textContent = `${element}`;
        //append each topping to the list
        toppingContainer.appendChild(toppingName);

        //append the containers of toppings onto the DOM body
        toppingList.appendChild(toppingContainer);
        
      });
    })
}

```

IMPORTANT! The classes seen below were previously defined in our `style.css` file.
It should look somewhat like this:

![Topping <div>s.](public/assets/process1.PNG)

After this was defined, I wanted to add a button which would append to each of our toppings so we could eliminate it. So I added it right before appending the topping `<div>` onto the body.

```
        //created the list of removable toppings
        const toppingButton = document.createElement("button");
        //set the toppings' class
        toppingButton.setAttribute("class", "topping__button");
        //grab each element in the json and implement it into the topping list element as a text field
        toppingButton.textContent = `Remove ${element}`;
        //append each topping to the list
        toppingContainer.appendChild(toppingButton);
```

With our `loadToppings()` `GET` function implemented let's proceed with the `POST` and `DELETE` functions. First, we need to add something so that we can input new toppings and send the request over too our server. Let's add a form which contains an input field and submit button. The input field will regsiter the topping and the button itself would send the request, as seen below:

![Topping <div>s.](public/assets/process2.PNG)


```
function submitTopping() {
  //look for the topping submit form button
  const submitButton = document.querySelector('.submit__button');
  //execute a function when the submit button is clicked
  submitButton.onclick = async () => {
    //look for the input field
    const toppingInput = document.querySelector('.submit__input');
    //grab the value in the input field
    const topping = toppingInput.value;
    //If topping input field is not empty make the request
    if(topping !== ""){
      //wait for the url response
    await fetch(url, {
      //Define the request message
      method: "POST",
      //converts JSON into a string to be sent as the body
      body: JSON.stringify({
        //message sent 
        topping: topping
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //console log the success message
    console.log(`Success! ${topping} added!`)
    //set input value back to blank
    toppingInput.value = "";
  } else {
    //Alert the user they can't leace the input field empty
    alert("There's no such thing as an empty topping! Try again");
  }
  };
}
```

With the `GET` and `POST` determined in our `client.js`, I could finally implement the `DELETE` request through the `delete topping` button.

```
function deleteTopping(topping) {
  //get the topping div
  const toppingContainer =  document.getElementById(`topping__${topping}`);
  //removethe topping div
  toppingContainer.remove();
      //console log the success message
  console.log(`Success! ${topping} removed!`)
  //send the DELETE request for the selected topping
  fetch(`/toppings/${topping}`, 
  {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    }
    //send the json request
  }).then(res => res.json())
}
```

I then added the function on to our previously created buttons. The asynchronous function would a 

```
//when the user click the delete topping button it deletes it's div and db register
        toppingButton.onclick = async () => {
          await deleteTopping(element);
        }
```


At last, I modified the CSS a bit so it could look a bit better.


![Final look.](public/assets/process3.PNG)

And Voila! We have our web server!
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

