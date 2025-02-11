import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <form>
      <label for="full_name">Full Name</label>
      <input type="text" id="full_name" name="full_name" />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" />
      <button type="submit">Submit</button>
    </form>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
