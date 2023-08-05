import "./DriversForm.css"

const DriversForm = () => {
  return (
    <div className="DriversForm">
      <div className="MyRide">
        <img src="/images/popup-image-my-ride.png" alt="" />
        <div>
          <h3>Drive with MyRide</h3>
          <p>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</p>
        </div>
      </div>

      <form action="">
        <div className="first-inputs">
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        </div>
        <br />
        <input type="email" name="" id="" />
        <br />
      <fieldset className="fieldset">
        <legend>Country</legend>
        <input type="text" name="" id="" />
      </fieldset>
      <br />
      <div className="last-inputs">
      <input type="text" name="" id="" />
      <input type="text" name="" id="" />
      </div>
      <div className="switch"> 
        <p>I drive my own car</p>
        <img src="/images/switch-on.png" alt="" />
      </div>
      <h4>Select your card type</h4>
      <div className="Select-car">
       <div className="cars">
         <img src="/images/card-image-1st.png" alt="" />
         <h3>Sedam</h3>
       </div>
       <div className="cars">
         <img src="/images/card-image-2nd.png" alt="" />
         <h3>SUV/Van</h3>
       </div>
       <div className="cars">
         <img src="/images/card-image-3rd.png" alt="" />
         <h3>Semi Luxury</h3>
       </div>
       <div className="cars">
         <img src="/images/card-image-4th.png" alt="" />
         <h3>Luxury Car</h3>
       </div>
      </div>
      <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default DriversForm