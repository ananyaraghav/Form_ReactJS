import React, { Component } from 'react'
import './Form.css'

export class FormComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Name: '',
             Age: '',
             City: '',
             Gender: 'Female'
        }
    }

    handleNameChange = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    handleCityChange = (event) => {
        this.setState({
            City: event.target.value
        })
    }

    handleGenderChange = (event) => {
        this.setState({
            Gender: event.target.value
        })
    }
    handleAgeChange = (event) => {
        this.setState({
            Gender: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.Name} ${this.state.City} ${this.state.Gender}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <div className = 'container'>
                <div className = 'header'>
                    <h2 id='enter'>Enter your Information</h2>
                </div>
                <form onSubmit = {this.handleSubmit}>
                <div className = 'form-control'>
                    <label id = 'name-h' className = 'heading'>Name</label>
                    <input id = 'name' type = 'text' value = {this.state.Name} onChange = {this.handleNameChange}/>
                </div>
                <div className = 'form-control'>
                    <label id = 'age-h' className = 'heading'>Age</label>
                    <input id = 'age' type = 'text' value = {this.state.Age} onChange = {this.handleAgeChange}/>
                </div>
                <div className = 'form-control'>
                    <label id = 'city-h' className = 'heading'>City</label>
                    <input id = 'city' type = 'text' value = {this.state.City} onChange = {this.handleCityChange}/>
                </div>
                <div className = 'form-control'>
                    <label id = 'gender-h' className = 'heading'>Gender</label>
                    <select id = 'gender-box' value = {this.state.Gender} onChange = {this.handleGenderChange}>
                        <option value = 'female'>Female</option>
                        <option value = 'male'>Male</option>
                        <option value = 'other'>Other</option>
                    </select>
                </div>
                <button type='submit' id = 'btn'>SUBMIT</button>
            </form>

            </div>
            
        )
    }
}

export default FormComponent
