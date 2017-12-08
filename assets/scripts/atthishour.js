/* global malarkey, moment, Papa, plyr */

import isBefore from "date-fns/is_before";
import distanceInWordsStrict from "date-fns/distance_in_words_strict";

const tickerDelay = 120000;
const tweetDelay = 90000;
const showTime = "2017-12-17T19:30";

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
  container.insertBefore(tweet, container.firstChild);
}

function countDown() {
  const countdown = document.querySelector(".countdown");
  countdown.textContent =
    "in " + distanceInWordsStrict(Date.now(), new Date(showTime));
}

function timedUpdate() {
  countDown();
  if (isBefore(new Date(), new Date(showTime))) {
    setTimeout(timedUpdate, 1000);
  } else {
    const broadcast = document.querySelector(".broadcast");
    const countdown = document.querySelector(".countdown");
    broadcast.classList.add("broadcast--live");
    countdown.textContent = "from the Halifax Courthouse";
  }
}

plyr.setup();

displayTicker(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSjOTdOXToGa8Ax-vnmv0T0XEhHobxJZ7xEHyrfqYU_e6349V0JisB0pOYGOnB3YnyEd-Ty76JmYh0B/pub?output=csv"
);

displayTwitter(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSW55acOvnBDUnGKBIg7ELD-NKHydWOkWMbQAf0HqD6mpgUrcI2OJY1BH7vkh24k-0MzS0B2fmthqAG/pub?output=csv"
);

if (isBefore(new Date(), new Date(showTime))) {
  timedUpdate();
} else {
  const broadcast = document.querySelector(".broadcast");
  const countdown = document.querySelector(".countdown");
  broadcast.classList.add("broadcast--live");
  countdown.textContent = "from the Halifax Courthouse";
}
