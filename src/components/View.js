import React from 'react';
import Header from './Header';
import axios from 'axios';

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      dept: '',
    };
  }

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
          <h1 className="text-center">Employee Details</h1>
          <hr />
          <div className="card p-2 m-4">
            <p>
              <b>Employee ID: </b>
              {userid}
            </p>
            <p>
              <b>Employee Department: </b>
              {dept}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default View;
