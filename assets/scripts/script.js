function playGeluid() {
  const mijnGeluid = document.querySelector("audio");

  if (mijnGeluid.paused) {
    mijnGeluid.play();
  } else {
    mijnGeluid.pause();
  }
}
