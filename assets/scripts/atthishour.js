import addHours from "date-fns/add_hours";
import distanceInWordsStrict from "date-fns/distance_in_words_strict";
import format from "date-fns/format";
import isBefore from "date-fns/is_before";
import malarkey from "malarkey";
import Papa from "papaparse";
import plyr from "plyr";

const tickerDelay = 120000;
const tweetDelay = 90000;
const showTime = addHours(
  new Date(document.querySelector("body").getAttribute("data-showtime")),
  4
);

function displayTicker(source) {
  if (!source) return;
  Papa.parse(source, {
    download: true,
    complete: function(results) {
      const opts = {
        typeSpeed: 0,
        pauseDelay: tickerDelay,
      };
      const ticker = malarkey(document.querySelector(".ticker"), opts);
      let index = -1;
      window.setInterval(function() {
        index = (index + 1) % results.data.length;
        ticker
          .type(results.data[index][0])
          .pause()
          .clear();
      }, 0);
    },
  });
}

function displayTwitter(source) {
  if (!source) return;
  Papa.parse(source, {
    download: true,
    complete: function(results) {
      const tweets = document.querySelector(".tweets");
      insertTweet(results.data[0], tweets);
      let index = 0;
      window.setInterval(function() {
        index = (index + 1) % results.data.length;
        insertTweet(results.data[index], tweets);
      }, tweetDelay);
    },
  });
}

function insertTweet(data, container) {
  const header = document.querySelector(".tweets h2");
  const tweet = document.createElement("p");
  const handle = document.createElement("span");
  const tweetContent = document.createTextNode(data[1]);
  const handleContent = document.createTextNode(data[0]);
  handle.classList.add("tweet__handle");
  handle.appendChild(handleContent);
  tweet.classList.add("tweet");
  tweet.classList.add("animated");
  tweet.classList.add("fadeInLeft");
  tweet.appendChild(handle);
  tweet.appendChild(tweetContent);
  header.parentNode.insertBefore(tweet, header.nextSibling);
  container.insertAfter;
}

function insertAndStartLivestream() {
  let request = new XMLHttpRequest();

  request.open("GET", "/data", true);

  request.onload = function() {
    const overlay = document.querySelector(".overlay");
    const player = document.createElement("div");
    let id;
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText);
      id = data.id;
    } else {
      id = "SxWKffqBjMM";
    }
    player.classList.add("livestream");
    player.setAttribute("data-type", "youtube");
    player.setAttribute("data-video-id", id);
    overlay.parentNode.insertBefore(player, overlay.nextElementSibling);

    const players = plyr.setup(".livestream", {
      autoplay: 1,
      volume: 1,
      controls: [],
    });
    players[0].play();
  };

  request.send();
}

function countDown() {
  const countdown = document.querySelector(".countdown");
  countdown.textContent = "in " + distanceInWordsStrict(Date.now(), showTime);
}

function timedUpdate() {
  countDown();
  if (isBefore(Date.now(), showTime)) {
    setTimeout(timedUpdate, 1000);
  } else {
    const broadcast = document.querySelector(".broadcast");
    const countdown = document.querySelector(".countdown");
    broadcast.classList.add("broadcast--live");
    countdown.textContent = "from the Halifax Courthouse";
    insertAndStartLivestream();
  }
}

displayTicker(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSjOTdOXToGa8Ax-vnmv0T0XEhHobxJZ7xEHyrfqYU_e6349V0JisB0pOYGOnB3YnyEd-Ty76JmYh0B/pub?output=csv"
);

displayTwitter(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSW55acOvnBDUnGKBIg7ELD-NKHydWOkWMbQAf0HqD6mpgUrcI2OJY1BH7vkh24k-0MzS0B2fmthqAG/pub?output=csv"
);

console.log(format(Date.now(), "MMMM Do, YYYY @ HH:mm")); // eslint-disable-line
console.log(format(showTime, "MMMM Do, YYYY @ HH:mm")); // eslint-disable-line

if (isBefore(Date.now(), showTime)) {
  timedUpdate();
} else {
  const broadcast = document.querySelector(".broadcast");
  const countdown = document.querySelector(".countdown");
  broadcast.classList.add("broadcast--live");
  countdown.textContent = "from the Halifax Courthouse";
  insertAndStartLivestream();
}
