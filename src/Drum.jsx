import "./Drum.module.css";

export const Drum = ({ keyTrigger, url, description }) => {
  const playSound = (keyTrigger) => {
    document
      .getElementById(keyTrigger)
      ?.play()
      .catch((e) => console.log(e));
    document.getElementById("display").innerText = description;
  };
  return (
    <button
      id={`drum-${keyTrigger}`}
      className="drum-pad"
      onClick={() => playSound(keyTrigger)}
    >
      {keyTrigger}
      <audio src={url} id={keyTrigger} className="clip"></audio>
    </button>
  );
};
