import React,{Component} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css'; 
import "./Profile.sass"

class Profile extends Component{
   
    render() {
        return (
            
                <div id="profileDiv" className="row">
                    
                    <h3>Profile Details</h3>
                    <form action=""method="Get">
                        <div className="row">
                        <div className="col-sm-6">
                                <table>
                                    <tr> 
                                        <td>
                                            <label for="username">Username</label>
                                        </td>
                                        <td>
                                            <input type="text" className="username" id="username" autoFocus="on" required/> 
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>
                                            <label for="fname">First Name</label> 
                                        </td>
                                        <td>
                                            <input type="text" className="fname" id="fname" required/>
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>
                                            <label for="eType">Employee Type</label> 
                                        </td>
                                        <td>
                                            <input type="text" className="eType" id="eType" required/>
                                        </td>
                                    </tr>
                                </table>
                        </div>
                        <div className="col-sm-6">
                    
                                <table>
                                    <tr>
                                        <td>
                                            <label for="email">Email Address</label>
                                        </td>
                                        <td>
                                            <input type="email" className="email" id="email" autoFocus="" required/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="lname">Last Name</label>
                                        </td>
                                        <td>
                                            <input type="text" className="lname" id="lname" autoFocus="" required/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="cnumber">Contact Number</label>
                                        </td>
                                        <td>
                                            <input type="text" className="cnumber" id="cnumber" autoFocus="" required/>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input className="form-btn" type="Submit" value="Save Changes"></input>
                                        </td>
                                    </tr>
                                </table>
                        </div>
                        </div>
                    </form>   
                </div>      
           
        );
    }
}
export default Profile;