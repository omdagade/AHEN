
function signclick(){
    let uname=document.getElementById('uname').value
    let upass=document.getElementById('upass').value
    let uemail=document.getElementById('uemail').value
    
    if (uname!=="" && upass!=="" && uemail!==""){
        localStorage.setItem(uname,JSON.stringify(uname+'-'+upass+'-'+uemail))
        alert("REGISTRATION SUCCESSFUL")
    }
}

function loginclick(){
    
    let lname=document.getElementById('lname').value
    let lpass=document.getElementById('lpass').value
    const arr=localStorage.getItem(lname).split("-")
    if(arr[1]==lpass){
        location.replace('home.html')
    }
    else{
        alert("WRONG PASSWORD")
    }
    

}