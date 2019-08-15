import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Bar from './bar'

class Device extends Component{
  constructor(){
    super();
    this.state = {Device: []}
  }


  componentWillMount(){
    this.getDevice();
  }


  getDevice(){
    axios.get('http://localhost:3000/api/Devices')
      .then(response => {
        this.setState({Device: response.data}, () => {          
        })
    })
    .catch(err => console.log(err));
  }
    render(){
   
      const DeviceItems = this.state.Device.map((device, i) =>{
        return(           
    

     
<TableBody>        
<TableRow>             
  <TableCell align="left">{device.id}</TableCell>
  <TableCell align="right">{device.serialnumber}</TableCell>
  <TableCell align="right">{device.userid}</TableCell>
  <TableCell align="right">{device.created}</TableCell>
  <TableCell align="right">
    <Link to={`/device/edit/${device.id}`} ><i className="fa fa-edit"></i>&nbsp;Edit</Link>&nbsp;&nbsp;
    <Link to={`/user`}  ><i className="fa fa-trash"></i>&nbsp;Delete</Link>
  </TableCell>
</TableRow>          
</TableBody>

        )
      })
        return (     
       <div> 
            <div class="col s2">
           <Bar />
          </div> 
      <div class="col s9">  
       <h4>Device  <Link to="/device/add" className="right btn green"> Add </Link> </h4> 
      
      
      
         
       
        <Paper >
      <Table>
        <TableHead>
          <TableRow>           
            <TableCell align="left">ID</TableCell>
            <TableCell align="right">serialnumber</TableCell>
            <TableCell align="right">usename</TableCell>
            <TableCell align="right">created</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
           </TableHead>
           {DeviceItems}
          </Table>
       </Paper>

            
          
       </div>    
       </div>      
        )
  }
}

export default Device;
