import ReactMarkdown from 'react-markdown';

const Home = () => {
  const markdownContent = `
# Bienvenue.
Site en construction. 
`;

  return <ReactMarkdown className="markdown">{markdownContent}</ReactMarkdown>;
};

export default Home;
