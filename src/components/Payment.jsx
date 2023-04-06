import React from "react";

const Payment = () => {
  return (
    <section className="Pricing">
      <div className="container">
        <div className="row">
          <h1 className="pricing_title">Pricing.</h1>
          <p className="pricing_detail">
            Become a member & join over 300.000 other Hoppers today!
            <br />
            Cryptohopper is free to use, create your free account now!
          </p>
        </div>
      </div>
      <div className="pricing_tabs">
        <div className="container">
          <div className="row">
            <ul
              className="nav nav-tabs m-auto justify-content-center border-0 mb-4"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active border-0 w-100"
                  id="Annually"
                  data-bs-toggle="tab"
                  data-bs-target="#Annually"
                  type="button"
                  role="tab"
                  aria-controls="Annually"
                  aria-selected="true"
                >
                  Annually
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link w-100"
                  id="Monthly"
                  // data-bs-toggle="tab"
                  data-bs-target="#Monthly"
                  type="button"
                  role="tab"
                  aria-controls="Monthly"
                  aria-selected="false"
                >
                  Monthly
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="Annually"
                role="tabpanel"
                aria-labelledby="Annually"
              >
                <div className="row align-items-center d-flex">
                  <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-3">
                    <div className="box box1">
                      <strong className="box-title">Pioneer</strong>
                      <p className="box-price">Free </p>
                      <ul className="box-detail d-none d-lg-block">
                        <li>20 positions</li>
                        <li>portfolio management</li>
                        <li>manual trading</li>
                        <li>all available exchanges</li>
                      </ul>
                      <button className="getstartBTN">Get started</button>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-3">
                    <div className="box box2">
                      <strong className="box-title">Explorer</strong>
                      <p className="box-price">$16.58/month </p>
                      <ul className="box-detail d-none d-lg-block">
                        <li>80 positions</li>
                        <li>portfolio management</li>
                        <li>manual trading</li>
                        <li>all available exchanges</li>
                      </ul>
                      <button className="getstartBTN">Get started</button>
                      <p className="try-text">Try 7 days for free!</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-3">
                    <div className="box box3">
                      <strong className="box-title">Adventurer</strong>
                      <p className="box-price">$41.58/month </p>
                      <ul className="box-detail d-none d-lg-block">
                        <li>200 positions</li>
                        <li>portfolio management</li>
                        <li>manual trading</li>
                        <li>all available exchanges</li>
                      </ul>
                      <button className="getstartBTN">Get started</button>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-3">
                    <div className="box box4">
                      <button className="BestvalueBTN">Best Value</button>
                      <strong className="box-title">Hero</strong>
                      <p className="box-price">$83.25/month </p>
                      <ul className="box-detail d-none d-lg-block">
                        <li>500 positions</li>
                        <li>portfolio management</li>
                        <li>manual trading</li>
                        <li>all coins for signals</li>
                        <li>market arbitrage</li>
                        <li>algorithm intelligence</li>
                      </ul>
                      <button className="getstartBTN">Get started</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Monthly"
                role="tabpanel"
                aria-labelledby="Monthly"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
