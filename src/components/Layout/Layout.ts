import Handlebars from "handlebars";
import "../Title/Title";
import "../Counter/Counter";
import "../ProductList/ProductList";

const template = `
    <div>
        {{#Title}}Cervezas{{/Title}}        
        {{> ProductList }}
    </div>
`;

export const Layout = Handlebars.compile(template);
