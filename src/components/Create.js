import React from 'react';
import Header from './Header';
import axios from 'axios';
import Swal from 'sweetalert2';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      dept: '',
    };
  }

  handleFormInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.userid === '' || this.state.dept === '') {
      //alert('field is empty!');
      Swal.fire('Enter Employee ID and Department Properly!');
    } else {
      let data = {
        user_id: this.state.userid,
        dept: this.state.dept,
      };
      axios
        .post('http://localhost:8888/employee/add', data)
        .then((response) => {
          console.log(response);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Employee Added Successfully..',
            showConfirmButton: false,
            timer: 1500,
          });
          this.setState({
            userid: '',
            dept: '',
          });
        });
    }
  };
  render() {
    const { userid, dept } = this.state;
    return (
      <div>
        <Header />
        <div className="">
          <h1 className="text-center">Employee Create</h1>
          <hr />
          <div className="card p-3">
            <form
              onSubmit={this.handleFormSubmit}
              className="card-body"
            >
              <div className="mb-3">
                <label className="form-label">Employee ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="note userid"
                  onChange={this.handleFormInput}
                  value={userid}
                  name="userid"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Employee Dept</label>
                <textarea
                  className="form-control"
                  name="dept"
                  rows="3"
                  value={dept}
                  onChange={this.handleFormInput}
                ></textarea>
              </div>

              <input
                type="submit"
                className="btn btn-outline-success"
                value={'Save'}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
