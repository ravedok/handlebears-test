import Handlebars from "handlebars";
import "../title/title";
import "../counter/counter";
import "../product-list/product-list";

const template = `
    <div>
        {{#Title}}Cervezas{{/Title}}        
        {{> ProductList }}
    </div>
`;

export const Layout = Handlebars.compile(template);
