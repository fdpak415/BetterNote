import React from 'react';
import {Link, withRouter} from 'react-router';

class AuthForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this._redirectIfLoggedIn();
  }

  _redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  renderErrors() {
    return (
      <div>
        <ul>
          {this.props.errors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      </div>
    )
  }

  update(property) {
    return e => {
      e.preventDefault();
      this.setState({[property]: e.currentTarget.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state
    this.props.processForm({user});
  }

  navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">Sign Up</Link>;
		} else {
			return <Link to="/login">Log In</Link>;
		}
	}



  render() {
    const {formType, processForm} = this.props;
    let button = null;
      if (this.props.formType === "signup") {
        button = <input
          type="submit"
          value={"SIGN UP FOR FREE"}></input>;
      } else {
        button = <input
          type="submit"
          value={"LOGIN"}></input>;
      }
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        <input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.update('email')}>
        </input>

        <input
          type="text"
          placeholder="Password"
          value={this.state.password}
          onChange={this.update('password')}>
        </input>

        {button}

        {this.navLink()}


      </form>
    )
  }
}


export default withRouter(AuthForm);
