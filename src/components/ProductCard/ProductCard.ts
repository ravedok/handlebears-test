import Handlebars from "handlebars";
import "./styles.scss";
import "../../utils/currency-format";

const template = `
    <div class="product-card">
        <div class="product-card-image">
            <img src="/img/{{this.img}}" />
        </div>
        <div class="product-card-content">
            <h4 class="product-card-name">{{this.name}}</h4>
            <p class="product-card-description">{{this.description}}</p>
            <span class="product-card-price">{{currencyFormat this.price}}</span>
        </div>
        <button type="button" class="product-card-add">Agregar</button>
    </div>
`;

Handlebars.registerPartial("ProductCard", template);
