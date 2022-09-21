import "./styles.sass";
import { Layout } from "./components";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${Layout({ title: "Mundo" })}  
`;
