import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import './App.css'
import UserForm from './components/UserForm'
import Question from './components/Question'
import Results from './components/Results'
import { UserProvider } from './components/UserContext'


const breedList = [
  "affenpinscher",
  "african",
  "airedale",
  "akita",
  "appenzeller",
  "kelpie/australian",
  "shepherd/australian",
  "indian/bakharwal",
  "basenji",
  "beagle",
  "bluetick",
  "borzoi",
  "bouvier",
  "boxer",
  "brabancon",
  "briard",
  "buhund/norwegian",
  "bulldog/boston",
  "bulldog/english",
  "bulldog/french",
  "bullterrier/staffordshire",
  "cattledog/australian",
  "cavapoo",
  "chihuahua",
  "indian/chippiparai",
  "chow",
  "clumber",
  "cockapoo",
  "collie/border",
  "coonhound",
  "corgi/cardigan",
  "cotondetulear",
  "dachshund",
  "dalmatian",
  "dane/great",
  "swedish/danish",
  "deerhound/scottish",
  "dhole",
  "dingo",
  "doberman",
  "elkhound/norwegian",
  "entlebucher",
  "eskimo",
  "lapphund/finnish",
  "bichon/frise",
  "indian/gaddi",
  "germanshepherd",
  "indian/greyhound",
  "greyhound/italian",
  "groenendael",
  "havanese",
  "hound/afghan",
  "hound/basset",
  "hound/blood",
  "hound/english",
  "hound/ibizan",
  "hound/plott",
  "hound/walker",
  "husky",
  "keeshond",
  "kelpie",
  "kombai",
  "komondor",
  "kuvasz",
  "labradoodle",
  "labrador",
  "leonberg",
  "lhasa",
  "malamute",
  "malinois",
  "maltese",
  "mastiff/bull",
  "mastiff/english",
  "mastiff/indian",
  "mastiff/tibetan",
  "mexicanhairless",
  "mix",
  "mountain/bernese",
  "mountain/swiss",
  "indian/mudhol",
  "newfoundland",
  "otterhound",
  "ovcharka/caucasian",
  "papillon",
  "indian/pariah",
  "pekinese",
  "pembroke",
  "pinscher/miniature",
  "pitbull",
  "pointer/german",
  "pointer/germanlonghair",
  "pomeranian",
  "poodle/medium",
  "poodle/miniature",
  "poodle/standard",
  "poodle/toy",
  "pug",
  "puggle",
  "pyrenees",
  "indian/rajapalayam",
  "redbone",
  "retriever/chesapeake",
  "retriever/curly",
  "retriever/flatcoated",
  "retriever/golden",
  "ridgeback/rhodesian",
  "rottweiler",
  "saluki",
  "samoyed",
  "schipperke",
  "schnauzer/giant",
  "schnauzer/miniature",
  "segugio/italian",
  "setter/english",
  "setter/gordon",
  "setter/irish",
  "sharpei",
  "sheepdog/english",
  "indian/sheepdog",
  "sheepdog/shetland",
  "shiba",
  "shihtzu",
  "spaniel/blenheim",
  "spaniel/brittany",
  "spaniel/cocker",
  "spaniel/irish",
  "spaniel/japanese",
  "spaniel/sussex",
  "spaniel/welsh",
  "spitz/indian",
  "spitz/japanese",
  "springer/english",
  "stbernard",
  "terrier/american",
  "terrier/australian",
  "terrier/bedlington",
  "terrier/border",
  "terrier/cairn",
  "terrier/dandie",
  "terrier/fox",
  "terrier/irish",
  "terrier/kerryblue",
  "terrier/lakeland",
  "terrier/norfolk",
  "terrier/norwich",
  "terrier/patterdale",
  "terrier/russell",
  "terrier/scottish",
  "terrier/sealyham",
  "terrier/silky",
  "terrier/tibetan",
  "terrier/toy",
  "terrier/welsh",
  "terrier/westhighland",
  "terrier/wheaten",
  "terrier/yorkshire",
  "tervuren",
  "vizsla",
  "spanish/waterdog",
  "weimaraner",
  "whippet",
  "wolfhound/irish"
];


const questions = [
  {
    question: "What's your favorite color?",
    options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
  },
  {
    question: "What's your favorite animal?",
    options: ["Dog 🐶", "Cat 🐱", "Bird 🐦", "Fish 🐟"],
  },
  {
    question: "What's your favorite food?",
    options: ["Pizza 🍕", "Burger 🍔", "Salad 🥗", "Sushi 🍣"],
  },
  {
    question: "What's your favorite season?",
    options: ["Spring 🌸", "Summer 🌞", "Fall 🍁", "Winter ❄️"],
  },
  {
    question: "What's your favorite hobby?",
    options: ["Reading 📚", "Gaming 🎮", "Cooking 🍳", "Traveling 🌎"],
  },
  {
    question: "What's your favorite movie genre?",
    options: ["Action 🎬", "Comedy 😂", "Horror 😱", "Romance ❤️"],
  }
];

function App() {

  const [userName, setuserName] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [dog, setDog] = useState("");
  const [artwork, setArtwork] = useState("");

  function handleAnswer(answer) {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  
  function handleUserFormSubmit(name) {
    setuserName(name);
  };
  
  async function determineDog() {

    let dogBreed = breedList[(Math.floor(Math.random() * breedList.length))]
    setDog(dogBreed);
    let response = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`);
    let data = await response.json();
    setArtwork(data.message);
    
  };

  useEffect(
    function () {
      if (currentQuestionIndex === questions.length) {
        determineDog();
      }
    },
    [currentQuestionIndex]
  );

  return (


    <UserProvider value={{ userName, setuserName }}>

    <div>
      <Header />
      <Routes>
  <Route path="/" element={<UserForm onSubmit={handleUserFormSubmit} />} />
  <Route
    path="/quiz"
    element={
      currentQuestionIndex < questions.length ? (
        <Question question={questions[currentQuestionIndex].question} options={questions[currentQuestionIndex].options} onAnswer={handleAnswer} />
      ) : (
        <Results dog={dog} artwork={artwork} />
      )
    }
  />
</Routes>
    </div>

    </UserProvider>


  )
}

export default App
