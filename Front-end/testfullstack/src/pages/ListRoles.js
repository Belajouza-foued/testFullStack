import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import   '../pages/styles/ListRoles.css';
import { Component } from 'react';
import RoleDataService from '../services/role.service.js';
export default class ListRole extends Component{
  constructor (props) {
    super (props);
    //input search admin
    this.onchangeSearchName = this.onchangeSearchName.bind(this);
    //get all admins
    this.getRoles = this.getRoles.bind(this);
    //activ admin
    this.setActiveRole = this.setActiveRole.bind(this);
    //actualiser la page   
    this.refreshListRole = this.refreshListRole.bind(this);
    //afficher list adminpar nom
    this.searchByName = this.searchByName.bind(this);
    this.deleteAllRole = this.deleteAllRole.bind(this);



this.state = {
  roles: [],
  searchName: "",
  roleCourant: null,
  index: -1
};

  }
componentDidMount(){
    this.getRoles();
}
  onchangeSearchName(e) {
    const searchName =e.target.value;
    this.setState({
      searchName:searchName,
    });    
  }
getRoles () {
  RoleDataService.getAll ()
  .then(response =>{this.setState({
    roles :response.data,
  });
console.log (response.data);

})
.catch(err => {
  console.log (err);
})

}
refreshListRole() {
  this.getRoles ();
  this.setState ({
    roleCourant: null,
    index: -1
  })
}
setActiveRole(role , index) {  
  this.setState({
  roleCourant : role,
  index : index
});
}
searchByName(){
    RoleDataService.findByTitle(this.state.searchName)
    .then(response => {
        this.setState({
            roles: response.data

        }); 
        console.log(response.data)
    })
    .catch(err=>{
        console.log(err);
    });
}
deleteAllRole(){
  RoleDataService.deleteAll()
  .then(response => {
    console.log(response.data);
    this.refreshListRole();
  })
  .catch(e => {
    console.log(e)
  });
}


render () {
  const {searchName , roles, roleCourant , indexCourant }= this.state; 
  return ( 
    <>
 <div className="container-fluid">
   <div className="row">
    <div className="col-3">
    < Link to={'/addRole'}className='btn btn-success btn-position me-4'>Add new role</Link>
    < button className='btn btn-danger btn-position' onClick={this.deleteAllRole}>Delete all role</button>
    </div>
    <div className='col-9'>
      
    <div className="input-group">
        <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchName} onChange={this.onchangeSearchName}/>
        <button className="btn btn-outline-success" type="submit" onClick={this.searchByName} >Search</button>
      </div>
    </div>
     <div className="col-12">
       <h1>Role list</h1>
                
       <table className="table align-middle mb-0 bg-white">

<tbody>
  {roles && roles.map((
    role, index)=>(    // eslint-disable-next-line no-unused-vars

 <tr className={+(indexCourant === roleCourant ? "active": "")} onClick={() => this.setActiveRole(role, index)} key={index}>  
   
   <td>
    <p>{role.name}</p>
    </td>  
    
    
    
<td>
     <Link to={"/role/"+ role.id} type="button" className="btn btn-warning">
       Edit
     </Link>
   </td>
   <td>
     <Link to={"/role/"+ role.id} type="delete" className="btn btn-danger">
       Delete
     </Link>
   </td>
 </tr>
 ))}

</tbody>
</table>
     </div>
   </div>
 </div>
</>)
}
  
}
    
  


