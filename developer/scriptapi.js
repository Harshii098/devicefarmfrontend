
/*let tbody=document.querySelector('tbody');
let addBtn = document.querySelector('.add');
let form = document.querySelector('.form-wrapper');
let form1 = document.querySelector('.form-wrapper1');
let saveBtn = document.querySelector('.save');
let editBtn = document.querySelector('.add');
let cancelBtn =  document.querySelector('.cancel');
let clientEle =  document.querySelector('#current_client');
let dopEle =  document.querySelector('#date_of_purchase');
let desEle =  document.querySelector('#description');
let didEle =  document.querySelector('#device_id');
let ipEle =  document.querySelector('#ip_address');
let makeEle =  document.querySelector('#make');
let manuEle =  document.querySelector('#manufacturer');
let modelEle =  document.querySelector('#model');
let osEle =  document.querySelector('#os');
let phnoEle =  document.querySelector('#phno');
let snoEle =  document.querySelector('#serial_number');
let serverEle =  document.querySelector('#server_connected');
let statusEle =  document.querySelector('#status');
let todEle =  document.querySelector('#type_of_device')

let httpm=null;
let url='http://localhost:8080/mobile';

let mobiles=[];
let id=null;
let data={};
addBtn.onclick =function(){
    httpm="POST"
    clearForm();
    form.classList.add('active')
}
editBtn.onclick =function(){
    
    httpm= "POST"
    clearForm();
    form.classList.add('active')
    //fetch("http://localhost:8080/mobile/" +serial_number, {

    
//}).then((res) => res.json()).then((response) => {

    //console.log("Edit info", response);
//})
}
cancelBtn.onclick=function(){
    form.classList.remove('active')
    form1.classList.remove('active')
}
saveBtn.onclick=function(){
    let payload={};
    payload["type_of_device"] = document.getElementById("type_of_device").value;

    payload["manufacturer"] = document.getElementById("manufacturer").value;

    payload["make"] = document.getElementById("make").value;

    payload["model"] = document.getElementById("model").value;

    payload["os"] = document.getElementById("os").value;

    payload["date_of_purchase"] = document.getElementById("date_of_purchase").value;

    payload["current_client"] = document.getElementById("current_client").value;

    payload["device_id"] = document.getElementById("device_id").value;

    payload["serial_number"] = document.getElementById("serial_number").value;

    payload["server_connected"] = document.getElementById("server_connected").value;

    payload["status"] = document.getElementById("status").value;

    payload["ip_address"] = document.getElementById("ip_address").value;

    payload["description"] = document.getElementById("description").value;

    payload["phno"] = document.getElementById("phno").value;

    fetch("http://localhost:8080/mobile",{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify(payload)



    }).then((res)=>res.json()).then((response)=>{
        
        document.getElementById("message").innerHTML = response.message

        document.getElementById("type_of_device").value="";

        document.getElementById("manufacturer").value="";

        document.getElementById("make").value="";

        document.getElementById("model").value="";

        document.getElementById("os").value="";

        document.getElementById("date_of_purchase").value="";

        document.getElementById("current_client").value="";

        document.getElementById("device_id").value="";

        document.getElementById("serial_number").value="";

        document.getElementById("status").value="";

        document.getElementById("ip_address").value="";

        document.getElementById("description").value="";

        document.getElementById("phno").value="";

       

}) 
window.location.reload();


}
    
function clearForm(){
    clientEle.value= null;
    dopEle.value= null;
    desEle.value=null;
    didEle.value= null;
    ipEle.value= null;
    makeEle.value= null;
    manuEle.value =null;
    modelEle.value =null;
    osEle.value= null;
    phnoEle.value= null;
    snoEle.value= null;
    serverEle.value= null;
    statusEle.value= null;
    todEle.value =null;
}


window.onload = function() {
    getMobiles();
    updateTable();

function getMobiles(){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        mobiles=data;
        updateTable();
    })
}
getMobiles();*/

