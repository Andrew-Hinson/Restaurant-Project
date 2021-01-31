import styles from "./styles.css";
import { headerModule } from "./header.js"
import { homePage } from "./homePage.js"
const content = document.querySelector('#content');
headerModule();
content.appendChild(homePage())








