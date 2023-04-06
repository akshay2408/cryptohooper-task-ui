import React from "react";

const FeatureTable = () => {
  return (
    <section className="Features">
      <div className="container">
        <div className="row">
          <h2 className="title">All the features you need.</h2>
          <p className="title_detail">Select plans to compare</p>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-2 col-sm-6 col-6">
            <select className="form-select" aria-label="Default select example">
              <option selected>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <p className=" col-lg-1 d-none d-md-block  d-lg-block m-0  text-center select_label">
            to
          </p>

          <div className="col-lg-2 col-sm-6 col-6">
            <select className="form-select" aria-label="Default select example">
              <option selected>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row table-responsive">
          <table className="table features-table table-borderless">
            <thead>
              <tr>
                <th scope="col">Features</th>
                <th scope="col">Pioneer</th>
                <th scope="col">Explorer</th>
                <th scope="col">Adventurer</th>
                <th scope="col">Hero</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Available on all exchanges</td>
                <td>All exchanges</td>
                <td>All exchanges</td>
                <td>All exchanges</td>
                <td>All exchanges</td>
              </tr>
              <tr>
                <td>Live trading terminal</td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
              </tr>
              <tr>
                <td>Portfolio Management</td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
              </tr>
              <tr>
                <td>Manual trading</td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
              </tr>
              <tr>
                <td>Syncing positions</td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
              </tr>
              <tr>
                <td>Reserve positions</td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
              </tr>
              <tr>
                <td>Personal stats</td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
              </tr>
              <tr>
                <td>Global stats</td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
              </tr>
              <tr>
                <td>Strategy builder</td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
                <td>
                  <i className="fa fa-check icon"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <a href="#" className="w-auto m-auto showmorebtn d-flex">
            <i className="fa fa-caret-down"></i>
            <span>Show more</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureTable;
