refreshFrequency: false

style: "border: 0"

render: () ->
	window.sto ?= {
		libs: {},
		data: {},
	}

	window.sto.data.staff = [
		'Andy Prehall',
		'Ben Gottfried',
		'Bob Breid',
		'Craig Rice',
		'Dan Beach',
		'Dana Thompson',
		'Doug Hamilton',
		'Heather Malecha',
		'Jason Menard',
		'Jeff Dixon',
		'Jennie Moberg',
		'Kelly Kloos',
		'Marc Thomas',
		'Michael Domingues',
		'Michael Strand',
		'Mike Sjulstad',
		'Myron Engle',
		'Nancy Aarsvold',
		'Nhia Lee',
		'Perrin Bishop-Wright',
		'Phinehas Bynum',
		'Rich Graves',
		'Roberta Lembke',
		'Sean Tonko',
		'System',
		'Tim Isom',
		'Tony Skalski',
		'Wendy Woitalla',
	]

	window.sto.data.colors = [
		'red',
		'orange',
		'yellow',
		'green',
		'blue',
		'purple',
		'pink',
		'aqua',
		'silver',
	]

	return ''
