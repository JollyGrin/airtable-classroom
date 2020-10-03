import React, { Component, Fragment } from 'react';
import Head from 'next/head';

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <title>History 221</title>
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'
          />
          <link rel='stylesheet' type='text/css' href='css/reset.css' />
          <link
            href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,700;0,900;1,400;1,700;1,900&display=swap'
            rel='stylesheet'
          />
          <link rel='stylesheet' type='text/css' href='css/styles.css' />
        </Head>
        {this.props.children}
      </Fragment>
    );
  }
}
