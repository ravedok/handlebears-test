import Handlebars from "handlebars";

const template = "<h1>Hello {{name}}</h1>";

Handlebars.registerPartial("Title", template);
