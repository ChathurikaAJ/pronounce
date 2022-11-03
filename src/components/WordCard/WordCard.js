import PhonemesCard from "../PhonemesCard/PhonemesCard";
import "./WordCard.scss";
import { v4 as uuid } from "uuid";
import SyllableCard from "../SyllableCard/SyllableCard";
import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";

export default function WordCard({ word, pronScore, phonemes,syllables }) {

  const [displaySyllables, setDisplaySyllables] = useState(false)
  const [displayphonemes, setDisplayPhonemes] = useState(false)

  const {languageId} = useParams()
  console.log(languageId);

  useEffect(()=>{
    
    // Syllable and Phoneme names not provided by Azure for french and spanish
    if(languageId === 'english'){
      setDisplayPhonemes(true)
      setDisplaySyllables(true)
    }

    //Syllable names not provided by Azure for Chinese
    if(languageId==='chinese'){
      setDisplayPhonemes(true)
    }
  },[])



  return (
    <div className="word-card">
        <div className="word-card__score">
            <p className="word-card__score-text">{word}</p>
            <p className="word-card__score-text">{pronScore.AccuracyScore}</p>
        </div>
      
      {displaySyllables && <div className="word-card__syllabes">
        {syllables && syllables.map((syllabe) => (
          <SyllableCard
            key={uuid()}
            syllabe={syllabe.Syllable}
            score={syllabe.PronunciationAssessment.AccuracyScore}
          />
        ))}
      </div>}

      {displayphonemes && <div className="word-card__phonemes">
        {phonemes && phonemes.map((phoneme) => (
          <PhonemesCard
            key={uuid()}
            phoneme={phoneme.Phoneme}
            score={phoneme.PronunciationAssessment.AccuracyScore}
          />
        ))}
      </div>}

    </div>
  );
}
