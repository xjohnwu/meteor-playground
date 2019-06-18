import { Meteor } from 'meteor/meteor';
import { getOkexFutures } from '../imports/api/okexFutures';
import { sendError } from '../imports/api/emailAlert';

Meteor.startup(async () => {
  try {
    await getOkexFutures();
  } catch (error) {
    sendError(error);
  }
});
