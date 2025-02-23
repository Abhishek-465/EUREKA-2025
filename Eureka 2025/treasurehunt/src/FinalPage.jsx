import React from "react";
import "./index.css"; // Import global CSS

const FinalPage = () => {
  // Array of hints
  const hints = [
    {
      title: "HINT 1",
      text: "' The Prefects' Common Room was, as Hermione had put it, 'the closest thing to a civilized space at Hogwarts.' Unlike the usual house common rooms, it wasn't filled with noisy first-years, half-melted cauldrons, or the lingering smell of Dungbombs. Instead, plush armchairs rearranged themselves at a flick of the wand, and the fireplace crackled merrily, enchanted to adjust its warmth to the liking of whoever sat nearest. The walls held portraits of famous Prefects from the past, some of whom were only too eager to offer unsolicited advice on leadership, proper posture, and the importance of stern but fair punishments. '",
    },
    {
      title: "HINT 2",
      text: "' The forbidden corridor on the right-hand side is out of bounds to everyone who does not wish to die a very painful death. Fluffy might be up the stairs, and trust me, he isn't fond of unexpected visitors. Students might get expelled if Mr. Filch, our caretaker, catches any rule-breakers roaming in the corridor—or worse, they might find themselves serving detention in the Forbidden Forest, which, as you know, has dangers of its own.'",
    },
    {
      title: "HINT 3",
      text: "' The Viaduct Bridge had a way of making students feel like grand adventurers, striding boldly across its high stone path, the wind threatening to steal their scarves. At sunset, the towers cast long shadows over the bridge, and if you looked closely enough, you might spot Nearly Headless Nick gliding along, muttering about the architectural brilliance of medieval ghost passageways. Fred once tried to hex the bridge to wobble under Filch's feet,” George added cheerfully, “but McGonagall caught him before it could become a tragic—yet admittedly hilarious—incident. '",
    },
    {
      title: "HINT 4",
      text: "' The Divination Classroom wasn't just a room—it was a portal into the vague and mysterious. Draped in thick curtains and filled with the scent of burning incense, it was the one place in Hogwarts where logic took a backseat to misty prophecies and cryptic tea leaves. 'The future is an uncertain web,' Professor Trelawney would often murmur, peering over her bejeweled spectacles, her hands hovering dramatically over a cloudy crystal ball. 'And yet, I see danger in the shape of a particularly ominous teacup… or is that just last week's leftover leaves? '",
    },
  ];

  return (
    <div className="container">

      <div className="grid">
        {hints.map((hint, index) => (
          <div key={index} className="box">
            <h3>{hint.title}</h3>
            <p>{hint.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinalPage;
