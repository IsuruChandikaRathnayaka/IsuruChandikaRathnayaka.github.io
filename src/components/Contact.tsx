function Contact(){
    return <>
    <div className="container mt-5 pb-5" id="contact">
  <h2 className="text-center text-danger"><b>Contact Me</b></h2>
  <div className="row justify-content-center">
    <div className="col-md-6">
      <form className="" action="mailto:isuruchandika321@gmail.com" method="post">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"><b>Enter your email</b></label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="myEmail" aria-describedby="emailHelp" required/>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"><b>Enter your name:</b></label>
          <input type="text" name="myName" className="form-control" id="exampleInputPassword1" required/>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleTextarea" className="form-label"><b>Enter your message</b></label>
          <textarea className="form-control" name="message" id="exampleTextarea" required></textarea>
        </div>

        <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-auto">
      <button type="submit" className="btn btn-danger">Send</button>
    </div>
  </div>
</div>
      </form>
    </div>
  </div>
</div>


    </>
}
export default Contact;