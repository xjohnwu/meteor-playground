import { Meteor } from 'meteor/meteor';
import {getOkexFutures} from '../imports/api/okexFutures.js'

Meteor.startup(() => {
  getOkexFutures();
});
