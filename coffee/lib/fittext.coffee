###
# FitText.js 1.1 in CoffeeScript
#
# Copyright 2011, Dave Rupert http://daverupert.com
# Released under the WTFPL license
# http://sam.zoy.org/wtfpl/
#
# Date: Thu May 05 14:23:00 2011 -0600
###

$ = jQuery
$.fn.fitText = (compressor = 1, options) ->
	settings = {
    'minFontSize': Number.NEGATIVE_INFINITY
    'maxFontSize': Number.POSITIVE_INFINITY
  }
  
  if options then $.extend(settings, options)

  @each ->
  	$this = $(@)
  	# Resizer() resizes items based on the object width divided by the compressor * 10
  	resizer = ->
  		newSize = $this.width() / (compressor * 10)
  		$this.css 'font-size', Math.max (Math.min newSize, parseFloat settings.maxFontSize),  parseFloat settings.minFontSize

  	# Call once to set.
  	resizer()

  	# Call on resize. Opera debounces their resize by default.
  	$(window).resize resizer

