import React from "react";
import { AnswerObject } from "../App";
import "../App.css";
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNo: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNo}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button
              style={
                userAnswer?.correctAnswer === answer
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "red" }
              }
              className="start"
              disabled={userAnswer ? true : false}
              onClick={callback}
              value={answer}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
