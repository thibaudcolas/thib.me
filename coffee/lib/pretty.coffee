###
 * CoffeeScript Pretty Date — Inspired by John Resig's JavaScript PrettyDate
 * Copyright (c) 2011 John Resig (ejohn.org)
 * Licensed under the MIT and GPL licenses.
###

# Takes an ISO time and returns a string representing how long ago the date represents.
prettyDate = (time) ->
  date = new Date if time? then (time.replace /-/g, '/').replace /[TZ]/g, ' ' else ''
  secDiff = (new Date().getTime() - date.getTime()) / 1000
  # 86400 = 24 * 60 * 60 = Number of seconds per day.
  dayDiff = Math.floor secDiff / 86400

  # Error proof. Kinda.
  if isNaN dayDiff or dayDiff < 0 or dayDiff >= 31 then return

  dayDiff == 0 and (
    secDiff < 60 and "#{secDiff}s" or
    secDiff < 3600 and "#{Math.floor secDiff / 60}m" or
    secDiff < 86400 and "#{Math.floor secDiff / 3600}h") or
  dayDiff == 1 and "Hier" or
  dayDiff < 7 and "#{dayDiff}j" or
  dayDiff < 31 and "#{Math.ceil dayDiff / 7}w"
