import React from 'react';

type Props = {}
type State = {
  email: string
  password: string
  confirm_password: string
  form_submit: boolean
  form_submit_page1: boolean,
  form_valid: boolean
  form_valid_page1: boolean
  show_password: boolean
  accept_terms_condition: boolean
  page: 1 | 2 | 3
  street: string
  house_number: string
  postcode: string
  postcode_validated: boolean
  city: string

}
export class SignupFormPhase3 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      form_submit: false,
      form_submit_page1: false,
      form_valid: false,
      form_valid_page1: false,
      show_password: false,
      accept_terms_condition: false,
      page: 1,
      street: '',
      house_number: '',
      postcode: '',
      city: '',
      postcode_validated: false

    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitPage1 = this.handleSubmitPage1.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.testPostcode = this.testPostcode.bind(this)

  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    if (this.state.house_number != '' && this.state.street != '' && this.state.city && this.state.postcode != '' && this.state.accept_terms_condition) {
      console.log("submit1");
      this.setState({
        form_submit: true,
        form_valid: true,
        accept_terms_condition: true,
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
        form_submit_page1: true
      })
    } else {
      this.setState({
        form_submit_page1: true,
        form_valid: false
      })
    }
  }

  handlePrev(event: React.SyntheticEvent) {
    event.preventDefault();
    this.setState({
      page: 1
    })
  }

  testPostcode(postcode: any) {
    const postcodeString = postcode;
    const regex = new RegExp('/^\d{4}\s?\w{2}$/g');
    const isValidPostcode = regex.test(postcodeString);
    console.log('isValidPostcode', isValidPostcode);
    return isValidPostcode;
  }

  render() {
    return (
      <>
        {this.state.form_submit && this.state.form_valid ?
          <p>Form is submitted</p>
          :
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

                <div className="mb-3">
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
                </div>

                <div className="mb-3">
                  <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                  <input id="confirm_password" className={`form-control ${this.state.form_submit ? this.state.password.length > 7 && this.state.password == this.state.confirm_password ? 'is-valid' : 'is-invalid' : ''}`} value={this.state.confirm_password} type="password" placeholder="Confirm Password" onChange={(e) => {
                    this.setState({ confirm_password: e.target.value })
                  }} />
                  {this.state.form_submit && this.state.confirm_password.length < 7 && <span className="invalid-feedback">Confirm Password character should be more than 7 characters </span>}
                  {this.state.password !== this.state.confirm_password && <span className="invalid-feedback">Password does not match </span>}
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
                  <label htmlFor="street" className="form-label">Street</label>
                  <input type="text" className={`form-control ${this.state.form_submit ? this.state.street ? 'is-valid' : 'is-invalid' : ''}`} id="street" placeholder="Street"
                    onChange={(e) => this.setState({ street: e.target.value })} value={this.state.street} />
                  {this.state.form_submit && !this.state.street && <span className="invalid-feedback">Please add street address</span>}
                </div>

                <div className="mb-3">
                  <label htmlFor="house_number" className="form-label">House number</label>
                  <input type="text" className={`form-control ${this.state.form_submit ? this.state.house_number ? 'is-valid' : 'is-invalid' : ''}`} id="house_number" placeholder="Street" onChange={(e) => this.setState({ house_number: e.target.value })} value={this.state.house_number} />
                  {this.state.form_submit && !this.state.street && <span className="invalid-feedback">Please add house number </span>}
                </div>

                <div className="mb-3">
                  <label htmlFor="city" className="form-label">City</label>
                  <select className={`form-select form-control ${this.state.form_submit ? this.state.city ? 'is-valid' : 'is-invalid' : ''}`} id="city" value={this.state.city} onChange={(e) => {
                    this.setState({ city: e.target.value })
                  }}>
                    <option>Choose...</option>
                    <option>Amsterdam</option>
                    <option>Rotterdam</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="postcode" className="form-label">Postcode</label>
                  <input type="text" className={`form-control ${this.state.form_submit ? this.state.postcode ? 'is-valid' : 'is-invalid' : ''}`} id="house_number" placeholder="Street" onChange={(e) => this.setState({ postcode: e.target.value })} value={this.state.postcode} />
                  {this.state.form_submit && (!this.state.postcode || !this.testPostcode(this.state.postcode)) && <span className="invalid-feedback">Please add correct postcode </span>}
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={() => {
                      this.setState({
                        accept_terms_condition: !this.state.accept_terms_condition
                      })
                    }} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Accept terms and conditions
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
                        <button className="page-link" onClick={this.handlePrev}>Previous</button>
                      </li>
                    }
                    {this.state.page != 2 &&
                      <li className="page-item">
                        <button className="page-link" onClick={this.handleSubmitPage1}>Next</button>
                      </li>
                    }

                  </ul>
                </nav>
              </>
            }
          </form>
        }
      </>
    )
  }
}