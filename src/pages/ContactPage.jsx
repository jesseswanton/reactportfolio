export default function ContactPage() {
  return (
    <div className="container pt-4 d-flex justify-content-center">
      <form className="col-lg-6 col-md-8 col-sm-10 p-4 border rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="FormControlInput1" className="form-label text-light">Name</label>
          <input type="text" className="form-control" id="FormControlInput1" placeholder="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="FormControlInput2" className="form-label text-light">Email address</label>
          <input type="email" className="form-control" id="FormControlInput2" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="FormControlTextarea1" className="form-label text-light">Message</label>
          <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}