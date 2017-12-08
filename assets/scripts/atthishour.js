/* global Papa, plyr, malarkey */

function displayTicker(source) {
  const delay = 120000;
  if (!source) return;
  Papa.parse(source, {
    download: true,
    complete: function(results) {
      const opts = {
        typeSpeed: 0,
        pauseDelay: delay,
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
  const delay = 90000;
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
      }, delay);
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

plyr.setup();

displayTicker(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSjOTdOXToGa8Ax-vnmv0T0XEhHobxJZ7xEHyrfqYU_e6349V0JisB0pOYGOnB3YnyEd-Ty76JmYh0B/pub?output=csv"
);

displayTwitter(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSW55acOvnBDUnGKBIg7ELD-NKHydWOkWMbQAf0HqD6mpgUrcI2OJY1BH7vkh24k-0MzS0B2fmthqAG/pub?output=csv"
);
