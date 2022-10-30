import './Result.scss'

export default function Result({result}){
    const output = {
        "Id": "91b0b21c20c3442a8ad29bb9b9ddb1d7",
        "RecognitionStatus": "Success",
        "Offset": 4300000,
        "Duration": 9700000,
        "Channel": 0,
        "DisplayText": "Hello world.",
        "SNR": 23.383562,
        "NBest": [
          {
            "Confidence": 0.9226262,
            "Lexical": "hello world",
            "ITN": "hello world",
            "MaskedITN": "hello world",
            "Display": "Hello world.",
            "PronunciationAssessment": {
              "AccuracyScore": 64.0,
              "FluencyScore": 100.0,
              "CompletenessScore": 100.0,
              "PronScore": 78.4
            },
            "Words": [
              {
                "Word": "hello",
                "Offset": 4300000,
                "Duration": 4700000,
                "PronunciationAssessment": {
                  "AccuracyScore": 81.0,
                  "ErrorType": "None"
                },
                "Syllables": [
                  {
                    "Syllable": "heh",
                    "PronunciationAssessment": { "AccuracyScore": 90.0 },
                    "Offset": 4300000,
                    "Duration": 1700000
                  },
                  {
                    "Syllable": "low",
                    "PronunciationAssessment": { "AccuracyScore": 76.0 },
                    "Offset": 6100000,
                    "Duration": 2900000
                  }
                ],
                "Phonemes": [
                  {
                    "Phoneme": "h",
                    "PronunciationAssessment": { "AccuracyScore": 89.0 },
                    "Offset": 4300000,
                    "Duration": 1300000
                  },
                  {
                    "Phoneme": "eh",
                    "PronunciationAssessment": { "AccuracyScore": 92.0 },
                    "Offset": 5700000,
                    "Duration": 300000
                  },
                  {
                    "Phoneme": "l",
                    "PronunciationAssessment": { "AccuracyScore": 92.0 },
                    "Offset": 6100000,
                    "Duration": 1100000
                  },
                  {
                    "Phoneme": "ow",
                    "PronunciationAssessment": { "AccuracyScore": 66.0 },
                    "Offset": 7300000,
                    "Duration": 1700000
                  }
                ]
              },
              {
                "Word": "world",
                "Offset": 9100000,
                "Duration": 4900000,
                "PronunciationAssessment": {
                  "AccuracyScore": 48.0,
                  "ErrorType": "None"
                },
                "Syllables": [
                  {
                    "Syllable": "werrld",
                    "PronunciationAssessment": { "AccuracyScore": 48.0 },
                    "Offset": 9100000,
                    "Duration": 4900000
                  }
                ],
                "Phonemes": [
                  {
                    "Phoneme": "w",
                    "PronunciationAssessment": { "AccuracyScore": 82.0 },
                    "Offset": 9100000,
                    "Duration": 300000
                  },
                  {
                    "Phoneme": "er",
                    "PronunciationAssessment": { "AccuracyScore": 72.0 },
                    "Offset": 9500000,
                    "Duration": 700000
                  },
                  {
                    "Phoneme": "r",
                    "PronunciationAssessment": { "AccuracyScore": 53.0 },
                    "Offset": 10300000,
                    "Duration": 1000000
                  },
                  {
                    "Phoneme": "l",
                    "PronunciationAssessment": { "AccuracyScore": 40.0 },
                    "Offset": 11400000,
                    "Duration": 700000
                  },
                  {
                    "Phoneme": "d",
                    "PronunciationAssessment": { "AccuracyScore": 32.0 },
                    "Offset": 12200000,
                    "Duration": 1800000
                  }
                ]
              }
            ]
          }
        ]
      }
      
    return(
        <div>
            <p>AccuracyScore:</p>
            <p>{result.NBest[0].PronunciationAssessment.AccuracyScore}</p>
            <p>Completeness: </p>
            <p>{result.NBest[0].PronunciationAssessment.CompletenessScore}</p>
            <p>Fluency: </p>
            <p>{result.NBest[0].PronunciationAssessment.FluencyScore}</p>
            <p>Pronounciation:</p>
            <p>{result.NBest[0].PronunciationAssessment.PronScore}</p>
        </div>
        
    )
}