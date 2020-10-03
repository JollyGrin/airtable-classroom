import React, { Component } from 'react';
import Layout from '../components/Layout';
import { testFn } from '../assets/js/airtable';
import Nav from '../components/Nav';

export default function Index({ gson, preview }) {
  return (
    <Layout>
      <Nav />
      <section id='hero'>
        <div className='hero__content'>
          <h1>History 221</h1>
          <h2>with Prof. Cicero</h2>
          <div className='hero__buttons'>
            <a>syllabus</a>
            <a>ask a question</a>
          </div>
        </div>
        <div>
          <img src='media/hero-image.svg' />
        </div>
      </section>
      <section id='dates' />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const airtable = 'hi';
  testFn();

  // ];
  return {
    props: { airtable }, // will be passed to the page component as props
  };
}
