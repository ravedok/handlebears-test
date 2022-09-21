import Handlebars from 'handlebars';

const template = '<h1>Hello {{name}}</h1>';
export const Title = Handlebars.compile(template);