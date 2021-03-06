import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function CarItem(props) {
  return (
    <div className="col-md-4">
      <div
        className={
          props.eachCar.book_status
            ? "card mb-3 shadow bg-grey"
            : "card mb-3 shadow bg-light"
        }
      >
        <img
          src={"./imgs/cars/" + props.eachCar.image}
          alt={props.eachCar.image}
          className="card-img"
        />
        <div className="card-body">
          <p className="text-dark">
            <b>{props.eachCar.model}</b>
          </p>
          <p className="text-secondary">
            <span className="mr-4">
              <img
                src="./imgs/icons/brush.png"
                alt="Brush"
                className="icon_img op-6"
              />{" "}
              {props.eachCar.color}
            </span>
            <span className="">
              <img
                src="./imgs/icons/seater.png"
                alt="Seat"
                className="icon_img op-6"
              />{" "}
              {props.eachCar.seat_cap} Seater
            </span>
          </p>
          <p className="text-secondary">
            Rent/day:{" "}
            {props.eachCar.book_status ? (
              <span className="text-secondary">
                Rs. {props.eachCar.rent_day}
              </span>
            ) : (
              <span className="text-primary">Rs. {props.eachCar.rent_day}</span>
            )}
          </p>
          <div>
            {props.eachCar.book_status ? (
              <Link to="/" className="btn btn-secondary disabled mr-2">
                Book Now
              </Link>
            ) : (
              <Link
                to="/booking"
                className="btn btn-dark mr-2 book-btn"
                onClick={() => props.bookCar(props.eachCar)}
              >
                Book Now
              </Link>
            )}
            <Link
              to="/details"
              className="btn btn-outline-dark details-btn"
              onClick={() => props.showDetails(props.eachCar)}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    showDetails: item => {
      dispatch({
        type: "SHOW_CAR",
        payload: { item }
      });
    },
    bookCar: item => {
      dispatch({
        type: "BOOK_CAR",
        payload: { item }
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CarItem);
