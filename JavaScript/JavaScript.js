function userOutput(output){
  const userText = output;
  let = document.getElementById("userOutput").innerHTML = userText;
}

function removeCharacters(userin){
  const userinput = userin;
  const correct = userinput.replace(/[" "-]/g,"");
  userOutput(correct);
}

function convert(){
  let userinput = document.getElementsByClassName("userinput").value;
  removeCharacters(userinput);
  
}