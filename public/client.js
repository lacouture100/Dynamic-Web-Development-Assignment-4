//My aPI endpoint
const url = '/toppings'

//Load when the DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  loadToppings();
  submitTopping();

})

function loadToppings() {
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

        //created the container for the topping names and buttons
        const toppingContainer = document.createElement("div");
        //set the containers' class
        toppingContainer.setAttribute("class", "topping");
        toppingContainer.setAttribute("id", `topping__${element}`);
        randomBackground(toppingContainer);


        //created the list of available toppings
        const toppingName = document.createElement("li");
        //set the toppings' class
        toppingName.setAttribute("class", "topping__name");
        //grab each element in the json and implement it into the topping list element as a text field
        toppingName.textContent = `${element}`;
        //append each topping to the list
        toppingContainer.appendChild(toppingName);

        //created the list of removable toppings
        const toppingButton = document.createElement("button");
        //set the toppings' class
        toppingButton.setAttribute("class", "topping__button");
        //grab each element in the json and implement it into the topping list element as a text field
        toppingButton.textContent = `Remove ${element}`;
        //append each topping to the list
        toppingContainer.appendChild(toppingButton);

        //append the empty containers of toppings onto the DOM body
        toppingList.appendChild(toppingContainer);

        toppingButton.onclick = async () => {
          deleteTopping(element);
        }
      });
    })
}

function deleteTopping(topping) {
  const toppingContainer = document.getElementById(`topping__${topping}`);
  toppingContainer.remove();
  console.log(`/toppings/${topping}`)
  fetch(`/toppings/${topping}`, 
  {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
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

function randomBackground(container) {
  const r = Math.floor(Math.random() * 200);
  const g = Math.floor(Math.random() * 200);
  const b = Math.floor(Math.random() * 200);
  container.style.backgroundColor = `rgb(${r},${g},${b})`;

}