const {
  doCommits
} = require('./functions');
const moment = require('moment');

const days = require('./config').days;

days.forEach(day => {
  const date = moment(new Date(day.date).toISOString()).format('dddd DD/MM/YY');
  const today = moment(new Date()).format('dddd DD/MM/YY');
  if (date === today) {
    doCommits(day.value, day.date);
  }
});