/*function updateTable(){
    let data="";

    if(mobiles.length>0){
        for(i=0;i<mobiles.length;i++){
            console.log("data",mobiles[i])
            let details=JSON.stringify(mobiles[i]);
            
            data+= `
            <td>${mobiles[i]['current_client']}</td>
            <td>${mobiles[i]['date_of_purchase']}</td>
            <td>${mobiles[i]['description']}</td>
            <td>${mobiles[i]['device_id']}</td>
            <td>${mobiles[i]['ip_address']}</td>
            <td>${mobiles[i]['make']}</td>
            <td>${mobiles[i]['manufacturer']}</td>
            <td>${mobiles[i]['model']}</td>
            <td>${mobiles[i]['os']}</td>
            <td>${mobiles[i]['phno']}</td>
            <td>${mobiles[i]['serial_number']}</td>
            <td>${mobiles[i]['server_connected']}</td>
            <td>${mobiles[i]['status']}</td>
            <td>${mobiles[i]['type_of_device']}</td>
            <td ><button class="btn btn-primary" onClick="editDatacall()">Edit</button></td>
            <td><button class="btn btn-danger"  onClick="onDelete(this)">Delete</button></td>
            </tr>
            
         `  

        }
        tbody.innerHTML=data;
    }
}

window.onload = function() {
    
    updateTable();
}
/*fetch("http://localhost:8080/mobile").then(
    (res) => res.json()
).then((response) => {
    var tmpData = "";
    console.log(response);
    response.forEach((user) => {
        tmpData += "<tr>"
        tmpData += "<td>" + user.current_client + "</td>";
        tmpData += "<td>" + user.date_of_purchase + "</td>";
        tmpData += "<td>" + user.description + "</td>";
        tmpData += "<td>" + user.device_id + "</td>";
        tmpData += "<td>" + user.ip_address + "</td>";
        tmpData += "<td>" + user.make + "</td>";
        tmpData += "<td>" + user.manufacturer + "</td>";
        tmpData += "<td>" + user.model + "</td>";
        tmpData += "<td>" + user.os + "</td>";
        tmpData += "<td>" + user.phno + "</td>";
        tmpData += "<td>" + user.serial_number + "</td>";
        tmpData += "<td>" + user.server_connected + "</td>";
        tmpData += "<td>" + user.status + "</td>";
        tmpData += "<td>" + user.type_of_device + "</td>";
        tmpData += "<td><button class='btn btn-primary' onclick='editDatacall(`" + user.id + "`)'>Edit</button></td>";
        tmpData += "</tr>";
    })
    document.getElementById("taData").innerHTML = tmpData;
})



}
function editDatacall(serial_number) {

    form.classList.add('active')

    console.log(serial_number);

    fetch("http://localhost:8080/mobile/" +serial_number, {

    method: "GET",

    mode: "cors"

    }).then((res) => res.json()).then((response) => {

    console.log("Edit info", response);

    editFormData = response;

    console.log(editFormData);

    setFormData(editFormData.current_client, editFormData.date_of_purchase, editFormData.description, editFormData.device_id, editFormData.ip_address, editFormData.make, editFormData.manufacturer, editFormData.model, editFormData.os, editFormData.phno, editFormData.serial_number, editFormData.server_connected, editFormData.status, editFormData.type_of_device)

    })


}

var editFormData;

function getFormData() {

    return {

        current_client: document.getElementById("current_client").value,

        date_of_purchase: document.getElementById("date_of_purchase").value,

        description: document.getElementById("description").value,

        device_id: document.getElementById("device_id").value,

        ip_address: document.getElementById("ip_address").value,

        make: document.getElementById("make").value,

        manufacturer: document.getElementById("manufacturer").value,

        model: document.getElementById("model").value,

        os: document.getElementById("os").value,

        phno: document.getElementById("phno").value,

        serial_number: document.getElementById("serial_number").value,

        server_connected: document.getElementById("server_connected").value,

        status: document.getElementById("status").value,

        type_of_device: document.getElementById("type_of_device").value,

       

    }
}

function setFormData(current_client, date_of_purchase, description, device_id, ip_address, make, manufacturer, model, os, phno, serial_number, server_connected, status, type_of_device) {

    document.getElementById("current_client").value = current_client;

    document.getElementById("date_of_purchase").value = date_of_purchase;

    document.getElementById("description").value = description;

    document.getElementById("device_id").value = device_id;

    document.getElementById("ip_address").value = ip_address;

    document.getElementById("make").value = make;

    document.getElementById("manufacturer").value = manufacturer;

    document.getElementById("model").value = model;

    document.getElementById("os").value = os;

    document.getElementById("phno").value = phno;

    document.getElementById("serial_number").value = serial_number;

    document.getElementById("server_connected").value = server_connected;

    document.getElementById("status").value = status;

    document.getElementById("type_of_device").value = type_of_device;

    

}
function submitForm() {
    if (!editFormData) addMobile(); // if the editFormData is undefined then call addUser()
    else onEdit();
}


function onEdit() {

        form.classList.add('active');

        var formData = getFormData();

        formData['serial_number'] = editFormData.serial_number;
        //formData['serial_number'] = 2;

        fetch("http://localhost:8080/putmobile", {

            method: "PUT", mode: "cors",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(data)

        }).then((res) => res.json()).then((response) => {

            setSuccessMessage(response.message)

            clearForm(); // clear the form field

            getMobiles() // reload the table

        })
    
}
function editMobile(e){
    debugger;
    console.log(e)
    form1.classList.add('active');
    httpm="PUT"
    serial_number= e.target.parentElement.parentElement.serial_number;
   let selectedMobile = mobiles.filter((m)=>{return m['serial_number'] == serial_number})[1];

   document.getElementById("current_client").innerHTML= selectedMobile.current_client;
   document.getElementById("type_of_device").innerHTML =selectedMobile.type_of_device;
   document.getElementById("manufacturer").innerHTML =selectedMobile.manufacturer;
   document.getElementById("make").innerHTML= selectedMobile.make;
   document.getElementById("model").innerHTML=selectedMobile.model;
   document.getElementById("os").innerHTML = selectedMobile.os;
   document.getElementById("date_of_purchase").innerHTML= selectedMobile.date_of_purchase;
   
   document.getElementById("device_id").innerHTML= selectedMobile.device_id;
   document.getElementById("serial_number").innerHTML= selectedMobile.serial_number;
   document.getElementById("server_connected").innerHTML=selectedMobile.server_connected
   document.getElementById("status").innerHTML = selectedMobile.status;
   document.getElementById("ip_address").innerHTML= selectedMobile.ip_address;
   document.getElementById("description").innerHTML=selectedMobile.description;
   document.getElementById("phno").innerHTML= selectedMobile.phno;
 
    
 
 }









//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('tab').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("type_of_device").value="";

    document.getElementById("manufacturer").value="";

    document.getElementById("make").value="";

    document.getElementById("model").value="";

    document.getElementById("os").value="";

    document.getElementById("date_of_purchase").value="";

    document.getElementById("current_client").value="";

    document.getElementById("device_id").value="";

    document.getElementById("serial_number").value="";

    document.getElementById("status").value="";

    document.getElementById("ip_address").value="";

    document.getElementById("description").value="";

    document.getElementById("phno").value="";
    selectedRow = null;
}

function editsaveBtn(){

    
    let payload={};
    //let type= document.getElementById("type_of_device");
    //console.log(type)
    payload["type_of_device"] = document.getElementById("type_of_device1").value;

    payload["manufacturer"] = document.getElementById("manufacturer1").value;

    payload["make"] = document.getElementById("make1").value;

    payload["model"] = document.getElementById("model1").value;

    payload["os"] = document.getElementById("os1").value;

    payload["date_of_purchase"] = document.getElementById("date_of_purchase1").value;

    payload["current_client"] = document.getElementById("current_client1").value;

    payload["device_id"] = document.getElementById("device_id1").value;

    payload["serial_number"] = document.getElementById("serial_number1").value;

    payload["server_connected"] = document.getElementById("server_connected1").value;

    payload["status"] = document.getElementById("status1").value;

    payload["ip_address"] = document.getElementById("ip_address1").value;

    payload["description"] = document.getElementById("description1").value;

    payload["phno"] = document.getElementById("phno1").value;

    fetch("http://localhost:8080/mobile",{

        method:"PUT",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify(payload)



    }).then((res)=>res.json()).then((response)=>{
        
        document.getElementById("message").innerHTML = response.message

       
       

}) 
window.location.reload();


}*/

