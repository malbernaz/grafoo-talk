import React from "react";
import Highlight from "react-highlight";

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
