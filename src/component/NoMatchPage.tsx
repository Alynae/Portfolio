import React from "react";
import '../../src/css/404.css'

export default function NoMatchPage() {
  return (

    <section>
       <div className="opacity404">
      <div className="container" id="page404" >
       
            <h1 className='mt-4 mb-4'>404</h1>
            <h2>The page you are looking for doesn't exist.</h2>
            <a href="/" className="btn-outline">go back</a>
            </div>
      </div>
    </section>
  );
}
