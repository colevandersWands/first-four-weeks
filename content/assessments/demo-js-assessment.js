/*
	see sorva 118-119
		program dynamics
		memory
		stepping through
	see me - log vs return
		console log
		browser (for later assessments, this example is terminal only)
	HF YES
		this format allows for automatic testing of conceptual understanding 
		after further refinement
	to incorporate
		nm diagrams/animation
		for explaining and tracing
		nm in step-objects
	usage
		folder with folder per assessment code - 1_prompt.js
		they put in answer - 1_response.js
		fit loupe into workflow?
		as programs grow in size and complexity, fields can change and answers can be more abstract
			see plane notes - details of response change with bloom's hierarchy
			incorporate loup directly? - callstack, queue, api's
		scaffolding
			as introduction to empty code
			first few can have empty execution_step objects
*/

// ======= given =======

var tim;

function returner(arg) { return arg };

function logger(arg) { console.log(arg) };

var tim = returner('returned');

var tim = logger('logged');

// ======= assignment - follow execution steps, keeping track of memory along the way =======

var execution_steps = {

		0: { // ------------------ 0 ------------------ 
				memory: { //things the computer knows
						tim: {type: 'undefined', value: 'undefined'},
						returner: {type: 'function', value: 'see line 15'},
						logger: {type: 'function', value: 'see line 16'}		},

				happenings: { // things that happened.  fix this name
						description: "program was initialized (compiling, hoisting, ...)",
						assignments: {logger: 'function', returner: 'function', tim: 'undefined'},
						func_calls: {}		},

				displayed: { /* things a human sees */ },

				other: undefined		},

		1: { // ------------------ 1 ------------------ 
				memory: { //things the computer knows
						tim: {type: 'string', value: 'returned'},
						returner: {type: 'function', value: 'see line 15'},
						logger: {type: 'function', value: 'see line 16'}		},

				happenings: { // things that happened.  fix this name
						description: "returner was executed with argument \'returned\'",
						assignments: 'return value was assigned to variable \'tim\'',
						func_calls: { returner: { args: ['returned'], returned: 'returned' } }		},

				displayed: { /* things a human sees */ },
				other: undefined		},

		2: { // ------------------ 2 ------------------ 
				memory: { //things the computer knows
						tim: {type: 'undefined', value: 'undefined'},
						returner: {type: 'function', value: 'see line 15'},
						logger: {type: 'function', value: 'see line 16'}		},

				happenings: { // things that happened.  fix this name
						description: "logger was executed with argument \'logged\'",
						assignments: "\'tim\' was reassigned to return value",
						func_calls: { logger: { args: ['logged'], returned: 'undefined' } }		},

				displayed: { // things a human sees
						console: 'logged'		},

				other: undefined		}

	};












