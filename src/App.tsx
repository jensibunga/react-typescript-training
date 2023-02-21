import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

type Props = {}
type State = {
  email: string
  password: string
  confirm_password: string
  is_email_touched: boolean
  is_checked: boolean
  is_password_touched: boolean
  is_confirm_password_touched: boolean

}
class SignupForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      is_email_touched: false,
      is_checked: false,
      is_password_touched: false,
      is_confirm_password_touched: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

  }
  render() {
    return (
      <>
        <h1>Sign up Form</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label" >Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={this.state.email}  />
            {this.state.is_email_touched &&  <span className="error">Password character should be more than 7 characters </span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input className="form-control" value={this.state.password} type={this.state.is_checked ? "text" : "password"} placeholder="Password" name="password" required onChange={(e) => {
              this.setState({ password: e.target.value, is_password_touched: true })
            }} />
            {this.state.is_password_touched && this.state.password.length < 7 && <span className="error">Password character should be more than 7 characters </span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Confirm Password</label>

            <input className="form-control" value={this.state.confirm_password} type="password" placeholder="Confirm Password" name="confirm-password" required onChange={(e) => {
              this.setState({ confirm_password: e.target.value, is_confirm_password_touched: true })

            }} />
            {this.state.is_confirm_password_touched && this.state.confirm_password.length < 7 && <span className="error">Password character should be more than 7 characters </span>}
            {this.state.password !== this.state.confirm_password && <span className="error">Password does not match </span>}
          </div>
          <div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Terms and Conditions
              </label>
            </div>

          </div>
          <div className="mb-3">
            <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>





      </>




    )
  }
}
function App() {
  return (
    <div className='container'>
      <SignupForm />
    </div>
  );
}
export default App;