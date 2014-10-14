command: 'echo ""',
refreshFrequency: 10000,

style: [
	"left: 25%",
	"top: 0",

	"width: 20%",
	"height: 50vh",

	"text-align: center",

	".details",
	"	padding-top: 0.5rem",

	".time",
	"	font-weight: 200",
	"	font-size: 2em",
	"	color: rgba(255, 255, 255, 0.65)",
	"	padding-bottom: 0.5rem",

	".workers",
	"	font-weight: 500",
	"	font-size: 1.25em",
	"	color: rgba(255, 255, 255, 0.75)",
].join('\n'),

render: function(output) {
	return [
		'<div class="wrapper">',
			'<div class="details"></div>',
			'<h1 class="title">Next Up @Helpdesk</h1>',
		'</div>',
	].join('');
},

update: function(output, domEl) {
	if (!window.sto)             return '';
	if (!window.sto.libs.lodash) return '';
	if (!window.sto.libs.moment) return '';
	if (!window.sto.data.shifts) return '';

	var _      = window.sto.libs.lodash;
	var moment = window.sto.libs.moment;
	var shifts = window.sto.data.shifts;

	var details = domEl.querySelector('.details');
	details.innerHTML = "";

	if (shifts.length === 0) {
		details.textContent = "No more shifts scheduled as of " + moment().format('ha[.]');
		return "";
	}

	var helpdeskShifts = _.reject(shifts, {'Position': 'Library'});

	var time = document.createElement('time');
	time.className = 'time';
	time.textContent = helpdeskShifts[0].time;
	details.appendChild(time);

	var list = document.createElement('ul');
	list.className = 'workers';
	_.each(helpdeskShifts, function(shift) {
		var item = document.createElement('li');
		item.textContent = shift.name;
		list.appendChild(item);
	})

	details.appendChild(list);
}
