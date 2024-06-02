import { Component } from "react";
import RoleDataService from "../services/role.service";
import {crudRouter} from "../Crud-router";
class EditRoles extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);                 
        this.editRole = this.editRole.bind(this); 
        this.getRole = this.getRole.bind(this);    
            this.state = {
                selectRole : {
                    id: null,        
                    name:"",
                                }              

        };
      }
      componentDidMount(){
        this.getRole(this.props.router.params.id)
      }
   onChangeName(e) {
    const name = e.target.value;
    this.setState(function(prevState){
        return{
            selectRole :{
...prevState.selectRole,
name:name,

            }
        }
    })
   }  
   
   
   //get admin by id// 
   getRole(id) {
    RoleDataService.get(id)
    .then(response =>{this.setState({
      selectRole :response.data,
    });
  console.log (response.data);
  
  })
  .catch(err => {
    console.log (err);
  })
  
  }
  //function update admin//
  editRole(){
    RoleDataService.update(
this.state.selectRole.id,
this.state.selectRole
    )
    .then(response => {
        console.log(response.data);
        this.props.router.navigate('/role')
    })
    .catch(err =>{
        console.log(err);        
    });
  }
  render() {
    const { selectRole } = this.state;
    return(
<div>
{selectRole ? (
        <div className="container">
            <div className="row">                
<div className="col-4">
<input type="text" className="form-control" id="name" value={selectRole.name}
 onChange={this.onChangeName}/>
</div>
<div className="col-12">
    <button className="btn btn-success" onClick={this.editRole}>Edit Role</button>
</div>
            </div>        
        </div>
        ):(
    <h1>role modified</h1>      
    )};
</div>

    )
  }
}
export default crudRouter(EditRoles);