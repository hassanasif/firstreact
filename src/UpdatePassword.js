import React,{Component} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css'; 
import "./UpdatePassword.sass"

class UpdatePassword extends Component{
   
    render() {
        return (
            <div className="row" >
                <div className="col-sm-12">
                    <h3>Update Password</h3>
                    <table>
                        <tr>
                            <td>
                                <label for="cPass">Current Password</label>
                             </td>
                             <td>
                                <input type="text" className="cPass" id="cPass" autoFocus="on" required/> 
                             </td>
                        </tr> 
                        <tr> 
                            <td>
                                <label for="nPass">New Password</label> 
                            </td>
                            <td>
                                <input type="text" className="nPass" id="nPass" required/>
                            </td>
                        </tr>
                        <tr> 
                            <td>
                                <label for="rePass">Re-Enter New Password</label> 
                            </td>
                            <td>
                                <input type="text" className="rePass" id="rePass" required/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input className="form-btn" type="Submit" value="Update"></input>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
export default UpdatePassword;