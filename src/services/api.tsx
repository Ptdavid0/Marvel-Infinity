import axios from "axios";
import { md5 } from "./md5";

const publicKey = `8febc5682d83888681744b9d7b0258d6`;
const privateKey = `a514b803a5b03229bd2738a2e2f263114a88caab`;
const ts = Date.now();
const hash = md5(ts + privateKey + publicKey);
let opts = `comics`;
const url = `https://gateway.marvel.com/v1/public/${opts}?apikey=${publicKey}&hash=${hash}&ts=${ts}`;

export default {
  getAllComics: (callback: Function) => {
    opts = "comics";
    axios.get(url).then((response) => {
      if (callback) {
        callback(response);
      }
    });
  },
};
