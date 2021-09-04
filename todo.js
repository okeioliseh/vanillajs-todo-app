const addToList = ()=>{
    //firstly,initialize the list items as an array...
    var x = 0;
    x++;
    var listItems = [x];
    const content = document.querySelector("#content");
    const inputVal = document.querySelector("#todoinput").value;
    //use the array method ".push" to add new items...
    listItems.push(inputVal);
    var list = document.createTextNode(listItems[x]);
    //next step..
    const newItem = document.createElement("p");
    const newList = newItem.appendChild(list);
    content.appendChild(newItem);
    newItem.className = "todoitem";
    document.querySelector("#todoinput").value = "";
    //next step,creating a checkbox...
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newItem.appendChild(checkbox);
    checkbox.className = "checkbox";
    //next step,create a remove button that will remove the parent element,thereby deleting the children also...
    const clearbtn = document.createElement("button");
    const btnval = document.createTextNode("X");
    clearbtn.appendChild(btnval);
    clearbtn.className = "clearbtn";
    newItem.appendChild(clearbtn);
    //if value is less than one character...
    if(inputVal<1){
        content.removeChild(clearbtn.parentNode);
    }
    clearbtn.onclick = function(){
        content.removeChild(clearbtn.parentNode);
    };
}