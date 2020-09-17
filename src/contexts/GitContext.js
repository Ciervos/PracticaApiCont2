import React from "react";

const GitContext = React.createContext({});

export const GitProvider = GitContext.Provider;

export default GitContext;