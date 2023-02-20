import { useState } from "react";
import "../styles/body.css";

function Body({ wordData, isPending }) {
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

  function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }

  console.log(uniqueArray);

  // let verbs_list = wordData.filter((word) => {
  //   if (word.meanings[0].partOfSpeech === "verb") {
  //     verbs_arr.push(word.meanings[0]);
  //   }
  //   return nouns_arr;
  // });

  // let adj_list = wordData.filter((word) => {
  //   if (word.meanings[0].partOfSpeech === "adjective") {
  //     adjective_arr.push(word.meanings[0]);
  //   }
  //   return nouns_arr;
  // });

  // let adverb_list = wordData.filter((word) => {
  //   if (word.meanings[0].partOfSpeech === "adverb") {
  //     adverb_arr.push(word.meanings[0]);
  //   }
  //   return nouns_arr;
  // });

  let words_definitions = definitions_arr.map((word) => {
    return word.definitions.map((def) => {
      return (
        <li>
          <span>{def.definition}</span>
        </li>
      );
    });
  });

  // let verb_definitions = verbs_arr.map((word) => {
  //   return word.definitions.map((def) => {
  //     return (
  //       <li>
  //         <span>{def.definition}</span>
  //       </li>
  //     );
  //   });
  // });

  // let adjective_definitions = adjective_arr.map((word) => {
  //   return word.definitions.map((def) => {
  //     return (
  //       <li>
  //         <span>{def.definition}</span>
  //       </li>
  //     );
  //   });
  // });

  // let adverb_definitions = adverb_arr.map((word) => {
  //   return word.definitions.map((def) => {
  //     return (
  //       <li>
  //         <span>{def.definition}</span>
  //       </li>
  //     );
  //   });
  // });

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
        <section>
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
            <span id="synonyms">{wordTypeList}</span>
            <span className="span">
              <h3 id="noun-title">{wordType}</h3>
              <hr />
            </span>
            <h3 id="meaning-title">Meaning</h3>
          </div>
          <ul className="list noun">{words_definitions}</ul>

          {/* <span className="span">
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
          <ul className="list verb">{adverb_definitions}</ul> */}
        </section>
      )}
    </main>
  );
}

export default Body;
