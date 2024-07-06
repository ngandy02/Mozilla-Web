const myImage = document.querySelector("img");
/*
- In the above code we have stored a reference to our <img> element into myImage
*/ 

myImage.onclick = () => {
    /*We have made its 'onclick' event handler property equal to a function with no name (an "anonymous" function)*/

    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox.png"){
        myImage.setAttribute("src", "images/LISC-logo.png");
    }
    else{
        myImage.setAttribute("src", "images/firefox.png");
    }
};
/*According to the definition of the anonymous function, every time the <img> element is clicked:
 1) the code retrieves the value of the image's src attribute 
 2) the code uses a condition to check if the 'src' value is equal to the path of the original image (in this case path is "images/firefox.png")
    - if it is equal, the code changes the src value to the path of the second image, forcing the other image to be loaded inside the <img> element, thus changing the picture
    - if it is NOT equal, the code changes the src value to the path of the original picture
 */

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter you name.")  
    /*
    The "prompt()" function, which displays a dialog box, similar to "alert()" 
    does more than "alert()", asking the user to enter data and storing it in a variable after the user click OK
    - In this case we are asking the user to enter a name
    */
   if(!myName){
    /*
    -This if condition prevents a username of NULL
    -If myName has no value then you run setUserName() again until you get a myName with a value
     */
    setUserName();
   }
   else{
    localStorage.setItem("name", myName);
    /*
    - Next, the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later
    - We use localStorage's "setItem()" function to create and store a data item called 'name', setting its value to the
    myName variable which holds the user's entry for the name 
    */
    myHeading.textContent = `Mozilla Welcomes You ${myName}!`;
    /*
    - Finally, we set the textContent of the heading to a string, plus the user's newly stored name
     */

   }

}

if (!localStorage.getItem("name")){
    setUserName();
    /* 
    If there is no value stored in the 'name' data item, 
    then we call the 'setUserName()' function to ask the user for their name 
    and set the API localStorage's 'name' data item equal to the user's inputed name
    and set the heading's textContent to the updated string with the user's name added to it 
    */
}
else{
    /* If there IS a value stored in the 'name' data item (that is, the user set a user name during a previous visit), 
    then retrieve the stored name using the "getItem" function
    and set the textContent of the heading to a string plus the user's name, as we did inside the setUserName() function
    */
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla Welcomes You ${storedName}!`;
}


/*
The 'onclick' event handlier on the button allows, when clicked, to run the setUserName() function
This allos the user to enter a different name by pressing the button 
 */
myButton.onclick = () => {
    setUserName();
}


/* 
const myHeading = document.querySelector("h1"); //grabs reference to your heading
myHeading.textContent = "Hello world!"; //stores the string into your variable called myHeading using the 'textContent' attribute

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!")
})  
*/
/* whenever the user clicks any part of the webpage, there is an alert message */

/* 
- The above example is handling the click event, which is activated by the browser when you click on the webpage with your mouse
- Here we attach an event handler to the <html> element
- Then, we call its addEventListener() function, passing in the name of the event to listen to ('click') and a function to run when the click event happens 
- The function passed to the addEventListener() function is called an anonymous function, because it doesn't have a name
- An alternative way of writing anonymous functions is an arrow function : arrow function uses '() =>' instead of 'function ()'

/*
- declare a variable with the 'let' keyword
- JavaScript is case sensitive
- alert() function makes a pop-up box appear inside the browser window, 
    but we need to give it a string as an argument to tell the function what message to display 
*/