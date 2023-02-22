import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/body';
import Header from './components/header';

function App() {
let[word,setWord] = useState("")
let [isPending,setPending] = useState(true)
let [wordData,setWordData] = useState([])
let [isAvailable,setAvailable] = useState(true)

  useEffect(()=>{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(resp => resp.json())
    .then((data) =>{
      if (data.length != undefined) {
      setWordData(data)
      setPending(false)}
      else{
        setAvailable(false)
        setPending(true)
        console.log("Error")
      }
      // console.log(data)
    })
  },[word])

  console.log(word);

  return (
    <div className="App">
      <Header setWord = {setWord}/>
      <Body word = {word} isAvailable = {isAvailable} isPending = {isPending} wordData = {wordData}/>
    </div>
  );
}

export default App;
