import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Path2New.css";
//TODO: Verify THe denied, declined and accepted. Enter in the credit field and send this to backend, then get info back, figure out post in js
function Path2New() {
  const [user, setUser] = useState({
    fName: " ",
    lName: " ",
    phone: " ",
    email: " ",
  });
  const [fName, setFName] = useState({
    fName: " ",
  });
  const [lName, setLName] = useState({
    lName: " ",
  });
  const [phone, setPhone] = useState({
    phone: " ",
  });
  const [email, setEmail] = useState({
    email: " ",
  });
  const [cardNumber, setCardNumber] = useState({
    cardNumber: " ",
  });
  const [cardStatus, setCardStatus] = useState([]);
  const [cardAccepted, setCardAccepted] = useState(true);

  let navigate = useNavigate();
  console.log(fName);
  console.log(lName);
  console.log(phone);
  console.log(email);
  console.log(cardNumber);

  useEffect(() => {
    // fetch("http://localhost:8080/save", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     cardNumber: "41234567890123",
    //   }),
    // });
    // fetch("http://localhost:8080/cards", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((response) => {
    //     return response.json();
    //     // eslint-disable-next-line no-unreachable
    //     console.log("new card added");
    //   })
    //   .then((data) => {
    //     setCard(data[data.length - 1]);
    //   });
  }, []);

  function handleClickLane(e) {
    e.preventDefault();
    postRequest();
    getRequest();
    if (cardStatus.cardNumberType === "DENIED") {
      console.log("no");
      setCardAccepted(false);
    } else if (cardStatus.acceptedStatus === "DECLINED") {
      console.log("no1");
      setCardAccepted(false);
    } else if (cardStatus.acceptedStatus === "ACCEPTED") {
      navigate("/lane");
    } else {
      console.log("something went wrong");
      setCardAccepted(false);
    }
  }

  async function postRequest() {
    console.log(cardNumber);
    await fetch("http://localhost:8080/save", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardNumber),
    });
  }

  async function getRequest() {
    console.log("1");
    await fetch("http://localhost:8080/cards", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
        // eslint-disable-next-line no-unreachable
        console.log("new card added");
      })
      .then((data) => {
        setCardStatus(data[data.length - 1]);
        console.log("2");
        console.log(cardStatus);
      });
  }

  // function handleClickTest(e) {
  //   e.preventDefault();
  //   // console.log(card);
  //   fetch("http://localhost:8080/cards", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((response) => {
  //       return response.json();
  //       console.log("new student added");
  //       console.log(data);
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }

  return (
    <div className="new">
      {/* <h1 className="new__header">Enter your information.</h1> */}
      <div>
        {cardAccepted ? (
          <h1 className="new__header--good">Enter Your information</h1>
        ) : (
          <h1 className="new__header--bad">
            Card has not been accepted, try again
          </h1>
        )}
      </div>
      <form className="new__form">
        <label className="new__form-label">First Name:</label>
        <input
          className="new__form-input"
          type="text"
          onChange={(e) => {
            setFName({ fName: e.target.value });
          }}
        ></input>
        <label className="new__form-label">Last Name:</label>
        <input
          className="new__form-input"
          type="text"
          onChange={(e) => {
            setLName({ lName: e.target.value });
          }}
        ></input>
        <label className="new__form-label">Phone Number:</label>
        <input
          className="new__form-input"
          type="tel"
          onChange={(e) => {
            setPhone({ phone: e.target.value });
          }}
        ></input>
        <label className="new__form-label">Email:</label>
        <input
          className="new__form-input"
          type="email"
          onChange={(e) => {
            setEmail({ email: e.target.value });
          }}
        ></input>

        <label
          className={
            cardAccepted ? "new__card-label--good" : "new__card-label--bad"
          }
        >
          Card Number:
        </label>
        <input
          className={
            cardAccepted ? "new__card-input--good" : "new__card-input--bad"
          }
          type="text"
          onChange={(e) => {
            setCardNumber({ cardNumber: e.target.value });
          }}
        ></input>
        <button className="new__button" onClick={handleClickLane}>
          Next
        </button>
      </form>
      {/* <button onClick={handleClickTest}>test</button> */}
    </div>
  );
}

export default Path2New;