let saveBtn = document.querySelector('.save');
let cancelBtn =  document.querySelector('.cancel');
let form = document.querySelector('.form-wrapper');
var editFormData;

cancelBtn.onclick=function(){
    form.classList.remove('active')
}

// hideForm(){
//     let cancelBtn =  document.querySelector('.cancel');
//     cancelBtn.onclick=function(){
//         form.classList.remove('active');
//     }
// }

function getFormData() {
    return {

        id: document.getElementById("id").value,

        current_client: document.getElementById("current_client").value,

        date_of_purchase: document.getElementById("date_of_purchase").value,

        description: document.getElementById("description").value,

        device_id: document.getElementById("device_id").value,

        ip_address: document.getElementById("ip_address").value,

        make: document.getElementById("make").value,

        manufacturer: document.getElementById("manufacturer").value,

        model: document.getElementById("model").value,

        os: document.getElementById("os").value,

        phno: document.getElementById("phno").value,

        serial_number: document.getElementById("serial_number").value,

        server_connected: document.getElementById("server_connected").value,

        status: document.getElementById("status").value,

        type_of_device: document.getElementById("type_of_device").value,

       

    }

}
function clearFormData() {


        document.getElementById("id").value = "";
    
        document.getElementById("type_of_device").value="";

        document.getElementById("manufacturer").value="";

        document.getElementById("make").value="";

        document.getElementById("model").value="";

        document.getElementById("os").value="";

        document.getElementById("date_of_purchase").value="";

        document.getElementById("current_client").value="";

        document.getElementById("device_id").value="";

        document.getElementById("serial_number").value="";

        document.getElementById("status").value="";

        document.getElementById("ip_address").value="";

        document.getElementById("description").value="";

        document.getElementById("phno").value="";

}

