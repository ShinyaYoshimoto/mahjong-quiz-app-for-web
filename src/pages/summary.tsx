import React from "react";
import { graphql } from "gatsby";

interface Answer {
  isStartPlayer: boolean;
  isDraw: boolean;
  fanCount: number;
  isCorrect: boolean;
  symbolCount: number;
  count: {
    true: number;
    false: number;
  };
}

interface Data {
  allRestApiScoresAnswersSummaries: {
    nodes: {
      answers: Answer[];
    }[];
  };
}
const SummaryPage = ({ data }: { data: Data }) => {
  const answers = data.allRestApiScoresAnswersSummaries.nodes[0].answers;

  return (
    <div>
      <h1>Summaries</h1>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <p>{answer.isStartPlayer ? "親" : "子"}{answer.symbolCount}符{answer.fanCount}飜{answer.isDraw ? "ツモ" : "ロン"}</p>
            <p>正: {answer.count.true} / 誤: {answer.count.false}</p>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query {
    allRestApiScoresAnswersSummaries {
      nodes {
        answers {
          isStartPlayer
          isDraw
          fanCount
          isCorrect
          symbolCount
          count {
            true
            false
          }
        }
      }
    }
  }
`;

export default SummaryPage;