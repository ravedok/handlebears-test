import Handlebars from "handlebars";
import "../Title/Title";
import "../Counter/Counter";

const template = `
    <div>
        {{#Title}}Cervezas{{/Title}}
        {{> Counter}}
    </div>
`;

export const Layout = Handlebars.compile(template);
