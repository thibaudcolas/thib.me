// https://stackoverflow.com/a/22780569/1798491
function jsonp(url, callback) {
  var callbackName = "jsonp_callback_" + Math.round(100000 * Math.random());
  window[callbackName] = function(data) {
    delete window[callbackName];
    document.body.removeChild(script);
    callback(data);
  };

  var script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.src =
    url + (url.indexOf("?") >= 0 ? "&" : "?") + "callback=" + callbackName;
  document.body.appendChild(script);
}

// https://stackoverflow.com/a/6234804/1798491
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

var github = (function() {
  function render(target, repos) {
    var fragment = "";

    for (var i = 0; i < repos.length; i++) {
      fragment +=
        '<li><a href="' +
        repos[i].html_url +
        '">' +
        repos[i].name +
        "</a><p>" +
        escapeHtml(repos[i].description || "") +
        "</p></li>";
    }
    target.innerHTML = fragment;
  }

  return {
    showRepos: function(options) {
      var container = document.querySelector(options.target);
      var user = container.dataset.user;
      var count = parseInt(container.dataset.count, 10);

      jsonp(
        "https://api.github.com/users/" + user + "/repos?sort=pushed",
        function(data) {
          var repos = [];
          if (!data || !data.data) {
            return;
          }
          for (var i = 0; i < data.data.length; i++) {
            // Skip forks.
            if (data.data[i].fork) {
              continue;
            }
            repos.push(data.data[i]);
          }
          if (count) {
            repos.splice(count);
          }
          render(container, repos);
        }
      );
    },
  };
})();

github.showRepos({
  target: "#gh_repos",
});
