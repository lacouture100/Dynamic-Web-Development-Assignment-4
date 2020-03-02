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
# Notes & Process

I urge you to look into the files to see what's going on. Each line of code is commented.
My process began with going through the [Back-end foundations workbook](https://github.com/itp-dwd/back-end-foundations-workbook) provided by Joey and Cassie. Following the guide, I went through the process of creating a server, a client, and a database to manipulate data with Node. Though I would have liked to make some kind of attractive UI, I'm satisfied it works how it's supposed to.

## Process & Documentation
IN PROCESS!!!

I started by making a simple blank webpage with a link to my `toppings.json` file.

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

