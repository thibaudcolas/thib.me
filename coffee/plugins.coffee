###
# Console-lacking browsers.
###

# Avoid `console` errors in browsers that lack a console.
unless window.console and console.log
	do () ->
    noop = ->
    methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn']
    console = window.console = {}
    console[method] = noop for method in methods
    return

