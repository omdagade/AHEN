var uname;
var upass;
var uemail;
var lname;
var lpass;

function signclick(){
    uname=document.getElementById('uname').value
    upass=document.getElementById('upass').value
    uemail=document.getElementById('uemail').value
    
    if (uname!=="" && upass!=="" && uemail!==""){
        localStorage.setItem(uname,JSON.stringify(uname+'-'+upass+'-'+uemail))
        alert("REGISTRATION SUCCESSFUL")
    }
}

function loginclick(){
    
    lname=document.getElementById('lname').value;
    
    lpass=document.getElementById('lpass').value;
    const arr=localStorage.getItem(lname).split("-");
    if(arr[1]==lpass){
        document.getElementById('body2').style.display='block';
        document.getElementById('main1').style.display='none';
        homeload();
        
    }
    else{
        alert("WRONG PASSWORD");
    }
    
}

function homeload(){
    document.getElementById('uname1').innerHTML=lname.toUpperCase()+"!!!";
}

function homeclick(){
    document.getElementById('body2').style.display='none';
    document.getElementById('main1').style.display='block';
}



