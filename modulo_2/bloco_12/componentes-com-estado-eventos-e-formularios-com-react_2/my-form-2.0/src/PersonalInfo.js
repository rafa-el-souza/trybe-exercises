import { Component } from 'react';

class PersonalInfo extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nome: '',
      email: '',
    }
  }
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    })
  }
  render() {
    return (
      <fieldset>
        <input 
          type="text" 
          name="nome" 
          value={this.state.nome} 
          onChange={this.handleChange}
          maxLength="40"
          required
        />
        <input 
          type="text" 
          name="email" 
          value={this.state.email} 
          onChange={this.handleChange}
          maxLength="50"
          required
        />
      </fieldset>
    )
  }
}

export default PersonalInfo