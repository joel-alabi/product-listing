import React, { Component } from 'react';

class SideItem extends Component {
  render() {
    return (
      <div className="main-sidebar-container">
        <div className="side-nav">
          <svg
            class="bi bi-bag-fill"
            width="2.4em"
            height="2.4em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 4h14v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7-2.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
          </svg>
          <h4 className="side-nav__text">Purse</h4>
        </div>
        <div className="side-nav">
          <svg
            class="bi bi-handbag-fill"
            width="2.4em"
            height="2.4em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2z" />
            <path d="M3.405 5a1.5 1.5 0 0 0-1.493 1.35L1 13.252A2.5 2.5 0 0 0 3.488 16h9.024A2.5 2.5 0 0 0 15 13.251l-.912-6.9A1.5 1.5 0 0 0 12.595 5H11v2.5a.5.5 0 1 1-1 0V5H6v2.5a.5.5 0 0 1-1 0V5H3.405z" />
          </svg>
          <h4 className="side-nav__text">Hand Bags</h4>
        </div>
        <div className="side-nav">
          <svg
            class="bi bi-bucket-fill"
            width="2.4em"
            height="2.4em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.5A4.5 4.5 0 0 0 3.5 6h-1a5.5 5.5 0 1 1 11 0h-1A4.5 4.5 0 0 0 8 1.5z"
            />
            <path
              fill-rule="evenodd"
              d="M1.61 5.687A.5.5 0 0 1 2 5.5h12a.5.5 0 0 1 .488.608l-1.826 8.217a1.5 1.5 0 0 1-1.464 1.175H4.802a1.5 1.5 0 0 1-1.464-1.175L1.512 6.108a.5.5 0 0 1 .098-.42z"
            />
          </svg>
          <h4 className="side-nav__text"> Bags</h4>
        </div>

        <div className="side-nav">
          <svg
            class="bi bi-calendar-fill"
            width="2.4em"
            height="2.4em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
            />
            <path d="M2 1a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2H2zm14 4H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5z" />
          </svg>
          <h4 className="side-nav__text">Shoes</h4>
        </div>

        <div className="side-nav">
          <svg
            class="bi bi-folder-fill"
            width="2.4em"
            height="2.4em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"
            />
          </svg>
          <h4 className="side-nav__text">Laptop Bags</h4>
        </div>
      </div>
    );
  }
}

export default SideItem;
