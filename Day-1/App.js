const heading1 = React.createElement(
    "h1",
    {id: "h1"},
    "Namaste from React13"
    );

const heading2 = React.createElement(
    "h2", 
    {id: "h2"}, 
    "Namaste from React23"
    );

const container = React.createElement(
    "div",
    {
        id:"container"
    },
    [heading1, heading2],
    "Namaste🙏 i am a container from React."
    
)
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(container);