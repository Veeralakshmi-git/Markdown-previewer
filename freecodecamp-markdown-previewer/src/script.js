import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const defaultContent = `


# Hello, 
## You'r welcome 



\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**Some bold text**

> Block Quote

1. First list item
2. Second list item
`

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextareaChange }) => 
  <textarea value={content} onChange={handleTextareaChange} id="editor" />

const Previewer = ({content}) => (
  <div id="preview" 
    dangerouslySetInnerHTML={{
      __html: marked(content, { renderer: renderer })
    }}
  />
);

const App = () => {
  const [content, setContent] = React.useState(defaultContent)
  
  const handleTextareaChange = (event) => {
    setContent(event.target.value)
  }

  return (
    <div class="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Previewer content={content} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"));
