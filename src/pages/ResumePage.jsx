export default function ResumePage() {
  return (
    <div className="position-relative container pt-4">
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4" />
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Resume</h3>
                <p className="lead mb-0">Jesse Swanton</p>
                <p className="lead mb-0">jswan7692@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Education</h3>
                <ul className="lead mt-100">
                  <li>Westminater College, Bachelor's in Justice Studies, Minor in Psychology</li>
                  <li>2024 University of Utah / EdX Coding Bootcamp</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Current Employer</h3>
                <ul className="lead mt-100">
                  <li>State of Utah, Administrative Office of the Courts</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Positions Held</h3>
                <ul className="lead mt-100">
                  <li>Judicial Assistant</li>
                  <li>Help Desk</li>
                  <li>QA Tester</li>
                  <li>Business Analyst</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
