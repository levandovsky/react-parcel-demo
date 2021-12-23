const tree = {
    tag: "div",
    children: [
        {
            tag: "h1",
            children: ["Hello World"],
        },
        {
            tag: "div",
            children: [
                "Bye",
                {
                    tag: "h3",
                    children: ["Hi"],
                },
                {
                    tag: "p",
                    children: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nihil!"],
                },
            ],
        },
    ],
};

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
