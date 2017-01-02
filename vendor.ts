/*********************
 * 
 * This is needed to get moment.js working.
 * This file is included in the angular-cli.json 
 * file in the scripts section.
 * See https://github.com/angular/angular-cli/issues/2141
 * for a further explanation/reason.  
 * Also import * as moment from 'moment' needs to be 
 * imported into the code as well.
 * 
 ********************/

import * as moment from 'moment';

window['moment'] = moment;
