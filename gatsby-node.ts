import path from "path";
import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
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
  `);

  if (result.errors) {
    throw result.errors;
  }

  // 型アサーションを追加
  const summaries = (result.data as { allRestApiScoresAnswersSummaries: { nodes: any[] } }).allRestApiScoresAnswersSummaries.nodes;

  summaries.forEach((summary, index) => {
    createPage({
      path: `/summary/${index}`,
      component: path.resolve("./src/pages/summary.tsx"),
      context: {
        answers: summary.answers,
      },
    });
  });
};