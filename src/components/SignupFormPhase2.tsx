import React from 'react';

type Props = {}
type State = {
  email: string
  password: string
  confirm_password: string
  form_submit: boolean
  form_valid: boolean
  show_password: boolean
  accept_terms_condition: boolean
}
export class SignupFormPhase2 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      form_submit: false,
      form_valid: false,
      show_password: false,
      accept_terms_condition: false

    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event: React.SyntheticEvent) {

    event.preventDefault();

    if (this.state.email != '' && this.state.email.includes('@') && this.state.password.length > 7 && this.state.confirm_password == this.state.password) {
      console.log("submit1");
      this.setState({
        form_submit: true,
        form_valid: true
      })
    } else {
      console.log("submit2");
      this.setState({
        form_submit: true,
        form_valid: false
      })
    }

  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Phase 2</h1>
          <div className="mb-3">
            <label htmlFor="email_address" className="form-label" >Email address</label>
            <input type="text" className={`form-control ${this.state.form_submit ? this.state.email.includes('@') ? 'is-valid' : 'is-invalid' : ''}`} id="email_address" placeholder="name@example.com" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
            {this.state.form_submit && !this.state.email.includes('@') && <span className="invalid-feedback">Please add an email address</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input className={`form-control ${this.state.form_submit ? this.state.password.length > 7 ? 'is-valid' : 'is-invalid' : ''}`} value={this.state.password} type={this.state.show_password ? 'text' : 'password'} placeholder="Password" name="password" onChange={(e) => {
              this.setState({ password: e.target.value })
            }} />
            {this.state.form_submit && this.state.password.length < 7 && <span className="error">Password character should be more than 7 characters </span>}
          </div>

          <div className="form-check">

            <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={() => {

              this.setState({
                show_password: !this.state.show_password
              })
            }} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Show Password
            </label>
          </div>


          <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
            <input id="confirm_password" className={`form-control ${this.state.form_submit ? this.state.password.length > 7 && this.state.password == this.state.confirm_password ? 'is-valid' : 'is-invalid' : ''}`} value={this.state.confirm_password} type="password" placeholder="Confirm Password" onChange={(e) => {
              this.setState({ confirm_password: e.target.value })
            }} />
            {this.state.form_submit && this.state.confirm_password.length < 7 && <span className="error">Confirm Password character should be more than 7 characters </span>}
            {this.state.password !== this.state.confirm_password && <span className="error">Password does not match </span>}
          </div>

          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={() => {
                this.setState({
                  accept_terms_condition: !this.state.accept_terms_condition
                })
              }} />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Accept terms and accept_terms_condition!
              </label>
            </div>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" type="submit" disabled={this.state.accept_terms_condition ? false : true}>Submit form</button>
          </div>
        </form>

        {this.state.form_submit &&
          <div className='container'>
            <p> Form has been submitted!</p>
            {!this.state.form_valid && <p>Form Not valid</p>}
          </div>
        }


      </>
    )
  }
}