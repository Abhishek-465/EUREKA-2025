import React, { useState } from "react";
import pic from "./assets/map1.jpg";
import logo from "./assets/Logo.png";

// Import all 23 images explicitly
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";
import img6 from "./assets/img6.jpeg";
import img7 from "./assets/img7.jpeg";
import img8 from "./assets/img8.jpeg";
import img9 from "./assets/img9.jpeg";
import img10 from "./assets/img10.jpeg";
import img11 from "./assets/img11.jpeg";
import img12 from "./assets/img12.jpeg";
import img13 from "./assets/img13.jpeg";
import img14 from "./assets/img14.jpeg";
import img15 from "./assets/img15.jpeg";
import img16 from "./assets/img16.jpeg";
import img17 from "./assets/img17.jpeg";
import img18 from "./assets/img18.jpeg";
import img19 from "./assets/img19.jpeg";
import img20 from "./assets/img2.jpeg";
import img21 from "./assets/img21.jpeg";
import img22 from "./assets/img22.jpeg";
import img23 from "./assets/img23.jpeg";
import img24 from "./assets/img24.jpeg";
import img25 from "./assets/img25.jpeg";
import img26 from "./assets/img26.jpeg";
import img27 from "./assets/img27.jpeg";
import img28 from "./assets/img28.jpeg";
import img29 from "./assets/img29.jpeg";

const ProtectedPage = () => {
  const [password, setPassword] = useState("");
  const closingPassword = "mischief managed"; // Set the closing password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === closingPassword) {
      window.open("/final", "_blank"); // Open final page in a new tab
    } else {
      alert("Incorrect Password");
    }
  };

  return (
    <div className="container1">
      <img className="logo" src={logo}/>
      <h2 className="head2">HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</h2>
      <div className="subcont">
        <div className="map">
          <img src={pic} className="mapimg" alt="Map Outline" />
        </div>
        <div className="cardsec">
          
          <div className="card">
            <img src={img1} className="cardimg" alt="Card 1" />
            <p className="texthint">Prefects common Room 👩🏻‍🎓👨🏻‍🎓</p>
          </div>

          <div className="card">
            <img src={img2} className="cardimg1" alt="Card 2" />
            <p className="texthint">Basement 🚷</p>
            <p  className="mar">Restricted Area </p>
          </div>

          <div className="card">
            <img src={img3} className="cardimg" alt="Card 3" />
            <p className="texthint">Headmaster's Office 🧙🏻‍♂️</p>
            <p className="mar" >Professor Dumbledore may be inside 👀</p>
          </div>

          <div className="card">
            <img src={img4} className="cardimg2" alt="Card 4" />
            <p className="texthint">Department of Mysteries 🔮</p>

          </div>

          <div className="card">
            <img src={img5} className="cardimg2" alt="Card 5" />
            <p className="texthint">Room of Requirement 🧿</p>
            <p className="mar" >This room is invisible unless required</p>
          </div>

          <div className="card">
            <img src={img6} className="cardimg1" alt="Card 6" />
            <p className="texthint">Argus Filch's Office 🏮</p>
            <p className="mar" >Trespassers will be prosecuted.</p>
          </div>

          <div className="card">
            <img src={img7} className="cardimg" alt="Card 7" />
            <p className="texthint">Gryffindor Common Room 🦁</p>
          </div>

          <div className="card">
            <img src={img8} className="cardimg" alt="Card 8" />
            <p className="texthint">Ravenclaw Common Room 🦅</p>
          </div>

          <div className="card">
            <img src={img9} className="cardimg" alt="Card 9" />
            <p className="texthint">Hufflepuff Common Room 🦡</p>
          </div>

          <div className="card">
            <img src={img10} className="cardimg" alt="Card 10" />
            <p className="texthint">Charm's Classroom 🪄</p>
          </div>

          <div className="card">
            <img src={img11} className="cardimg" alt="Card 11" />
            <p className="texthint">Divination Classroom 🧘🏻‍♂️</p>
          </div>

          <div className="card">
            <img src={img12} className="cardimg" alt="Card 12" />
            <p className="texthint">Potion's Classroom 🧪</p>
          </div>

          <div className="card">
            <img src={img13} className="cardimg2" alt="Card 13" />
            <p className="texthint">Moaning Myrtle's Bathroom 🛁</p>
            <p className="mar" >Poor Myrtle is still sobbing inside 🥹</p>
          </div>

          <div className="card">
            <img src={img14} className="cardimg" alt="Card 14" />
            <p className="texthint">Prefect's Bathroom 🛁</p>
            <p className="mar"  >Password to enter is Pine-fresh</p>
          </div>

          <div className="card">
            <img src={img15} className="cardimg" alt="Card 15" />
            <p className="texthint">Hospital Wing 🏥</p>
          </div>

          <div className="card">
            <img src={img16} className="cardimg" alt="Card 16" />
            <p className="texthint">Prof. Severus Snape's Office 🧙🏻‍♂️ (top) and Prof. Minerva Mcgonagall's Office 🧙🏻‍♀️(bottom)</p>
          </div>

          <div className="card">
            <img src={img17} className="cardimgs" alt="Card 17" />
            <p className="texthint">Slytherin Common Room 🐍</p>
          </div>

          <div className="card">
            <img src={img18} className="cardimgl" alt="Card 18" />
            <p className="texthint">The Great Hall 🕯</p>
          </div>

          <div className="card">
            <img src={img19} className="cardimg" alt="Card 19" />
            <p className="texthint">Moving Staircase ↕</p>
            <p className="mar"  >May change directions unexpectedly</p>
          </div>

          <div className="card">
            <img src={img21} className="cardimg1" alt="Card 21" />
            <p className="texthint">The Chamber of Secrets 🐍</p>
            <p className="mar" >Beware of Basilisk 💀</p>
          </div>

          <div className="card">
            <img src={img26} className="cardimg2" alt="Card 26" />
            <p className="texthint">Defence against the Dark Arts Classroom🛡</p>
          </div>

          <div className="card">
            <img src={img27} className="cardimg2" alt="Card 27" />
            <p className="texthint">Hogwarts Kitchen🍳</p>
            <p className="mar"  >Where spells are stirred and Secrets are served🍽</p>
          </div>

          <div className="card">
            <img src={img28} className="cardimg1" alt="Card 28" />
            <p className="texthint">Viaduct Hanging Bridge🌉</p>
          </div>

          <div className="card">
            <img src={img22} className="cardimg2" alt="Card 22" />
            <p className="texthint">Quidditch Pitch ⚾</p>
          </div>

          <div className="card">
            <img src={img23} className="cardimg4" alt="Card 23" />
            <p className="texthint">Three Broomsticks Inn 🧹 </p>
          </div>

          <div className="card">
            <img src={img24} className="cardimg" alt="Card 24" />
            <p className="texthint">Hagrid's Hut 🛖</p>
          </div>

          <div className="card">
            <img src={img25} className="cardimg" alt="Card 25" />
            <p className="texthint">Greenhouse 🪴</p>
          </div>

          <div className="card">
            <img src={img29} className="cardimg2" alt="Card 29" />
            <p className="texthint">Forbidden Corridor🚫</p>
          </div>

        </div>
      </div>
      <h2>Enter Closing Password to find the clues !!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter Closing Password"
          className="field2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProtectedPage;
