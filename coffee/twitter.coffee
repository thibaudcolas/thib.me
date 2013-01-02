###
# Twitter API calls inspired by Chirp.js.
###

TwitterAPI = () ->
  # GET API call in JSON with parameters already in the URL.
  apiURL = 'http://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&count=7&include_rts=true&exclude_replies=true&screen_name=ThibWeb'
  containerID = 'tweet-container'

  @.textToHTML = (text, entities) ->
    linkWrap = (url, display) -> "<a href=\"#{url}\">#{display}</a>"
    urls_fun = (elt) -> linkWrap elt.expanded_url, elt.display_url
    hashtags_fun = (elt) -> linkWrap 'http://twitter.com/search/%23' + elt.text, elt.text
    user_mentions_fun = (elt) -> linkWrap 'http://twitter.com/' + elt.screen_name, '@' + elt.screen_name
    media_fun = (elt) -> linkWrap elt.expanded_url, elt.display_url

    # Those functions will be used to process links in the tweets.
    linkProcessing = {
      urls : urls_fun,
      hashtags : hashtags_fun,
      user_mentions : user_mentions_fun,
      media : media_fun
    }

    indices = []
    for key, elt of entities when elt.length > 0
        for i in [0..elt.length] when elt[i]?
          e = elt[i]
          indices[e.indices[0]] = {
            start : e.indices[0],
            end : e.indices[1],
            link : linkProcessing[key](e)
          }

    htmlOutput = text
    for i in [indices.length - 1 ... 0] when indices[i]?
      elt = indices[i]
      htmlOutput = (htmlOutput.substr 0, elt.start) + elt.link + (htmlOutput.substr elt.end, htmlOutput.length - 1)

    htmlOutput

  # Apply our HTML template to the tweets.
  @.jsonToHTML = (json) ->
    htmlOutput = ''

    for tweet in json
      htmlOutput += """
        <p class=\"tweet\">
          #{textToHTML tweet.text, tweet.entities}
          <a href=\"http://thib.me/#{tweet.id_str}\" class=\"tweet-link pull-right\">
            <time>#{prettyDate tweet.created_at}</time>
          </a>
        </p>"""

    "<div class=\"tweets\">#{htmlOutput}</div>"

  # Retrieves Tweets for ThibWeb using the Twitter API.
  @.retrieveTweets = ->
    # Define callbacks for each request.
    TwitterAPI.requests = (TwitterAPI.requests ? 0) + 1
    callKey = 'callback' + TwitterAPI.requests;

    # On each callback, parse results into HTML.
    TwitterAPI[callKey] = (json) ->
      json = json.results ? json
      (document.getElementById containerID).innerHTML = jsonToHTML json

    # Call !
    get = document.createElement 'script'
    get.src = apiURL + '&callback=TwitterAPI.' + callKey;
    $('head').append get

    console.log 'Retrieving Tweets ...'

  new TwitterAPI().retrieveTweets() unless @.constructor is TwitterAPI
