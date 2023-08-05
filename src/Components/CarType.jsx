import "./CarType.css";

const CarType = () => {
  return (
    <div className="CarType">
      <h3>WHY SHOULD YOU RIDE WITH US?</h3>
      <h2>Best in class rides</h2>
      <div className="Cards">
        <div className="card text-left">
          <img className="card-img-top" src="/images/card-image-1.png" alt="" />
          <div className="card-body">
            <h4 className="card-title">Basic</h4>
            <p className="card-text">
              The best balance of price and comfort. You will not go wrong with
              our basic rides.
            </p>
            <a href="">LEARN MORE</a>
          </div>
          </div>
        <div className="card text-left">
          <img className="card-img-top" src="/images/card-image-2.png" alt="" />
          <div className="card-body">
            <h4 className="card-title">Comfort</h4>
            <p className="card-text">
            If comfort is your priority, this is the ride for you. It’s spacious and packed with features.
            </p>
            <a href="">LEARN MORE</a>
          </div>
          </div>
        <div className="card text-left">
          <img className="card-img-top" src="/images/card-image-3.png" alt="" />
          <div className="card-body">
            <h4 className="card-title">Business</h4>
            <p className="card-text">
            Do you want to travel around the city in style? Make sure to select or business class rides.
            </p>
            <a href="">LEARN MORE</a>
          </div>
          </div>
        <div className="card text-left">
          <img className="card-img-top" src="/images/card-image-4.png" alt="" />
          <div className="card-body">
            <h4 className="card-title">Deluxe</h4>
            <p className="card-text">
            The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for.
            </p>
            <a href="">LEARN MORE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarType;
