import React, { Component } from "react";
import CourDataService from "..//services/cour.service";
export default class AddCour extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);           
        this.saveNewCour = this.saveNewCour.bind(this);
        this.newCour = this.newCour.bind(this);
    
        this.state = {
          id: null,
        
          name:"",         
          place:"",
          submitted: false

        };
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      } 
      onChangePlace(e) {
        this.setState({
          place: e.target.value
        });
      } 
          
      saveNewCour() {
        var data = {
          name: this.state.name,  
          place: this.state.place,   
                  };
    
        CourDataService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,        
              name:response.data.name,                         
              place:response.data.place,  
              submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }    
    
      newCour() {
        this.setState({
            id: null,        
            name:"",
            place:"",            
                      submitted: false
        });
      }
      render() {
        return (
          <div className="submit-form">
            {this.state.submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={this.newCour}>
                  Add
                </button>
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
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
                <div className="form-group">
                  <label htmlFor="place">place</label>
                  <input
                    type="text"
                    className="form-control"
                    id="place"
                    required
                    value={this.state.place}
                    onChange={this.onChangePlace}
                    name="place"
                  />
                </div>
                <button onClick={this.saveNewCour} className="btn btn-success">
                  Submit
                </button>
              </div>
            )}
          </div>
        );
      }
      }
      