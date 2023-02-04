var uname;
var upass;
var uemail;
var lname;
var lpass;
var bemail;
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
    document.getElementById('mybookings').style.display='none'
}

function homeclick(){
    document.getElementById('body2').style.display='block';
    document.getElementById('hide').style.display='block';
    document.getElementById('mybookings').style.display='none';
    document.getElementById('bookingpage1').style.display='none';
    document.getElementById('bookingpage2').style.display='none';
    document.getElementById('bookingpage3').style.display='none';
    document.getElementById('bookingpage4').style.display='none';
    document.getElementById('drivingpage').style.display='none';
    
}


function booknowclick(){
    document.getElementById('hide').style.display='none';
    document.getElementById('drivingpage').style.display='block';
    document.getElementById('mybookings').style.display='none';
}

//----------------------------------------------------------------------------------------------
function schoolclick1(){
    
    document.getElementById('drivingpage').style.display='none';
    document.getElementById('bookingpage1').style.display='block';
    document.getElementById('bookingpage2').style.display='none';
    document.getElementById('bookingpage3').style.display='none';
    document.getElementById('bookingpage4').style.display='none';
    document.getElementById('mybookings').style.display='none';
}

function schoolclick2(){
    
    document.getElementById('drivingpage').style.display='none';
    document.getElementById('bookingpage2').style.display='block';
    document.getElementById('bookingpage1').style.display='none';
    document.getElementById('bookingpage3').style.display='none';
    document.getElementById('bookingpage4').style.display='none';
    document.getElementById('mybookings').style.display='none';
}

function schoolclick3(){
    
    document.getElementById('drivingpage').style.display='none';
    document.getElementById('bookingpage3').style.display='block';
    document.getElementById('bookingpage2').style.display='none';
    document.getElementById('bookingpage1').style.display='none';
    document.getElementById('bookingpage4').style.display='none';
    document.getElementById('mybookings').style.display='none';
}

function schoolclick4(){
    
    document.getElementById('drivingpage').style.display='none';
    document.getElementById('bookingpage4').style.display='block';
    document.getElementById('bookingpage2').style.display='none';
    document.getElementById('bookingpage3').style.display='none';
    document.getElementById('bookingpage1').style.display='none';
    document.getElementById('mybookings').style.display='none';
}

function booknow1(){
    if (document.getElementById('datbook1').value!=''){
        if(document.getElementById('timebook1').value!=''){
            var datae=document.getElementById('datbook1').value;
            var timee=document.getElementById('timebook1').value;
            var bookid=localStorage.getItem(lname).split('-');
            bemail=bookid[2];
            var sname=document.getElementById('o1').innerText;
            localStorage.setItem(bemail,JSON.stringify(sname+'*'+datae+'*'+timee))
            alert('BOOKING SUCCESSFUL')
            document.getElementById('bookingpage1').style.display='none';
            document.getElementById('hide').style.display='block';
            
        }
        else{
            alert('ENTER ALL DETAILS')
        }
    }
    else{
        alert('ENTER ALL DETAILS')
    }
}


function booknow2(){
    if (document.getElementById('datbook2').value!=''){
        if(document.getElementById('timebook2').value!=''){
            var datae=document.getElementById('datbook2').value;
            var timee=document.getElementById('timebook2').value;
            var bookid=localStorage.getItem(lname).split('-');
            bemail=bookid[2];
            var sname=document.getElementById('o2').innerText;
            localStorage.setItem(bemail,JSON.stringify(sname+'*'+datae+'*'+timee))
            alert('BOOKING SUCCESSFUL')
            document.getElementById('bookingpage2').style.display='none';
            document.getElementById('hide').style.display='block';
            
        }
        else{
            alert('ENTER ALL DETAILS')
        }
    }
    else{
        alert('ENTER ALL DETAILS')
    }
}

function booknow3(){
    if (document.getElementById('datbook3').value!=''){
        if(document.getElementById('timebook3').value!=''){
            var datae=document.getElementById('datbook3').value;
            var timee=document.getElementById('timebook3').value;
            var bookid=localStorage.getItem(lname).split('-');
            bemail=bookid[2];
            var sname=document.getElementById('o3').innerText;
            localStorage.setItem(bemail,JSON.stringify(sname+'*'+datae+'*'+timee))
            alert('BOOKING SUCCESSFUL')
            document.getElementById('bookingpage3').style.display='none';
            document.getElementById('hide').style.display='block';
            
        }
        else{
            alert('ENTER ALL DETAILS')
        }
    }
    else{
        alert('ENTER ALL DETAILS')
    }
}

function booknow4(){
    if (document.getElementById('datbook4').value!=''){
        if(document.getElementById('timebook4').value!=''){
            var datae=document.getElementById('datbook4').value;
            var timee=document.getElementById('timebook4').value;
            var bookid=localStorage.getItem(lname).split('-');
            bemail=bookid[2];
            var sname=document.getElementById('o4').innerText;
            localStorage.setItem(bemail,JSON.stringify(sname+'*'+datae+'*'+timee))
            alert('BOOKING SUCCESSFUL')
            document.getElementById('bookingpage4').style.display='none';
            document.getElementById('hide').style.display='block';
            
        }
        else{
            alert('ENTER ALL DETAILS')
        }
    }
    else{
        alert('ENTER ALL DETAILS')
    }
}

//---------------------------------------------------------------------------------------------



var bkng4;
var bkng3;
function mybookings(){
    document.getElementById('hide').style.display='none';
    document.getElementById('mybookings').style.display='block';
    var bkng1= localStorage.getItem(lname).split('-');
    var bkng2=bkng1[2];
    bkng4=localStorage.getItem(bkng2);
    bkng3=JSON.parse(bkng4).split('*');
    document.getElementById('bking1').innerHTML=bkng3[0];
    document.getElementById('bking2').innerHTML=(bkng3[1]);
    document.getElementById('bking3').innerHTML=(bkng3[2]);

}

function deleteclick(){
    var de1=localStorage.getItem(lname).split('-');
    var de2=de1[2];
    localStorage.removeItem(de2);
    
    
    alert('BOOKING DELETED SUCCESSFULLY')
    document.getElementById('mybookings').style.display='none';
    document.getElementById('hide').style.display='block';
    document.getElementById('bking1').innerHTML="NO BOOKINGS";
    document.getElementById('bking2').innerHTML=" ";
    document.getElementById('bking3').innerHTML=" ";
}