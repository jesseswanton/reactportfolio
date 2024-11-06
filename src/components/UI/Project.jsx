import React from 'react';
import projectData from '../../../data/projectData.json';

const Project = () => {
  return (
    <section className="bg-light text-center m-4">
      <div className="container">
        <div className="row p-2">
          {projectData.map((feature, index) => (
            <div className="col-lg-4" key={index}>
              <div className="mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="d-flex">
                </div>
                <h3>{feature.title}</h3>
                <p className="lead mt-100">
                  <ul>
                    {feature.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a href={feature.link} target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid" src={feature.image} alt={feature.altText} />
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;