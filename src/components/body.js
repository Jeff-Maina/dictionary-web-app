import { useState } from "react";
import "../styles/body.css";

function Body({ word, wordData, isPending, isAvailable }) {
  console.log(wordData);

  let [isPlaying, setIsPlaying] = useState(false);
  let [wordType, setWordType] = useState("noun");
  let [dataRendered, setDataRendered] = useState("verb");

  function handleRender(value) {
    console.log(value);
    setWordType(value);
  }

  let definitions_arr = [];
  let verbs_arr = [];
  let adjective_arr = [];
  let adverb_arr = [];

  let definitions_list = wordData.filter((word) => {
    if (word.meanings[0].partOfSpeech === wordType) {
      definitions_arr.push(word.meanings[0]);
    }
  });

  let arr = [];

  let firstType = wordData.map((word) => {
    return arr.push(word.meanings[0].partOfSpeech);
  });

  let uniqueArray = removeDuplicates(arr);

  let wordTypeList = uniqueArray.map((word) => {
    return (
      <h3
        onClick={() => {
          handleRender(word);
        }}
        id="syn"
      >
        {" "}
        {word} |
      </h3>
    );
  });

  let pron_arr = []

  let pronunciation =wordData.filter((word) => {
   if (word.meanings[0].partOfSpeech === wordType) {
     return pron_arr.push(word.phonetics.map(word => {return word.audio}));
    }
  }); 


  function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }

  let words_definitions = definitions_arr.map((word) => {
    return word.definitions.map((def) => {
      return (
        <span>
          <li>
            <span>{def.definition}</span>
          </li>
        {def.example && <i> <h3 id="example">"{def.example}"</h3></i>}
        </span>
      );
    });
  });

let synonyms_list = definitions_arr.map((word) => {
  return word.synonyms.map((def) => {
  return (
    <li id="SYN">{def}</li>
    )
  });
})

  function handlePlay() {
    let audio = document.querySelector('audio')
    audio.play();

    // if (isPlaying) {
    //   setIsPlaying(false);
    // } else {
    //   setIsPlaying(true);
      // audio.pause();

    }
  

  return (
    <main>
      {isPending && (
        <div id="loader">
          {isAvailable || (
            <span id="error-message">
              <i className="material-symbols-outlined">sentiment_sad</i>
              <h2>
                No matches found for "<span>{word}</span>"
              </h2>
            </span>
          )}
          {isAvailable && (
            <i id="book-logo" className="material-symbols-outlined">
              auto_stories
            </i>
          )}{" "}
        </div>
      )}
      {isPending || (
        <section>
          <div className="word">
            <h2>{wordData[0].word}</h2>
            <h3 id="phonetic">{wordData[0].phonetic}</h3>
            <button>
              <i onClick={handlePlay} className="material-icons">
                play_arrow
              </i>
            </button>
           {pron_arr.length > 0 && <audio  src={pron_arr[0][0] || pron_arr[0][1] || pron_arr[0][2] || pron_arr[0][3] || pron_arr[0][4] || pron_arr[0][5] || pron_arr[0][6] || pron_arr[0][7]} >
            </audio>}
          </div>
          <div className="meaning">
            <span id="synonyms">{wordTypeList}</span>
            <span className="span">
              <h3 id="noun-title">{wordType}</h3>
              <hr />
            </span>
            <h3 id="meaning-title">Meaning</h3>
          </div>
          <ul className="list noun">{words_definitions}</ul>
          <ul id="synonyms-span"><h2>Synonyms:</h2>{synonyms_list}</ul>
        </section>
      )}
    </main>
  );
}

export default Body;