function setFormData(id,current_client, date_of_purchase, description, device_id, ip_address, make, manufacturer, model, os, phno, serial_number, server_connected, status, type_of_device) {


    document.getElementById("id").value = id;

    document.getElementById("current_client").value = current_client;

    document.getElementById("date_of_purchase").value = date_of_purchase;

    document.getElementById("description").value = description;

    document.getElementById("device_id").value = device_id;

    document.getElementById("ip_address").value = ip_address;

    document.getElementById("make").value = make;

    document.getElementById("manufacturer").value = manufacturer;

    document.getElementById("model").value = model;

    document.getElementById("os").value = os;

    document.getElementById("phno").value = phno;

    document.getElementById("serial_number").value = serial_number;

    document.getElementById("server_connected").value = server_connected;

    document.getElementById("status").value = status;

    document.getElementById("type_of_device").value = type_of_device;

    

}
function setSuccessMessage(message) {
    document.getElementById("message").innerHTML = message;
}

function add(){

    form.classList.add('active');
    

}

function editDatacall(id) {

    form.classList.add('active');
    console.log(serial_number);
    // call get user details by id API
    fetch("http://54.184.110.5:8080/mobile/" + id, {
        method: "GET",
        mode: "cors",
    }).then((res) => res.json()).then((response) => {
        console.log("Edit info", response);
        editFormData = response;
        console.log(editFormData);
        setFormData(editFormData.id,editFormData.current_client, editFormData.date_of_purchase, editFormData.description, editFormData.device_id, editFormData.ip_address, editFormData.make, editFormData.manufacturer, editFormData.model, editFormData.os, editFormData.phno, editFormData.serial_number, editFormData.server_connected, editFormData.status, editFormData.type_of_device)

    })
}

function submitForm() {
    if (!editFormData){
        addMobile(); // if the editFormData is undefined then call addUser()

    } 
    else editData();
}

function addMobile() {
    


    //form.classList.add('active');
    let payload = getFormData();
     fetch("http://54.184.110.5:8080/postmobile", {
         method: "POST", mode: "cors",
         headers: {
            "Content-Type": "application/json"
        }, 
         body: JSON.stringify(payload)
     }).then((res) => res.json()).then((response) => {
        debugger
         setSuccessMessage(response.message)
         // clear input email and name
         clearFormData();
         cancelBtn.onclick=function(){
            form.classList.remove('active')
        }
        //  form.classList.remove('active')
         getData();
         
     })
     

   
}



function editData() {

    
    var formData = getFormData();
    formData['id'] = editFormData.id; // get _id from selected user
    fetch("http://54.184.110.5:8080/putmobile",  {
        method: "PUT", mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }).then((res) => res.json()).then((response) => {
        setSuccessMessage(response.message)
        clearFormData(); // clear the form field
        getData() // reload the table
    })
}

function getData() {
    fetch("http://54.184.110.5:8080/mobile").then(
        (res) => res.json()
    ).then((response) => {
        var tmpData = "";
        console.log(response);
        response.forEach((user) => {
            tmpData += "<tr>"
            tmpData += "<td>" + user.id + "</td>";
            tmpData += "<td>" + user.current_client + "</td>";
            tmpData += "<td>" + user.date_of_purchase + "</td>";
            tmpData += "<td>" + user.description + "</td>";
            tmpData += "<td>" + user.device_id + "</td>";
            tmpData += "<td>" + user.ip_address + "</td>";
            tmpData += "<td>" + user.make + "</td>";
            tmpData += "<td>" + user.manufacturer + "</td>";
            tmpData += "<td>" + user.model + "</td>";
            tmpData += "<td>" + user.os + "</td>";
            tmpData += "<td>" + user.phno + "</td>";
            tmpData += "<td>" + user.serial_number + "</td>";
            tmpData += "<td>" + user.server_connected + "</td>";
            tmpData += "<td>" + user.status + "</td>";
            tmpData += "<td>" + user.type_of_device + "</td>";
            tmpData += "<td><button class='btn btn-primary' onclick='editDatacall(`" + user.id + "`)'>Edit</button></td>";
            //tmpData += "<td><button class='btn btn-danger' onClick='onDelete(this)'>Delete</button></td>";
            tmpData += "</tr>";
        })
        document.getElementById("taData").innerHTML = tmpData;
    })
}
getData();







