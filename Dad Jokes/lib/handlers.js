import {dadJoke, replyButton} from "./elements.js";
import {getRandomItem} from "./utils.js";
import replies from "../data/replies.js";
import {fetchJoke} from "./jokeFetcher.js";

export async function handleButton() {
    const {joke} = await fetchJoke();
    dadJoke.textContent = joke;
    replyButton.textContent = getRandomItem(replies, replyButton.textContent)
}