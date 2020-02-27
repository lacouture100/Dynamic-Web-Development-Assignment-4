//My aPI endpoint
const url = '/toppings'

//Load when the DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    loadToppings();
    submitTopping();

})
function loadToppings(){
    fetch(url)
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

            //created the list of available toppings
            const toppingName = document.createElement("li");

            //set the toppings' class
            toppingName.setAttribute("class", "list__topping");

            //grab each element in the json and implement it into the topping list element as a text field
            toppingName.textContent = `${element}`;

            //append each topping to the list
            toppingList.appendChild(toppingName);
        })
    });
}
function submitTopping() {
    //look for the topping submit form
    const submitButton = document.querySelector('.submit__button');

    //execute a function when the submit button is clicked
    submitButton.onclick = async () => {
        //look for the input field
        const toppingInput = document.querySelector('.submit__input');
        //grab the value in the input field
        const topping = toppingInput.value;

        fetch(url, {
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
        //set input value back to blank
        toppingInput.value = "";
    };
}








/* function loadDatabase() {
  //Remove the load page content
  try {
    document.querySelector(".loadPage").remove();
    document.querySelector(".header").remove();
    document.querySelector(".main").remove();
  } catch (error) {
    console.log(error);
  }
  let contentPgs = 0;
  let charCnt = 0;

  let textSize = '100%';
  let labelSize = '100%';

  fetch(url)
    .then(response => {
      return response.json()
    })
    //See how many characters are available across how many pages
    .then(result => {
      contentPgs = result.info.pages;
      charCnt = result.info.count;
      console.log(`There are ${charCnt} characters available in ${contentPgs} pages.`)
    })
    .catch(err => {
      return err;
    })

  const header = document.createElement("header");
  header.setAttribute("class", "header");
  document.body.appendChild(header);

  const main = document.createElement("div");
  main.setAttribute("class", "main");
  document.body.appendChild(main);

  const catalogue = document.createElement("div");
  catalogue.setAttribute("class", "catalogue");
  main.appendChild(catalogue);

  const loadHome = document.createElement("a");
  loadHome.setAttribute("href", "index.html")
  loadHome.setAttribute("class", "header__imageLink");
  header.appendChild(loadHome);

  const bitLogo = document.createElement("img");
  bitLogo.src = 'assets/8bitlogo.png';
  bitLogo.setAttribute("class", "header__image");
  loadHome.appendChild(bitLogo);

  const loadNext = document.createElement("a");
  loadNext.setAttribute("href", "#")
  loadNext.setAttribute("class", "header__imageLink");
  header.appendChild(loadNext);

  const bitImg = document.createElement("img");
  bitImg.src = 'assets/8bitRickMorty.png';
  bitImg.setAttribute("class", "header__image");
  loadNext.appendChild(bitImg);

  //Load more characters!
  bitImg.onclick = async () => {
    document.querySelector(".header").remove();
    document.querySelector(".main").remove();
    loadDatabase();
    if (pageNum <= contentPgs || pageNum == 0) {
      pageNum++;
    } else {
      pageNum=1;
    }
  }


//Loop through every available page and grab every result
//for (var pageNum = 1; pageNum < contentPgs; pageNum++) {
fetch('https://rickandmortyapi.com/api/character/?page=' + pageNum)
  //Fetch page number pagNum and parse as JSON
  .then(response => response.json())
  .then(result => {

    result.results.forEach(element => {

      //Make a new <div> container with each character's info
      const charContainer = document.createElement("div");
      charContainer.setAttribute("class", "character--normal");
      catalogue.appendChild(charContainer);

      //Make a new <img> element with each character's image
      const charImg = document.createElement("img");
      charImg.src = element.image;
      charImg.setAttribute("class", "character__image");
      charContainer.appendChild(charImg);


      //Make a new <p> element with each character's name
      const charName = document.createElement("p");
      const nameLabel = document.createElement("p");
      const nameDiv = document.createElement("div");
      nameDiv.setAttribute("class", "character__field");
      nameLabel.textContent = `Name:`;
      charName.textContent = `${element.name}`;
      nameLabel.setAttribute("class", "character__label");
      nameLabel.style.fontSize = textSize;
      charName.setAttribute("class", "character__value");
      charName.style.fontSize = labelSize;
      nameDiv.appendChild(nameLabel);
      nameDiv.appendChild(charName);
      charText.appendChild(nameDiv);

    })

  })
};

 */