import Handlebars from "handlebars";

const template = `
    <div class="card">
        <button id="counter" onclick="" type="button"></button>
    </div>
`;

function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(++counter));
  setCounter(0);
}

window.addEventListener("load", () => {
  document
    .querySelectorAll<HTMLButtonElement>("#counter")
    .forEach((element) => setupCounter(element));
});

Handlebars.registerPartial("Counter", template);
