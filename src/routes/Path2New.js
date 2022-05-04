import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Path2New.css";
//TODO: Verify THe denied, declined and accepted. Enter in the credit field and send this to backend, then get info back, figure out post in js
function Path2New() {
  const [data, setData] = useState([]);
  const [card, setCard] = useState([]);
  let navigate = useNavigate();

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
    if (card.cardNumberType === "DENIED") {
      console.log("no");
    } else if (card.acceptedStatus === "DECLINED") {
      console.log("no1");
    } else if (card.acceptedStatus === "ACCEPTED") {
      navigate("/lane");
    } else {
      console.log("something went wrong");
    }
  }

  async function postRequest() {
    await fetch("http://localhost:8080/save", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cardNumber: "4234567890123123",
      }),
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
        setCard(data[data.length - 1]);
        console.log("2");
        console.log(card);
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
      <h1 className="new__header">Enter your information.</h1>
      <form className="new__form">
        <label>First Name:</label>
        <input type="text"></input>
        <label>Last Name:</label>
        <input type="text"></input>
        <label>Phone Number:</label>
        <input type="tel"></input>
        <label>Email:</label>
        <input type="email"></input>
        <label>Card Number:</label>
        <input type="text"></input>
        <button className="new__button" onClick={handleClickLane}>
          Next
        </button>
      </form>
      {/* <button onClick={handleClickTest}>test</button> */}
    </div>
  );
}

export default Path2New;
