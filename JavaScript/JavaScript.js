function userOutPut(output){                     //This fuction will print converted userinput back to the user.
  const convertedUserInput = output;            //Storing user input from removeCharacters fuction
  let userOutput = document.getElementById("userOutput").innerHTML = convertedUserInput;   // pushing converted input back to user under id="userOutPut"
}

function removeCharacters(userin){    //this fuction will remove spaces and dashes withen a literal
  const userinput = userin;           //storing user input into a inmutable variable name
  const convertedInput = userinput.replace(/[" "-]/g,"");  //select characters to be removed on a globa scope
  userOutPut(convertedInput);         //the coverted output is passed to userOutPut
}

function convert(){                   //This fuction will get the user input value
  let userinput = document.getElementById("Ikey").value;    //.value is necessary to get the object value

  if(userinput == "") {
    alert("There is nothing to convert"); //The if statement check checks to see if the user has added anything
  }
  removeCharacters(userinput);        //This fuction is instanciated in the block above
                                      //userinput is passed to removeCharacters fuction 
  
}