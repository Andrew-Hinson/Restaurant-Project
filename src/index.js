import styles from "./styles.css";
import { headerModule } from "./header.js"
import { homePage } from "./homePage.js"
import { menu } from "./menu.js"
import { about } from "./about.js"
const content = document.querySelector('#content');
headerModule();
content.appendChild(about())








