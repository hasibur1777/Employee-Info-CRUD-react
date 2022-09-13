import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class AllData extends React.Component {
  state = {
    data: [],
  };
  componentWillMount() {
    axios
      .get('http://localhost:8888/employee/all')
      .then((response) => {
        //console.log(response);
        this.setState({
          data: [...response.data],
        });
      });
  }

  removeData = (e) => {
    let id = e.target.getAttribute('eid');
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8888/employee/${id}/delete`)
          .then((response) => {
            console.log(response);

            const isNotId = (emp) => emp.id !== id;
            const updatedAllData = this.state.data.filter(isNotId);
            this.setState({ data: updatedAllData });

            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
          });
      }
    });
  };

  renderAllData = () => {
    let cnt = 1;

    return this.state.data.map((emp) => (
      <tr key={cnt}>
        <th scope="row">{cnt++}</th>
        <td>
          <Link to={`/view/${emp.id}`}>{emp.user_id}</Link>
        </td>
        <td>{emp.dept}</td>
        <td>
          <Link
            className="btn btn-warning btn-sm"
            to={`/employee/${emp.id}`}
          >
            Edit
          </Link>
          <button
            className="btn btn-danger btn-sm m-1"
            eid={emp.id}
            onClick={this.removeData}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Department</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>{this.renderAllData()}</tbody>
        </table>
      </div>
    );
  }
}

export default AllData;
