import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import   '../pages/styles/ListCours.css';
import { Component } from 'react';
import CourDataService from '../services/cour.service';
export default class ListCour extends Component{
  constructor (props) {
    super (props);
    //input search admin
    this.onchangeSearchName = this.onchangeSearchName.bind(this);
    //get all admins
    this.getCours = this.getCours.bind(this);
    //activ admin
    this.setActiveCour = this.setActiveCour.bind(this);
    //actualiser la page   
    this.refreshListCour = this.refreshListCour.bind(this);
    //afficher list adminpar nom
    this.searchByName = this.searchByName.bind(this);
    this.deleteAllCour = this.deleteAllCour.bind(this);



this.state = {
  cours: [],
  searchName: "",
  courCourant: null,
  index: -1
};

  }
componentDidMount(){
    this.getCours();
}
  onchangeSearchName(e) {
    const searchName =e.target.value;
    this.setState({
      searchName:searchName,
    });    
  }
getCours () {
  CourDataService.getAll ()
  .then(response =>{this.setState({
    cours :response.data,
  });
console.log (response.data);

})
.catch(err => {
  console.log (err);
})

}
refreshListCour() {
  this.getCours ();
  this.setState ({
    courCourant: null,
    index: -1
  })
}
setActiveCour(cour , index) {  
  this.setState({
  courCourant : cour,
  index : index
});
}
searchByName(){
    CourDataService.findByTitle(this.state.searchName)
    .then(response => {
        this.setState({
            cours: response.data

        }); 
        console.log(response.data)
    })
    .catch(err=>{
        console.log(err);
    });
}
deleteAllCour(){
  CourDataService.deleteAll()
  .then(response => {
    console.log(response.data);
    this.refreshListCour();
  })
  .catch(e => {
    console.log(e)
  });
}


render () {
  const {searchName , cours, courCourant , indexCourant }= this.state; 
  return ( 
    <>
 <div className="container-fluid">
   <div className="row">
    <div className="col-3">
    < Link to={'/addCour'}className='btn btn-success btn-position me-4'>Add new cour</Link>
    < button className='btn btn-danger btn-position' onClick={this.deleteAllCour}>Delete all cours</button>
    </div>
    <div className='col-9'>
      
    <div className="input-group">
        <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchName} onChange={this.onchangeSearchName}/>
        <button className="btn btn-outline-success" type="submit" onClick={this.searchByName} >Search</button>
      </div>
    </div>
     <div className="col-12">
       <h1>Cour list</h1>                
       <table className="table align-middle mb-0 bg-white">
       <thead className="bg-light">
 <tr>   
   <th>Name</th>
   <th>place</th>  
   <th>update</th>
   <th>delete</th>
  </tr>
</thead>
<tbody>
  {cours && cours.map((
    cour, index)=>(    // eslint-disable-next-line no-unused-vars

 <tr className={+(indexCourant === courCourant ? "active": "")} onClick={() => this.setActiveCour(cour, index)} key={index}>  
   
   <td>
    <p>{cour.name}</p>
    </td>  
    <td>
    <p>{cour.place}</p>
    </td>   
       
<td>
     <Link to={"/cour/"+ cour.id} type="button" className="btn btn-warning">
       Edit
     </Link>
   </td>
   <td>
     <Link to={"/cour/"+ cour.id} type="delete" className="btn btn-danger">
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
    
  


