import Handlebars from "handlebars";
import "./title.scss";

const template = `<h1 class="title">{{content}}</h1>`;

Handlebars.registerHelper("Title", (options) =>
  Handlebars.compile(template)({ content: options.fn(this) })
);
