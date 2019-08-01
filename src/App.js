import React,{Component} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css'; 
import icon from './icon.png';
import Dashboard from './Dashboard'

import loginicon from './login2.png';
import './App.css';
class login extends Component {
render() {
  return (
    //JSX must have one parent element only
    <div className="login-bg"> 
    <Dashboard />
     <div id="pop-up" className="pop-up">  
    <div className="header">
      <table class="header-tab">
        <tr> 
          <td><img className="img-logo" src={icon} alt="img logo"></img></td>
          <td><h2>WELCOME TO CITY & COUNTY OF SAN FRANCISCO PORTAL</h2></td>
        </tr>
      </table>
     
    </div>
   
    <div id="policy" className="policy">
      <p><strong>I agree to the City & County of San Francisco's System Use and Privacy Policy</strong>
<br></br>This is a City & County of San Francisco computer system, 
which may be accessed and used only for official Government 
business by authorizedpersonnel. You are advised to read the 
Privacy Policy regarding the personally identifiable information 
that we collect, maintain, and use. Unauthorized access or use of the 
computer system may subject violators to criminal, civil, and/or administrative 
action in compliance with federal, state and local laws, regulations and 
policies. All information on this computer system may be intercepted, recorded,
 read, copied and disclosed by and to authorized personnel for official 
 purposes, including criminal investigations. Access or use of this computer 
 system by any person whether authorized or unauthorized constitutes consent 
 to these terms.</p>
</div>
<div id="agreebtn-css" className="agreebtn-css">
 <button className="btn" onClick={this.showLogin}>I Agree</button>
 </div>
    <div id="login-css" className="login-css">
      
      <form action=""method="Get">
        <img className="loginIcon-css" src={loginicon} alt="Icon" />
        <table>
          <tr> 
            <label for="uname">Username</label>
            <input type="text" className="uname" id="uname" autoFocus="on" required/>
          </tr>
          <tr> 
            <label for="pass">Password</label> 
            <input type="password" className="pass" id="pass" required/>
          </tr>
          <tr>
          
            <input className="form-btn" type="Submit" value="Update"></input>
            <input className="form-btn" type="Submit" onClick={this.hideDiv} value="Sign In"></input>
          
          </tr>
        </table>
      </form>
    </div>
  </div>
</div>
  );
}
 showLogin() {
  // <div><h2>Blah Blah</h2></div>
  
  document.getElementById('login-css').style.visibility='visible';
  document.getElementById('policy').style.visibility='hidden';
  document.getElementById('pop-up').style.height='358px';
  document.getElementById('agreebtn-css').style.visibility='hidden';
  //document.createElement.div.value=<h1>Hi</h1>;
}
hideDiv()
  {
    document.getElementById('testingPage').style.visibility='visible';
    document.getElementById('pop-up').style.visibility='hidden';

  }
  
verify() {
  // <div><h2>Blah Blah</h2></div>
  var getname=document.getElementsByClassName('uname');
  var getpass=document.getElementsByClassName('pass');
  if (getname==="Hassan" && getpass==="12345")
  {
    alert("Login Credentials Matched ... \n Welcome to our system");
  }
  else 
  {
    alert("Login Credentials Not Matched ... \n Try Again");
  }

  
}

}
export default login;
