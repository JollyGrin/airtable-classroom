import React, { Component } from 'react';
import Layout from '../components/Layout';
import { testFn } from '../assets/js/airtable';
import Nav from '../components/Nav';
import Hero from '../components/Hero';

export default function Index({ gson, preview }) {
  return (
    <Layout>
      <Nav />
      <Hero />
      <section id='dates'>
        <div className='dates__container'>
          <h1>Important Dates</h1>
          <span>Last updated October 1st, 2020</span>
          <div className='dates__box'>
            <div className='dates__box--selector'>
              <span className='active'>aug</span>
              <span>sep</span>
              <span>oct</span>
              <span>nov</span>
            </div>
          </div>
        </div>
      </section>
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
