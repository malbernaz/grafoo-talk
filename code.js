import React from "react";
import Highlight from "react-highlight";
import { PINK } from "./config";

export const CodeLayout = ({ children }) => <div style={{ textAlign: "left" }}>{children}</div>;

const schemaCode = `
type Project {
  name: String
  tagline: String
  contributors: [User]
}
`;

export const Schema = () => <Highlight language="graphql">{schemaCode.trim()}</Highlight>;

const queryCode = `
{
  project(name: "Grafoo") {
    tagline
  }
}
`;

export const Query = () => <Highlight language="graphql">{queryCode.trim()}</Highlight>;

const payloadCode = `
{
  "project": {
    "tagline": "A GraphQL Client and Toolkit"
  }
}
`;

export const Payload = () => <Highlight language="json">{payloadCode.trim()}</Highlight>;

const simpleRequest = `
function request(query, variables) {
  const init = {
    method: "POST",
    body: JSON.stringify({ query, variables }),
    headers: {
      "content-type": "application/json"
    }
  };

  return fetch("http://some.graphql.api", init)
    .then(res => res.json());
}
`;

export const SimpleRequest = () => (
  <Highlight language="javascript">{simpleRequest.trim()}</Highlight>
);

const graphqlExecution = `
import { execute, parse } from "graphql";
import schema from "./schema";

const transport = (query, variableValues) =>
  execute({
    schema,
    documentAst: parse(query),
    variableValues
  });
`;

export const GQLExec = () => <Highlight language="javascript">{graphqlExecution.trim()}</Highlight>;

const gqlStyle = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
    textAlign: "left",
    fontSize: "1.2rem"
  },
  heading: {
    color: PINK,
    fontSize: "2rem",
    margin: 0
  }
};

export const GQL = () => (
  <div style={gqlStyle.container}>
    <h3 style={gqlStyle.heading}>Descreva os seus dados</h3>
    <h3 style={gqlStyle.heading}>Peça por dados específicos</h3>
    <h3 style={gqlStyle.heading}>Obtenha resultados previsíveis</h3>
    <Schema />
    <Query />
    <Payload />
  </div>
);

export const endSay = `
muito tchao\n
      preocupação\n
  tão fim
`;
