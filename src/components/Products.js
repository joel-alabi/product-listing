import React, { Component } from 'react';

class Products extends Component {
  render() {
    return (
      <div className="main-product-container">
        <div className='Container'>
          <div className='row'>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent">20%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/laptop.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading"> Laptop</h1>
                  <p className="card__text--paragraph">1 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$200</span>
                    <span className="card__price-amount--new">$160</span>
                  </h3>

                  <div className="cart-btn" style={{color:'green'}}>
                    <svg 
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent">20%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/purse.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">mhicky purse</h1>
                  <p className="card__text--paragraph">10 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$260</span>
                    <span className="card__price-amount--new">$150</span>
                  </h3>

                  <div className="cart-btn">
                    <svg style={{color:'green'}}
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent">40%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/bag 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Bag</h1>
                  <p className="card__text--paragraph">5 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$400</span>
                    <span className="card__price-amount--new">$1260</span>
                  </h3>

                  <div className="cart-btn">
                    <svg style={{color:'green'}}
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent">10%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/phone.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">phones</h1>
                  <p className="card__text--paragraph">3 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$320</span>
                    <span className="card__price-amount--new">$260</span>
                  </h3>

                  <div className="cart-btn">
                    <svg style={{color:'green'}}
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent">18%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/camera.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading"> canon camera</h1>
                  <p className="card__text--paragraph">5 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$42.0</span>
                    <span className="card__price-amount--new">$41.0</span>
                  </h3>

                  <div className="cart-btn">
                    <svg style={{color:'green'}}
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
           </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent">38%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/camera 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading"> camera</h1>
                  <p className="card__text--paragraph">24 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$72.0</span>
                    <span className="card__price-amount--new">$51.0</span>
                  </h3>

                  <div className="cart-btn">
                    <svg style={{color:'green'}}
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent">19%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/shoe.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">kicks </h1>
                  <p className="card__text--paragraph">26 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$1,220</span>
                    <span className="card__price-amount--new">$1,010</span>
                  </h3>

                  <div className="cart-btn">
                    <svg style={{color:'green'}}
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent">19%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/shoe 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Stephen shoes</h1>
                  <p className="card__text--paragraph">42 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$1,520</span>
                    <span className="card__price-amount--new">$1,310</span>
                  </h3>

                  <div className="cart-btn">
                    <svg style={{color:'green'}}
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent">31%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/bag 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">mhickcy amry-green Laptop Bag</h1>
                  <p className="card__text--paragraph">12 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$2,520</span>
                    <span className="card__price-amount--new">$2,310</span>
                  </h3>

                  <div className="cart-btn">
                    <svg style={{color:'green'}}
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent">11%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/laptop 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">classic Laptop</h1>
                  <p className="card__text--paragraph">11 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$3,520</span>
                    <span className="card__price-amount--new">$3,310</span>
                  </h3>

                  <div className="cart-btn">
                    <svg style={{color:'green'}}
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent">31%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/bag 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading"> soldier Handbag</h1>
                  <p className="card__text--paragraph">12 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$2,520</span>
                    <span className="card__price-amount--new">$2,310</span>
                  </h3>

                  <div className="cart-btn" style={{color:'green'}}>
                    <svg 
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent">15%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/phone.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">phone</h1>
                  <p className="card__text--paragraph">5 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$50.0</span>
                    <span className="card__price-amount--new">$41.0</span>
                  </h3>

                  <div className="cart-btn">
                    <svg style={{color:'green'}}
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
