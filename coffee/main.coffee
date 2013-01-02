$ ->
	$content = $ '#content'

	###
	# Initializing
	###

	$('h1').fitText 0.7

	meny = Meny.create()
	api = TwitterAPI()

	$('abbr').tooltip()
	$('#thibaudcolas').tooltip()

	###
	# Contact form manager.
	###

	# Contact form fields.
	$contact 	 = $ '#contact-js'
	$mail 		 = $ '#mail'
	$message 	 = $ '#message'
	$counter 	 = $ '.char-counter'
	mailCheck  = /@/

	# Increments and changes color according to length of input.
	charCount = ->
		count = $message.val().length
		$counter.html count
		$counter.css {
			'color': "hsl(210, #{count / 3}%, 50%",
			'text-shadow': "0 0 1 px hsl(210, #{count / 3}%, 70%)"
		}

	$message.on 'keyup', charCount
	$message.change charCount

	# Only submit if fields are complete and valid.
	$contact.on 'submit', ->
		address = $mail.val()
		input = $message.val()
		address isnt '' and input isnt '' and mailCheck.test address

	###
	# Scrolling with anchor links.
	###

	# Nav links & back to top links.
	$('ul.nav a, a.to-top').on 'click', (e) ->
		e.preventDefault()
		destination = $($(@).attr 'href').offset().top
		$content.stop().animate {scrollTop: destination}, 500

	###
	# Information hiding for spam bots.
	###

	# Concatenates all chars from charcodes.
	decode = (arr) -> arr.reduce ((acc = '', car, i) -> acc + String.fromCharCode car - i), ''

	# Mail hiding.
	spam_txt = [116,105,107,101,68,121,110,112,106,55,119,112]
	correctMail = decode spam_txt
	$('a.remplacement').attr 'href', "mailto:" + correctMail
	$('span.remplacement').html correctMail

	# Simpleform token hiding.
	token_txt = [54,103,54,101,60,58,54,64,106,57,110,66,69,114,64,70,118,117,68,117,75,122,71,75,123,76,74,126,128,86,79,82]
	$contact.attr 'action', "http://getsimpleform.com/messages?form_api_token=" + decode token_txt;

	console.log 'Ready For Action !'
