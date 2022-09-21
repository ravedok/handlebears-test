import "./styles.sass";
import { Title, Counter } from "./components";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    ${Title({ name: "New World" })}
    ${Counter({})}    
  </div>
`;
