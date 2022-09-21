import Handlebars from "handlebars";

const currencyFormat = (price: number) =>
  Intl.NumberFormat("en-US").format(price);

Handlebars.registerHelper("currencyFormat", currencyFormat);
