import Handlebars from "handlebars";
import { getProducts } from "../../api/getProducts";
import "../product-card/product-card";
import "./product-list.scss";

const products = getProducts();

const template = `
    <ul class="product-list">
        {{#each products}}        
            <li class="product-list-item">{{> ProductCard this }}</li>
        {{/each}}
    </ul>

`;

Handlebars.registerPartial(
  "ProductList",
  Handlebars.compile(template)({ products })
);
