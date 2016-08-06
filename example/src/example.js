import React, { Component } from 'react';
import ReactWindow from '../../src';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div style={{ height: '400px', width: '400px', position: 'absolute' }}>
        <button
          className="btn btn-default"
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        >
          {this.state.isOpen ? 'Close Window' : 'Open window'}
        </button>
        <ReactWindow
          isOpen={this.state.isOpen}
          className="window"
          style={{ borderRadius: '5px' }}
          width={440}
          minWidth={440}
          height={260}
          minHeight={260}
        >
          <header
            className="toolbar toolbar-header"
            style={{ borderRadius: '5px 5px 0 0' }}
          >
            <h1 className="title">Header</h1>
          </header>
          <div className="window-content">
            <div
              className="pane-group"
              style={{ overflow: 'hidden' }}
            >
              <div
                className="pane-sm sidebar"
                style={{ borderRadius: '0 0 0 5px', overflowY: 'auto' }}
              >
                <nav className="nav-group">
                  <h5 className="nav-group-title">Favorites</h5>
                  <a className="nav-group-item active">
                    <span className="icon icon-home"></span>
                    connors
                  </a>
                  <span className="nav-group-item">
                    <span className="icon icon-download"></span>
                    Downloads
                  </span>
                  <span className="nav-group-item">
                    <span className="icon icon-folder"></span>
                    Documents
                  </span>
                  <span className="nav-group-item">
                    <span className="icon icon-signal"></span>
                    AirPlay
                  </span>
                  <span className="nav-group-item">
                    <span className="icon icon-print"></span>
                    Applications
                  </span>
                  <span className="nav-group-item">
                    <span className="icon icon-cloud"></span>
                    Desktop
                  </span>
                </nav>
              </div>
              <div className="pane" style={{ overflow: 'none' }}>
                <table className="table-striped" style={{ overflow: 'none' }}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Kind</th>
                      <th>File Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ReactWindow>
      </div>
    );
  }
}
