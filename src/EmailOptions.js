import React,{Component} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css'; 

import "./EmailOptions.sass"

class EmailOptions extends Component{
   
    render() {
        return (
                <div id="emailDiv" className="row">
                    <div className="col-sm-6">
                    <table>
                        <th>Primary Email</th>
                        <tr>
                            <td>        
                                <label for="pEmail">Email</label>
                             </td>
                             <td>
                                <input type="email" className="pEmail" id="pEmail" autoFocus="on" required/> 
                             </td>
                        </tr>   
                    </table>
                        <div class="btn-group">
                            <button type="button" className="">Resend Email</button>
                            <button type="button" className="">Set Email</button>
                        </div>
                    </div>
                    <div className="col-sm-6">
                    <table>
                    <th>Recovery Email</th>
                        <tr>
                            <td>
                                <label for="rEmail">Email</label>
                             </td>
                             <td>
                                <input type="text" className="rEmail" id="rEmail" autoFocus="" required/> 
                             </td>
                        </tr> 
                        <tr>
                            <td>
                                <input className="btn btn-success disabled" type="Submit" value="Resend Email"></input>
                            </td>
                            <td>
                                <input className="btn btn-success"  type="Submit" value="Set Email"></input>
                            </td>
                        </tr>
                    </table>
                   
                    </div>        
            </div>
        );
    }
}
export default EmailOptions;