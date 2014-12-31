command: '/usr/bin/env python scripts/get_tickets.py closed 1&2> /dev/null | cat data/closed-tickets.json',

refreshFrequency: 30000,
lastUpdateTime: undefined,

style: "left: 25%",

render: function() {
	return '<status-widget>Closed Tickets: <last-updated/></status-widget>'
},

update: function(output, domEl) {
	domEl.querySelector('last-updated').textContent = 'Initializing...'

	if (!window.loaded) {
		var self = this
		self.stop()
		window.clearTimeout(self.setTimeoutId)
		self.setTimeoutId = window.setTimeout(self.refresh, 1000)
	}

	domEl.querySelector('last-updated').textContent = 'Loading...'

	var ticketData = JSON.parse(output).data
	window.data.closedTickets = ticketData
	window.events.emit('closed-tickets', ticketData)

	this.lastUpdateTime = moment(ticketData.lastUpdated)
	domEl.querySelector('last-updated').textContent = moment(this.lastUpdateTime).calendar()
	this.start()
},
