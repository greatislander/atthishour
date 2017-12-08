/* global Papa, plyr, malarkey */

plyr.setup();

function displayTicker(source) {
  if (!source) return;
  Papa.parse(source, {
    download: true,
    complete: function(results) {
      const opts = {
        typeSpeed: 0,
        pauseDelay: 120000,
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

displayTicker(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSjOTdOXToGa8Ax-vnmv0T0XEhHobxJZ7xEHyrfqYU_e6349V0JisB0pOYGOnB3YnyEd-Ty76JmYh0B/pub?output=csv"
);

function displayTwitter(source) {
  if (!source) return;
  Papa.parse(source, {
    download: true,
    complete: function(results) {
      const tweets = document.querySelector(".tweets");
      insertOrReplaceTweet(results.data[0], tweets);
      let index = -1;
      window.setInterval(function() {
        index = (index + 1) % results.data.length;
        insertOrReplaceTweet(results.data[index], tweets);
      }, 120000);
    },
  });
}

function insertOrReplaceTweet(data, container) {
  const currentTweet = document.querySelector(".tweet");
  if (currentTweet) currentTweet.remove();
  const tweet = document.createElement("p");
  const handle = document.createElement("span");
  const tweetContent = document.createTextNode(data[1]);
  const handleContent = document.createTextNode(data[0]);
  handle.classList.add("handle");
  handle.appendChild(handleContent);
  tweet.classList.add("tweet");
  tweet.appendChild(handle);
  tweet.appendChild(tweetContent);
  container.appendChild(tweet);
}

displayTwitter(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSW55acOvnBDUnGKBIg7ELD-NKHydWOkWMbQAf0HqD6mpgUrcI2OJY1BH7vkh24k-0MzS0B2fmthqAG/pub?output=csv"
);
