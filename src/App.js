import Quiz from "./Quiz";
import { useState } from "react";

export default function App() {
  const [data, updateData] = useState({
    score: 0,
    showScore: false,
    currentQuestion: 0,
    questions: []
  });

  console.log(data);

  return (
    <div>
      {data.showScore ? (
        <>
          <div className="score-section">
            You scored {data.score} out of {20}
          </div>
          <div>
            {data.questions.map((question) =>
              question.isCorrect === true ? (
                <li>
                  What is {question.num1} {question.operator} {question.num2} ?
                  <span className="green">  ANS: {question.ans}</span>
                </li>
              ) : (
                <li className="red">
                  What is {question.num1} {question.operator} {question.num2} ?
                  <span className="green">  ANS: {question.ans}</span>
                </li>
              )
            )}
          </div>
        </>
      ) : (
        <>
          <Quiz
            key={1}
            data={data}
            updateData={updateData}
          />
          <Quiz
            key={2}
            data={data}
            updateData={updateData}
          />
        </>
      )}
      Score - {data.score}
    </div>
  );
}
