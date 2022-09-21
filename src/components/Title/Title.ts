import Handlebars from "handlebars";

const template = "<h1>{{content}}</h1>";

Handlebars.registerHelper("Title", (options) =>
  Handlebars.compile(template)({ content: options.fn(this) })
);
