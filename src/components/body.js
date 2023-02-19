import { useState } from "react";
import "../styles/body.css";

function Body({ wordData, isPending }) {
    console.log(wordData);

  let [isPlaying, setIsPlaying] = useState(false);

  let nouns_arr = [];
  let verbs_arr = [];
  let adjective_arr = [];
  let adverb_arr = [];

  let nouns_list = wordData.filter((word) => {
    if (word.meanings[0].partOfSpeech === "noun") {
      nouns_arr.push(word.meanings[0]);
      // if (nouns_arr.length > 0) {
      //     setIsNoun(false);
      //     }
    }
    return nouns_arr;
  });

  let verbs_list = wordData.filter((word) => {
    if (word.meanings[0].partOfSpeech === "verb") {
      verbs_arr.push(word.meanings[0]);
    }
    return nouns_arr;
  });

  let adj_list = wordData.filter((word) => {
    if (word.meanings[0].partOfSpeech === "adjective") {
      adjective_arr.push(word.meanings[0]);
    }
    return nouns_arr;
  });

  let adverb_list = wordData.filter((word) => {
    if (word.meanings[0].partOfSpeech === "adverb") {
      adverb_arr.push(word.meanings[0]);
    }
    return nouns_arr;
  });

  let noun_definitions = nouns_arr.map((word) => {
    return word.definitions.map((def) => {
      return (
        <li>
          <span>{def.definition}</span>
        </li>
      );
    });
  });

  let verb_definitions = verbs_arr.map((word) => {
    return word.definitions.map((def) => {
      return (
        <li>
          <span>{def.definition}</span>
        </li>
      );
    });
  });

  let adjective_definitions = adjective_arr.map((word) => {
    return word.definitions.map((def) => {
      return (
        <li>
          <span>{def.definition}</span>
        </li>
      );
    });
  });

  let adverb_definitions = adverb_arr.map((word) => {
    return word.definitions.map((def) => {
      return (
        <li>
          <span>{def.definition}</span>
        </li>
      );
    });
  });

  let playState = isPlaying ? "pause" : "play_arrow";

  function handlePlay() {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  }

  return (
    <main>
      {isPending && (
        <div id="loader">
          <div class="loaderball" id="ball1"></div>
          <div class="loaderball" id="ball2"></div>
          <div class="loaderball" id="ball3"></div>
        </div>
      )}
      {isPending || (
        <>
          <div className="word">
            <h2>{wordData[0].word}</h2>
            <h3 id="phonetic">{wordData[0].phonetic}</h3>
            <button>
              <i onClick={handlePlay} className="material-icons">
                {playState}
              </i>
            </button>
          </div>
          <div className="meaning">
            <span className="span">
              <h3 id="noun-title">noun</h3>
              <hr />
            </span>
            <h3 id="meaning-title">Meaning</h3>
          </div>
          <ul className="list noun">{noun_definitions}</ul>
          <span id="synonyms">
            <h3>Synonyms</h3>
            <h3 id="syn">Electric guitar</h3>
          </span>
          <span className="span">
            <h3 id="noun-title">verb</h3>
            <hr />
          </span>
          <h3 id="meaning-title">Meaning</h3>
          <ul className="list verb">{verb_definitions}</ul>
          <span className="span">
            <h3 id="noun-title">adjective</h3>
            <hr />
          </span>
          <h3 id="meaning-title">Meaning</h3>
          <ul className="list verb">{adjective_definitions}</ul>
          <span className="span">
            <h3 id="noun-title">adverb</h3>
            <hr />
          </span>
          <h3 id="meaning-title">Meaning</h3>
          <ul className="list verb">{adverb_definitions}</ul>
        </>
      )}
    </main>
  );
}

export default Body;
