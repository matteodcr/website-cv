import ReactMarkdown from 'react-markdown'
import React from "react";

const Home = () => {
    const markdownContent = `
# Bienvenue.
Site en construction. 
`;

    return (
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
    );
};


export default Home;
