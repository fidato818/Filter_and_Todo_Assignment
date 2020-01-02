// alert("this todo is underprocess and Checkout todo with D.O.M");
var mainDiv = document.getElementById("toDo");
// var heading = document.createElement('h2');
// var headingTxt = document.createTextNode('Todo App using DOM');
var anoDiv = document.createElement("div");
anoDiv.setAttribute('id','box-1');
// heading.appendChild(headingTxt);
// anoDiv.appendChild(heading);
mainDiv.appendChild(anoDiv);


// SPACES B/W BUTTONS AND INPUTS
var gap = document.createElement('hr');
var gap2 = document.createElement('br');


//input
var mainPut = document.createElement('input');
mainPut.setAttribute('type','text');
mainPut.setAttribute('id', 'input');
mainPut.setAttribute('class',"form-control")
mainPut.setAttribute('placeholder',"Please enter Your Daily Plans")
anoDiv.appendChild(mainPut);
mainDiv.appendChild(anoDiv);


// SPACES B/W BUTTONS AND INPUTS ON BROWSER
anoDiv.appendChild(gap);
anoDiv.appendChild(gap2);

// buttons submit
var submitbtn = document.createElement('button');
submitbtn.setAttribute('onClick','mySub();');
submitbtn.setAttribute('class', 'btn btn-success col-5');
var submitbtnTxt = document.createTextNode('Submit');
submitbtn.appendChild(submitbtnTxt);

anoDiv.appendChild(submitbtn);
mainDiv.appendChild(anoDiv);


// buttons delete
var delBtn = document.createElement('button');
delBtn.setAttribute('onClick','myDel();');
delBtn.setAttribute('class', 'btn btn-danger col-5');
var delBtnTxt = document.createTextNode('Delete All');
delBtn.appendChild(delBtnTxt);
anoDiv.appendChild(delBtn);
mainDiv.appendChild(anoDiv);






//UL
var ul = document.createElement('ul');
ul.setAttribute('id','ul');
anoDiv.appendChild(gap);
// anoDiv.appendChild(gap2)
anoDiv.appendChild(ul);
mainDiv.appendChild(anoDiv);



//function my Submit button
function mySub(){
    var inputTxt = document.getElementById('input').value;
    if(inputTxt  == ""){
        alertify.alert("TODO APP with D.O.M.",'Please Enter Your Daily Plans'); 
    }
    else {
    //CREATE INPUT BUTTON...
    var li = document.createElement('li');
    li.setAttribute('class','alert alert-dark');
    li.setAttribute('id','alert');
    li.setAttribute('role','alert');
    var liTxt = document.createTextNode(inputTxt);
        alertify.success('Success')

    //CREATE EDIT BUTTON...
    var editBtn = document.createElement('i');
    editBtn.setAttribute('class','fas fa-edit');
    var editBtnTxt = document.createTextNode('');

    // CREATE REMOVE BUTTON...
    var removeLi = document.createElement('i');
    removeLi.setAttribute('class','fas fa-times');
    var removeLiTxt = document.createTextNode('');



    // SHOW BUTTONS AND INPUT ON BROWSER
    editBtn.appendChild(editBtnTxt);
    removeLi.appendChild(removeLiTxt);
    li.appendChild(liTxt);
    li.appendChild(removeLi);
    li.appendChild(editBtn);
    ul.appendChild(li);
    anoDiv.appendChild(ul);
    
    mainDiv.appendChild(anoDiv);


    removeLi.addEventListener('click', function(){
        removeLi.parentNode.remove();
        alertify.error('Message Remove');
    })

    document.getElementById('input').value = "";
 // EDIT BUTTON FUNCTION...
    editBtn.addEventListener('click',function(){
        var editTxt = prompt("Please edit Message",inputTxt);
        if(editTxt !== ""){
            liTxt.data = '';
            inputTxt = editTxt;
        liTxt = document.createTextNode(inputTxt);
        li.appendChild(liTxt);
        li.appendChild(removeLi);
        li.appendChild(editBtn);
        ul.appendChild(li);
        anoDiv.appendChild(ul);
        }
        else{
            alertify.alert('Please Fill the Edit Box.');
        }
    })
}
}


//function my delete button
function myDel(){
    var removelist = document.getElementById('ul');
    while (removelist.hasChildNodes()){
        removelist.removeChild(removelist.lastChild);
        alertify.alert("TODO APP with D.O.M.",'All Message Are Removed');
    }
}



