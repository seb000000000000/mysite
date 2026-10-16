// op welke tijd je wat ziet
const regels = [
  { tijd: 5, tekst: "Aye, aye, aye, aye (ooh)" },
  { tijd: 10, tekst: "Ooh, ooh, ooh, ooh-ooh (ooh)" },
  { tijd: 16.5, tekst: "Aye, aye" },
  { tijd: 21, tekst: "Ooh, ooh, ooh, ooh-ooh" },
  { tijd: 27.5, tekst: "Needless to say, I keep it in check" },
  { tijd: 30.5, tekst: "She was a bad, bad, nevertheless (yeah)" },
  { tijd: 33, tekst: "Callin' it quits now baby, I'm a wreck (wreck)" },
  { tijd: 35.5, tekst: "Crash at my place baby, you're a wreck (wreck)" },
  { tijd: 38, tekst: "Needless to say, I'm keeping in check" },
  { tijd: 41, tekst: "She was all bad, bad, nevertheless" },
  { tijd: 43.5, tekst: "Callin' it quits now baby, I'm a wreck" },
  { tijd: 46, tekst: "Crash at my place, baby, you're a wreck" },
  { tijd: 49, tekst: "Thinkin' in a bad way, losin' your grip" },
  { tijd: 51.5, tekst: "Screamin' at my face, baby, don't trip" },
  { tijd: 54, tekst: "Someone took a big L, don't know how that felt" },
  { tijd: 57, tekst: "Lookin' at you sideways, party on tilt" },
  { tijd: 59.5, tekst: "Ooh-ooh-ooh" },
  { tijd: 62, tekst: "Some things you just can't refuse" },
  { tijd: 64.5, tekst: "She wanna ride me like a cruise" },
  { tijd: 67.5, tekst: "And I'm not tryna lose" },
  { tijd: 71.5, tekst: "Then you're left in the dust" },
  { tijd: 74, tekst: "Unless I stuck by ya" },
  { tijd: 76.5, tekst: "You're the sunflower" },
  { tijd: 79, tekst: "I think your love would be too much" },
  { tijd: 82, tekst: "Or you'll be left in the dust" },
  { tijd: 85, tekst: "Unless I stuck by ya" },
  { tijd: 87.5, tekst: "You're the sunflower" },
  { tijd: 89.5, tekst: "" },
  { tijd: 90, tekst: "You're the sunflower" },
  { tijd: 92, tekst: "Every time I'm leavin' on you (ooh)" },
  { tijd: 95, tekst: "You don't make it easy, no (no, no)" },
  { tijd: 97, tekst: "Wish I could be there for you" },
  { tijd: 100, tekst: "Give me a reason to, oh (oh)" },
  { tijd: 103, tekst: "Every time I'm walkin' out" },
  { tijd: 105, tekst: "I can hear you tellin' me to turn around" },
  { tijd: 107.5, tekst: "Fightin' for my trust and you won't back down" },
  { tijd: 110, tekst: "Even if we gotta risk it all right now, oh (now)" },
  { tijd: 113, tekst: "I know you're scared of the unknown ('known)" },
  { tijd: 116, tekst: "You don't wanna be alone (alone)" },
  { tijd: 118, tekst: "I know I always come and go (and go)" },
  { tijd: 121, tekst: "But it's out of my control" },
  { tijd: 124.5, tekst: "And you'll be left in the dust" },
  { tijd: 127, tekst: "Unless I stuck by ya" },
  { tijd: 130, tekst: "You're the sunflower" },
  { tijd: 132.5, tekst: "I think your love would be too much" },
  { tijd: 135, tekst: "Or you'll be left in the dust" },
  { tijd: 138, tekst: "Unless I stuck by ya" },
  { tijd: 140.5, tekst: "You're the sunflower" },
  { tijd: 142.5, tekst: "" },
  { tijd: 143, tekst: "You're the sunflower (yeah)" },
];

function playGeluid() {
  const mijnGeluid = document.querySelector("audio");
  const songtekst = document.querySelector("audio + p");
  //als muzie aangaat tekst toevoegen
  if (mijnGeluid.paused) {
    mijnGeluid.play();
    songtekst.classList.add("sunflower");
    document;
  }
  // als muziek op pauze gaat muziek stoppen en tekst weg
  else {
    mijnGeluid.pause();
    songtekst.classList.remove("sunflower");
    songtekst.textContent = "";
  }
}
//selecteerd gewoon de toggle
const mijnGeluid = document.querySelector("audio");
const songtekst = document.querySelector("audio + p");
//zorgt voor dat de songtekst word bijgewerkt
mijnGeluid.addEventListener("timeupdate", function () {
  if (songtekst.classList.contains("sunflower")) {
    let huidigeRegel = "";
    //hier kijkt hoe op hoeveel tijd afspelen de mp 3 is en welke regel hij dan moet tonen
    for (const regel of regels) {
      if (mijnGeluid.currentTime >= regel.tijd) {
        huidigeRegel = regel.tekst;
      }
    }

    songtekst.textContent = huidigeRegel;
  }
});

function vlieg() {
  const vliegimg = document.querySelector("body > button:nth-of-type(2) img");
  vliegimg.src = "img/vliegtuig.png";

  document.body.classList.remove("vlieg");
}

function stortneer() {
  const vliegimg = document.querySelector("body > button:nth-of-type(2) img");
  vliegimg.src = "img/neerstort-vliegtuig.gif";

  const vliegimgsrc = vliegimg.src;
  vliegimg.src = vliegimgsrc.split("?")[0] + "?t=" + new Date().getTime();

  document.body.classList.add("vlieg");
}
