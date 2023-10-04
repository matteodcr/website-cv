import ReactMarkdown from 'react-markdown'
import React from "react";


const Contact = () => {
    const markdownContent = `
## Contact
- [LinkedIn](https://linkedin.com/in/matteodecorsaire)
- [GitHub](https://github.com/matteodcr)
`;

    return (
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
    );
};


export default Contact;
