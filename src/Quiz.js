import React, { useState } from "react";

export default function Quiz({ data, updateData }) {
  const [startQuiz, setStartQuiz] = useState(false);
  const handleAnswerOptionClick = (isCorrect) => {
    var que = {
      num1: num1,
      num2: num2,
      operator: operators[selectedOperator].sign,
      isCorrect: isCorrect,
      ans: operators[selectedOperator].method(num1, num2)
    };

    if (isCorrect) {
      updateData((prevState) => ({
        ...prevState,
        score: data.score + 1
      }));
    }

    const nextQuestion = data.currentQuestion + 1;
    if (nextQuestion < 20) {
      updateData((prevState) => ({
        ...prevState,
        currentQuestion: data.currentQuestion + 1,
        questions: [...data.questions, que]
      }));
    } else {
      updateData((prevState) => ({
        ...prevState,
        showScore: true,
        questions: [...data.questions, que]
      }));
    }
  };

  const handleStart = () => {
    setStartQuiz(true);
  };

  var operators = [
    {
      sign: "+",
      method: function (a, b) {
        return a + b;
      }
    },
    {
      sign: "*",
      method: function (a, b) {
        return a * b;
      }
    },
    {
      sign: "/",
      method: function (a, b) {
        return a / b;
      }
    },
    {
      sign: "-",
      method: function (a, b) {
        return a - b;
      }
    }
  ];

  var num1 = ~~(Math.random() * 10);
  var num2 = ~~(Math.random() * 10);

  var selectedOperator = Math.floor(Math.random() * operators.length);

  return (
    <div className="app">
      {!startQuiz ? (
        <div>
          <button onClick={() => handleStart()}>Start Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {data.currentQuestion + 1}</span>/{20}
            </div>
            <div className="question-text">
              What is {num1} {operators[selectedOperator].sign} {num2} ?{" "}
              {/* {operators[selectedOperator].method(num1, num2)} */}
            </div>
          </div>
          <div className="answer-section">
            {operators.map((answerOption, index) => (
              <button
                key={index}
                onClick={() =>
                  handleAnswerOptionClick(
                    operators[selectedOperator].sign === answerOption.sign
                  )
                }
              >
                {answerOption.method(num1, num2)}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
