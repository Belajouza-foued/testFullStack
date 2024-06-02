import { Component } from "react";
import CourDataService from "../services/cour.service";
import {crudRouter} from "../Crud-router";
class EditCours extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);   
        this.onChangePlace = this.onChangePlace.bind(this);               
        this.editCour = this.editCour.bind(this); 
        this.getCour = this.getCour.bind(this);    
            this.state = {
                selectCour : {
                    id: null,        
                    name:"",
                    place:"",
                                }              

        };
      }
      componentDidMount(){
        this.getCour(this.props.router.params.id)
      }
   onChangeName(e) {
    const name = e.target.value;
    this.setState(function(prevState){
        return{
            selectCour :{
...prevState.selectCour,
name:name,
            }
        }
    })
   }  
   onChangePlace(e) {
    const place = e.target.value;
    this.setState(function(prevState){
        return{
            selectCour :{
...prevState.selectCour,
place:place,
            }
        }
    })
   }  
   
   //get admin by id// 
   getCour(id) {
    CourDataService.get(id)
    .then(response =>{this.setState({
      selectCour :response.data,
    });
  console.log (response.data);
  
  })
  .catch(err => {
    console.log (err);
  })
  
  }
  //function update admin//
  editCour(){
    CourDataService.update(
this.state.selectCour.id,
this.state.selectCour
    )
    .then(response => {
        console.log(response.data);
        this.props.router.navigate('/cour')
    })
    .catch(err =>{
        console.log(err);        
    });
  }
  render() {
    const { selectCour } = this.state;
    return(
<div>
{selectCour ? (
        <div className="container">
            <div className="row">                
<div className="col-4">
<input type="text" className="form-control" id="name" value={selectCour.name}
 onChange={this.onChangeName}/>
</div>
<div className="col-4">
<input type="text" className="form-control" id="place" value={selectCour.place}
 onChange={this.onChangePlace}/>
</div>
<div className="col-12">
    <button className="btn btn-success" onClick={this.editCour}>Edit Cours</button>
</div>
            </div>        
        </div>
        ):(
    <h1>cour modified</h1>      
    )};
</div>

    )
  }
}
export default crudRouter(EditCours);