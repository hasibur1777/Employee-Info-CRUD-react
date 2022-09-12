import React from 'react';
//import axios from 'axios';

//import ShowData from './ShowData';

class Form extends React.Component {
  state = {
    title: '',
    body: '',
    data: [],
  };

  handleFormInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.title === '' || this.state.body === '') {
      alert('field is empty!');
    } else {
      let temp = {
        title: this.state.title,
        body: this.state.body,
      };

      this.setState({
        data: [temp, ...this.state.data],
        title: '',
        body: '',
      });
    }
  };

  /*
  //Test Perpouse
  componentWillMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({
          data: [...response.data],
        });
      });
  }*/
  /*
  renderAllData = () => {
    let cnt = 1;
    return this.state.data.map((note) => (
      <div className="card-body" key={cnt++}>
        <ShowData para={note} />
      </div>
    ));
  };
*/
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <div className="card p-3">
          <form
            onSubmit={this.handleFormSubmit}
            className="card-body"
          >
            <div className="mb-3">
              <label className="form-label">Note Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="note title"
                onChange={this.handleFormInput}
                value={title}
                name="title"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Note</label>
              <textarea
                className="form-control"
                name="body"
                rows="3"
                value={body}
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
        <div className="card mt-3">
          <div className="card-header text-center">Saved Note</div>
        </div>
      </div>
    );
  }
}

export default Form;
