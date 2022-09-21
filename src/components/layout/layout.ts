import Handlebars from "handlebars";
import "../title/title";
import "../product-list/product-list";

const template = `
    <div>
        {{#Title}}Cervezas{{/Title}}        
        {{> ProductList }}
    </div>
`;

export const Layout = Handlebars.compile(template);
