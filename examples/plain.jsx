const tree = (
    <div>
        <h1>Hello World</h1>
        <div>
            Bye
            <h3>Hi</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nihil!</p>
        </div>
    </div>
);

const render = (obj) => {
    const {tag, children} = obj;

    const element = document.createElement(tag);

    children.forEach((c) => {
        if (typeof c === "string") {
            element.appendChild(document.createTextNode(c));
        } else {
            const child = render(c);
            element.appendChild(child);
        }
    });

    return element;
};

const rendered = render(tree);

const app = document.getElementById("app");

app.appendChild(rendered);
