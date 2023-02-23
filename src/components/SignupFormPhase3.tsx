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
  page: 1 | 2 | 3
  street: string
  house_number: string
  postcode: string

}
export class SignupFormPhase3 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      form_submit: false,
      form_valid: false,
      show_password: false,
      accept_terms_condition: false,
      page: 1,
      street: '',
      house_number: '',
      postcode:''


    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitPage1 = this.handleSubmitPage1.bind(this)
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

  handleSubmitPage1(event: React.SyntheticEvent) {
    event.preventDefault();
    if (this.state.email != '' && this.state.email.includes('@') && this.state.password.length > 7 && this.state.confirm_password == this.state.password) {
      this.setState({
        page: 2,
        form_submit: true
      })
    } else {
      this.setState({
        form_submit: true,
        form_valid: false
      })
    }
  }

  handleSubmitPage2(event: React.SyntheticEvent) {
    event.preventDefault();
    if (this.state.street != '' && this.state.house_number != '') {
      this.setState({
        page: 2,
        form_submit: true
      })
    } else {
      this.setState({
        form_submit: true,
        form_valid: false
      })
    }
  }

  handleprev(event: React.SyntheticEvent) {
    event.preventDefault();
    this.setState({
      page: 1
    })


  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Phase 3</h1>
          {this.state.page == 1 &&
            <>
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

              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <button className="page-link" onClick={this.handleSubmitPage1}>Next</button>
                  </li>
                </ul>
              </nav>
            </>

          }

          {this.state.page == 2 &&
            <>
              <div className="mb-3">
                <label htmlFor="street" className="form-label" >Street</label>
                <input type="text" className={`form-control ${this.state.form_submit ? this.state.street ? 'is-valid' : 'is-invalid' : ''}`} id="street" placeholder="Street" onChange={(e) => this.setState({ street: e.target.value })} value={this.state.street} />
                {this.state.form_submit && !this.state.street && <span className="invalid-feedback">Please add street address</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="house_number" className="form-label" >House number</label>
                <input type="text" className={`form-control ${this.state.form_submit ? this.state.house_number ? 'is-valid' : 'is-invalid' : ''}`} id="house_number" placeholder="Street" onChange={(e) => this.setState({ house_number: e.target.value })} value={this.state.house_number} />
                {this.state.form_submit && !this.state.street && <span className="invalid-feedback">Please add house number </span>}
              </div>

              <div className="form-group">
                <label htmlFor="city">Please select your Cityt</label>
                <select className="form-control" id="city">
                  <option>Amsterdam</option>
                  <option>Den Haag</option>
                
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="postcode" className="form-label">PostCode</label>
                <input type="text" className={`form-control ${this.state.form_submit ? this.state.postcode ? 'is-valid' : 'is-invalid' : ''}`} id="house_number" placeholder="Street" onChange={(e) => this.setState({ house_number: e.target.value })} value={this.state.postcode} />
                {this.state.form_submit && !this.state.postcode && <span className="invalid-feedback">Please add correct postcode </span>}
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
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  {this.state.page == 2 &&
                    <li className="page-item">
                      <button className="page-link" tabIndex={-1} onClick={this.handleSubmitPage2}>Previous</button>
                    </li>
                  }
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </>
          }
        </form>
      </>
    )
  }
}