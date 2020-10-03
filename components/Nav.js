import React, { Component, Fragment } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <section id='nav'>
          <div className='nav__left'>🏠️</div>
          <div className='nav__right'>
            <a href='google.com'>
              <i className='fas fa-envelope-open-text' />
            </a>
            <a>
              <i className='fas fa-envelope-open-text' />
            </a>
            <a>
              <i className='fas fa-envelope-open-text' />
            </a>
          </div>
        </section>
      </Fragment>
    );
  }
}
