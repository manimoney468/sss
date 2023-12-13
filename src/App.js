import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Movie = (props) => {
  return (
    <section className="bg-primary" style={{ width: '200px' }}>
      <img src={props.urlimgu} height="100" alt="Movie Poster" />
      <p>The hello</p>
    </section>
  );
};

const Mani = (props) => {
  console.log(props);
  return (
    <div>
      <Movie urlimgu={props.urlimgu} />
      <h1>manish</h1>
    </div>
  );
};


export default Mani;
