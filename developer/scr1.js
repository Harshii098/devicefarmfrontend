var x=document.getElementById("alogin");

var y=document.getElementById("dlogin");

var z=document.getElementById("btn");

function alogin(){

    x.style.left="-400px";

    y.style.left="50px";

    z.style.left="110px";
}

function login1()
{

    var uname = document.getElementById("email").value;

    var pwd = document.getElementById("pwd1").value;

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(uname =='')

    {

        alert("please enter user name.");

    }

    else if(pwd=='')

    {

        alert("enter the password");

    }

    else if(!filter.test(uname))

    {

        alert("Enter valid email id.");

    }

    else if(pwd.length < 5 || pwd.length == 5)

    {

        alert("Password min and max length is 6.");

    }
    else if (uname =='admin@gmail.com' && pwd =='admin1')

    {

        //alert("welcome back")

        window.location.href = "admin.html";

    }
    

       

    

}

function dlogin(){

    x.style.left="50px";

    y.style.left="450px";

    z.style.left="0px";
}

function login2()

{

        var uname = document.getElementById("email").value;

        var pwd = document.getElementById("pwd").value;


        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(uname == null)

    {

        alert("please enter user name.");

    }

    else if(pwd==null)

    {

        alert("enter the password");

    }


    else if(pwd.length < 6 || pwd.length > 6)

    {

        alert("Password min and max length is 6.");

    }
    else if (uname =='developer@gmail.com' && pwd =='123456')

        {

           // alert("welcome back")

            window.location.href ="developer.html";

        }

       

    

}






        