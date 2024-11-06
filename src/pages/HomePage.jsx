export default function HomePage() {
  return (
    <div className="position-relative container pt-4">
      <section className="bg-light text-center m-4 ">
        <div className="row p-2">
          <div className="col-lg-4 mx-auto mb-5 mb-lg-0 mb-lg-3 ">
            <h3>About Me</h3>
            <p className="lead mb-0">Jesse Swanton</p>
          </div>
        </div>
      </section>
      
      <section className="bg-light text-center m-4">
        <div className="row p-2">
          <div className="col-lg-4 mx-auto mb-5 mb-lg-0 mb-lg-3">
            <h3>Places I've Lived</h3>
            <ul className="lead mt-100">
              <li>Port Hardy, British Columbia</li>
              <li>Las Cruces, New Mexico</li>
              <li>Olympia, Washington</li>
              <li>Baltimore, Maryland</li>
              <li>Salt Lake City, Utah</li>
            </ul>
          </div>
          
          <div className="col-lg-4 mx-auto mb-5 mb-lg-0 mb-lg-3">
            <h3>Industries I've Worked In</h3>
            <ul className="lead mt-100">
              <li>Food Service & Events</li>
              <li>State and Federal Government</li>
              <li>IT Support & Business Analysis</li>
            </ul>
          </div>
          
          <div className="col-lg-4 mx-auto mb-0 mb-lg-3">
            <h3>Hobbies</h3>
            <ul className="lead mt-100">
              <li>Music</li>
              <li>Snowboarding</li>
              <li>Hiking</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
