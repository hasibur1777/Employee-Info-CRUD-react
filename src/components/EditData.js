import React from 'react';
import Header from './Header';
import axios from 'axios';
import Swal from 'sweetalert2';

class EditData extends React.Component {
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
    var url = window.location.pathname;
    var eid = url.substring(url.lastIndexOf('/') + 1);

    if (this.state.userid === '' || this.state.dept === '') {
      alert('field is empty!');
    } else {
      let request = {
        user_id: this.state.userid,
        dept: this.state.dept,
      };
      axios
        .put(`http://localhost:8888/employee/update/${eid}`, request)
        .then((response) => {
          console.log('from handle submit', response);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Employee Updated Successfully..',
            showConfirmButton: false,
            timer: 1500,
          });
          /*this.setState({
            userid: '',
            dept: '',
          });*/
        });
    }
  };

  componentWillMount() {
    var url = window.location.pathname;
    var eid = url.substring(url.lastIndexOf('/') + 1);
    axios
      .get(`http://localhost:8888/employee/${eid}`)
      .then((response) => {
        console.log(response['data'][0]);
        this.setState({
          userid: response['data'][0]['user_id'],
          dept: response['data'][0]['dept'],
        });
      });
  }
  render() {
    const { userid, dept } = this.state;
    return (
      <div>
        <Header />
        <div className="">
          <h1 className="text-center">Employee Edit</h1>
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

export default EditData;
