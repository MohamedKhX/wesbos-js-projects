import {replyButton} from "./elements.js";
import {handleButton} from "./handlers.js";

export default class App
{
     bootUp() {
         this.registerEvents();
    }

     registerEvents() {
        replyButton.addEventListener('click', handleButton);
    }
}

