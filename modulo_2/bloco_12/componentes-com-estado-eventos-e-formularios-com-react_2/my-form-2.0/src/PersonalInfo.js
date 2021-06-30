import { Component } from 'react';

class PersonalInfo extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
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
        <input 
          type="text" 
          name="cpf" 
          value={this.state.cpf} 
          onChange={this.handleChange}
          maxLength="11"
          required
        />
        <input 
          type="text" 
          name="endereço" 
          value={this.state.endereço} 
          onChange={this.handleChange}
          maxLength="200"
          required
        />
      </fieldset>
    )
  }
}

export default PersonalInfo