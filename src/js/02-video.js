import {save, load} from "./storage.js";
import _ from "lodash";
//import throttle from 'lodash.throttle'


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

const updateTime = (currenttime) => {
    save(LOCALSTORAGE_KEY, currenttime.seconds)
}

player.on('timeupdate', _.throttle(updateTime, 1000));

player.setCurrentTime(load(LOCALSTORAGE_KEY));
