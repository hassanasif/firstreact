import React,{Component} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css'; 
import profilepic from './images/profi.png';
import icon from './icon.png';
import './App.css';
import './Dashboard.css';
import Apptiles from './myApps';
import Profile from './Profile';
import UpdatePassword from './UpdatePassword';
import EmailOptions from './EmailOptions';
class Dashboard extends Component{
    constructor() {
        super();   
        this.state = {
            str: "Hassan",
           str2: "Asif"
        };
    }
    render() {
        return (
            <div id="testingPage" >
                
                <div className="row">
                    <div className="col-sm-3">
                        <div class="row">
                            <div class="card">
                                <img src={profilepic} alt="John" />
                                <h1>{this.state.str}  {this.state.str2}</h1>
                                <h5>DT INTERN</h5>
                            </div>
                        </div>
                        <div class="row">
                            <ul class="nav navbar-nav nav-tabs" role="tablist">
                            
                                        <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#" onClick={this.showmyApp}>My Apps</a>
                                        </li> 
                                        <li  className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#" onClick={this.showProfile}>Profile Details</a>
                                        </li>
                                        <li  className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#" onClick={this.showUpdatePass}>Change Password</a>
                                        </li> 
                                        
                                        <li className="nav-item">
                                        <a className="nav-link active " data-toggle="tab" href="#" onClick={this.showEmailOptions}>Email Options</a>
                                        </li> 
                                        <li className="nav-item">
                                        <a className="nav-link active " data-toggle="tab" href="#menu2">2-Step Verification</a>
                                        </li> 
                                        <li className="nav-item">
                                        <a className="nav-link active " data-toggle="tab" href="#menu2">Help</a>
                                        </li> 
                                        <li className="nav-item">
                                        <a className="nav-link active " data-toggle="tab" href="#menu2">Logout</a>
                                        </li> <br /> <br /><br /><br /> <br />
                            </ul>
                                    
                        </div>
                    </div>
                    <div className="col-sm-9"> 
                        <div className="row">
                            <img className="img-logo" src={icon} alt="img logo"></img>
                            <title> Welcome to San Francisco  City Portal</title> 
                            <h1 class="title">Welcome to San Francisco <br />City Portal</h1>
                        </div>
         
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="alert alert-primary">
                                    <strong>Success!</strong> You should <a href="#huiva" className="alert-link">read this message</a>.  
                                </div> 
                             </div> 
                             <div className="col-sm-4">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Search"/>
                                    <div class="input-group-append">
                                        <button class="" type="submit">Search</button> 
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                        <div className="row" >
                            <div className="tab-content">
                                
                                <div id="myApp" className="container tab-pane active">
                                <Apptiles />
                                </div>
                                <div id="profileDT" className="container tab-pane active">
                                <Profile />
                                </div>
                                <div id="updatePass" className="container tab-pane active">
                                <UpdatePassword />
                                </div>
                                <div id="emailOptions" className="container tab-pane active">
                                <EmailOptions />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        );  
    }
    showin() {
        // <div><h2>Blah Blah</h2></div>
        document.getElementById('login-css').style.visibility='hidden';
        document.getElementById('policy').style.visibility='hidden';
       // document.getElementById('pop-up').style.visibility='hidden';
        document.getElementById('agreebtn-css').style.visibility='hidden';
        //document.createElement.div.value=<h1>Hi</h1>;
      }     
      showmyApp() {
    
        document.getElementById('myApp').style.visibility='visible';
        document.getElementById('profileDT').style.visibility='hidden';
        document.getElementById('updatePass').style.visibility='hidden';
        document.getElementById('emailOptions').style.visibility='hidden';
        
      }     
      showProfile()
      {
        document.getElementById('profileDT').style.visibility='visible';
        document.getElementById('myApp').style.visibility='hidden';
        document.getElementById('updatePass').style.visibility='hidden';
        document.getElementById('emailOptions').style.visibility='hidden';
      }
      showUpdatePass()
      {
        document.getElementById('profileDT').style.visibility='hidden';
        document.getElementById('myApp').style.visibility='hidden';
        document.getElementById('updatePass').style.visibility='visible';
        document.getElementById('emailOptions').style.visibility='hidden';
      }
      showEmailOptions()
      {
        document.getElementById('profileDT').style.visibility='hidden';
        document.getElementById('myApp').style.visibility='hidden';
        document.getElementById('updatePass').style.visibility='hidden';
        document.getElementById('emailOptions').style.visibility='visible';
      }
    
}

export default Dashboard;