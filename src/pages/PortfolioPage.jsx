import React from 'react';
import Project from '../components/UI/Project';

export default function PortfolioPage() {
  return (
    <div className="position-relative container pt-4">
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Portfolio</h3>
                <p className="lead mb-0">
                  Click on the project image to open the GitHub Repository
                </p>
              </div>
          </div>
        </div>
      </section>
      <Project />
    </div>
  );
}