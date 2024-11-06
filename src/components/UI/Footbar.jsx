export default function Footer({ links }) {
    return (
        <footer className="footer fixed-bottom d-flex flex-column footer">
          <div className="mt-auto">
            <ul className="me-auto mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
          </div>
        </footer>
    );
  }
  