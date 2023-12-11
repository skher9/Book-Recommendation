import { useState } from "react";

const Body = () => {
  const Authors = {
    "Colleen Hoover": [
      { name: "It Ends With Us", rating: 4.6 },
      { name: "It Starts With Us", rating: 4.1 },
      { name: "Verity", rating: 4.4 },
      { name: "Reminders of Him", rating: 4.8 },
      { name: "Novermber 9", rating: 4.6 },
      { name: "Layla", rating: 4.0 },
      { name: "Regretting you", rating: 4.5 },
      { name: "Ugly Love", rating: 4.5 },
      { name: "Confess", rating: 4.7 },
    ],
    "Anna Haung": [
      { name: "Twisted Love", rating: 4.4 },
      { name: "Twisted Games", rating: 4.8 },
      { name: "Twisted Hate", rating: 4.6 },
      { name: "Twisted Lies", rating: 4.0 },
      { name: "King of Wrath", rating: 4.5 },
      { name: "King of Greed", rating: 4.5 },
      { name: "King of Pride", rating: 4.7 },
    ],
    "Elle Keneddy": [
      { name: "The Deal", rating: 4.4 },
      { name: "The Mistake", rating: 4.8 },
      { name: "The Score", rating: 4.6 },
      { name: "The Goal", rating: 4.0 },
      { name: "The Legacy", rating: 4.5 },
      { name: "The Risk", rating: 4.5 },
      { name: "The Play", rating: 4.7 },
      { name: "The Dare", rating: 4.7 },
      { name: "The Chase", rating: 4.7 },
      { name: "Bad Girl Reputation", rating: 4.7 },
      { name: "Good Girl Complex", rating: 4.7 },
    ],
    "Lauren Asher": [
      { name: "The Fine Print", rating: 4.4 },
      { name: "Terms and Conditions", rating: 4.8 },
      { name: "The Final Offer", rating: 4.6 },
      { name: "Throttled", rating: 4.0 },
      { name: "Collided", rating: 4.5 },
      { name: "Wrecked", rating: 4.5 },
      { name: "Redeemed", rating: 4.7 },
    ],
    "Daniel Lori": [
      { name: "The Sweetest Oblivian", rating: 4.4 },
      { name: "The Maddest Obession", rating: 4.8 },
      { name: "The Darkest Temptation", rating: 4.6 },
    ],
    "Sarah Adams": [
      { name: "The Cheat Sheet", rating: 4.4 },
      { name: "The Match", rating: 4.8 },
      { name: "The Enemy", rating: 4.6 },
      { name: "The Temporary Roommate", rating: 4.0 },
      { name: "The Off Limits Rule", rating: 4.5 },
    ],
  };

  const Names = Object.keys(Authors);

  const [booklist, setbooklist] = useState([]);

  function Handler(Name) {
    var Value = Authors[Name];
    setbooklist(Value);
  }

  return (
    <div className="Apps">
      <div className="Header">
        <h1 className="Heading">{"📚"} Book Recommendation....</h1>
        <h3 className="Note">
          Check out my favourite books. Select Author to get started...
        </h3>
      </div>
      <div>
        {Names.map((Name) => {
          return (
            <button
              className="btn"
              onClick={() => {
                Handler(Name);
              }}
            >
              {Name}
            </button>
          );
        })}
      </div>
      <p className="p">
        --------------------------------------------------------------------------------------------------
      </p>
      <div className="list">
        <ul>
          {booklist.map((book) => {
            return (
              <>
              <li className="list-item">
                Name : {book.name + "    "}
                Rating : {book.rating} Stars
                
              </li>
              <p className="p">
              ------------------------------------------</p>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Body;
