import "./BookingForm.css"

const BookingForm = () => {
  return (
    <div className="Booking">
      <div>
      <img src="/images/Hero image.png" alt="" />
      </div>
      <div className="formBox">
        <h3>NEED A RIDE?</h3>
        <h1>Book with <strong className="myRide">myRIDE</strong> now!</h1>
        <div className="legend">
          <h3>Find a ride now</h3>
          <form action="" className="form">
            <fieldset>
              <legend>Your Pickup</legend>
              <input type="text" />
              </fieldset>
              <br />
              <fieldset>
              <legend>Your Destination</legend>
              <input type="text" />
            </fieldset>
            <div className="inline">
              <button>FIND A DRIVER</button>
              <h4>MORE OPTIONS</h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingForm