import React, { Component } from "react";
import RoleDataService from "../services/role.service";
export default class AddRole extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
             

        this.saveNewRole = this.saveNewRole.bind(this);
        this.newRole = this.newRole.bind(this);
    
        this.state = {
          id: null,
        
          name:"",         
          
          submitted: false

        };
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      } 
          
      saveNewRole() {
        var data = {
          name: this.state.name,        
                  };
    
        RoleDataService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,        
              name:response.data.name,                         
              
              submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }    
    
      newRole() {
        this.setState({
            id: null,        
            name:"",            
                      submitted: false
        });
      }
render() {
  return (
    <div className="submit-form">
      {this.state.submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={this.newRole}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="nom">nom</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={this.state.name}
              onChange={this.onChangeName}
              name="name"
            />
          </div>
          <button onClick={this.saveNewRole} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
}

