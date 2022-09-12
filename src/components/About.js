import React from 'react';
import Header from './Header';

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div
          className="text-secondary mt-4 px-4 py-5 text-center shadow"
          style={{ backgroundColor: '#bbded7ab' }}
        >
          <div className="py-5">
            <h3 className="display-5 fw-bold text-dark">
              Slim 4 API + React JS
            </h3>
            <div className="col-lg-6 mx-auto">
              <p className="fs-5 mb-4">
                To Run Slim 4 = <b>php -S localhost:8888 -t public</b>{' '}
                <br />
                Then <b>yarn start</b>
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a
                  type="button"
                  href="https://github.com/hasibur1777/employee-info-api.git"
                  className="btn btn-outline-dark btn-lg px-4 me-sm-3 fw-bold"
                >
                  Slim 4
                </a>
                <a
                  type="button"
                  href="https://github.com/hasibur1777/Employee-Info-CRUD-react.git"
                  className="btn btn-outline-dark btn-lg px-4 me-sm-3 fw-bold"
                >
                  React
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
