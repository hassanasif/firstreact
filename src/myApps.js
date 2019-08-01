import React,{Component} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css'; 
import tile1 from './images/t1.PNG';
import tile2 from './images/t2.PNG';
import tile3 from './images/t3.PNG';
import tile4 from './images/t4.PNG';
import tile5 from './images/t5.PNG';
import tile6 from './images/t6.PNG';
import tile7 from './images/t7.PNG';
import tile8 from './images/t8.PNG';
import "./Apptiles.scss"

class Apptiles extends Component{
   
    render() {
        return (
                <div id="apptileDiv" className="row">
                    <div className="col-sm-12">
                        <div className="tile1">
                            <img src={tile1} alt="SF Department of Technology" /><br />
                            <label for="tile1">Combined Charity</label>
                        </div>
                        <div className="tile1">
                            <img src={tile2} alt="SF Department of Technology" /><br/>
                            <label for="tile1">Ext-PeopleSoft-iHub</label>
                        </div>
                        <div className="tile1">
                            <img src={tile3} alt="SF Department of Technology"/><br/>
                            <label for="tile1">Office365</label>
                        </div>
                        <div className="tile1">
                            <img src={tile4} alt="SF Department of Technology"/><br/>
                            <label for="tile1">PeopleSoft</label>
                        </div>
                        <div className="tile1">
                            <img src={tile5} alt="SF Department of Technology"/><br/>
                            <label for="tile1">PeopleSoftExt</label>
                        </div>
                        <div className="tile1">
                            <img src={tile6} alt="SF Department of Technology"/><br/>
                            <label for="tile1">PeopleSofttstExp..</label>
                        </div>
                        <div className="tile1">
                            <img src={tile7} alt="SF Department of Technology"/><br/>
                            <label for="tile1">ServiceNow</label>
                        </div>
                        <div className="tile1">
                            <img src={tile8} alt="SF Department of Technology"/><br/>
                            <label for="tile1">SF Content Manager</label>
                        </div>
                        <div className="tile1">
                            <img src={tile8} alt="SF Department of Technology"/><br/>
                            <label for="tile1">SF Content Manager</label>
                        </div>
                    </div>
                </div>      
            
        );
    }
}
export default Apptiles;