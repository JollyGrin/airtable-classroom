import React, { Component, Fragment } from 'react';

export default class Hero extends Component {
  render() {
    return (
      <Fragment>
        <section id='hero'>
          <div className='hero__content'>
            <h1>History 221</h1>
            <h2>with Prof. Cicero</h2>
            <div className='hero__buttons'>
              <a href='#'>syllabus</a>
              <a>ask a question</a>
            </div>
          </div>
          <div className='hero__right'>
            <img src='media/hero-image.svg' />
          </div>
        </section>
      </Fragment>
    );
  }
}
