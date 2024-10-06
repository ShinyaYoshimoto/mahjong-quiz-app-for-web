import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `mahjong-quiz-app-for-web`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: [process.env.API_URL]
      }
    }
  ]
};

export default config;
