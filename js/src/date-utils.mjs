import moment from 'moment';

// Moment is strictly datetimes. All times need a common day.
const timeDay = moment().set({ year: 0, month: 0, date: 1 }).startOf('day');

/**
 * Return a moment from the given datetime values.
 * @param  {Number} [year]
 * @param  {Number} [month]
 * @param  {Number} [day]
 * @param  {Number} [hour]
 * @param  {Number} [minute]
 * @param  {Number} [second]
 * @param  {Number} [millisecond]
 * @return {Moment}
 */
function datetime(
  year = 1970,
  month = 1,
  day = 1,
  hour = 0,
  minute = 0,
  second = 0,
  millisecond = 0,
) {
  return moment().set({
    year,
    month: month - 1,
    date: day,
    hour,
    minute,
    second,
    millisecond,
  });
}

/**
 * Return a date-like moment.
 * Dates always start at the beginning of the day.
 * @param {Number} [year]
 * @param {Number} [month]
 * @param {Number} [day]
 * @return {Moment}
 */
function date(year = 1970, month = 1, day = 1) {
  return moment().set({ year, month: month - 1, date: day }).startOf('day')
}

/**
 * Return a time-like moment.
 * Times share a date such that a later time is always a greater moment.
 * @param {Number} [hour]
 * @param {Number} [minute]
 * @param {Number} [second]
 * @param {Number} [millisecond]
 * @return {Moment}
 */
function time(hour = 0, minute = 0, second = 0, millisecond = 0) {
  return timeDay.clone().set({
    hour, minute, second, millisecond,
  });
}

/**
 * Combine the given date and time moments
 * @param  {Moment} day
 * @param  {Moment} time
 * @return {Moment}
 */
function combine(day, time) {
  return day.clone().set({
    hour: time.get('hour'),
    minute: time.get('minute'),
    second: time.get('second'),
  });
}

/**
 * Return the earliest moment from those provided
 * @param {...Moment} The moment instances to compare
 * @return {Moment} The earliest moment instance
 */
function min(...moments) {
  let earliest;

  moments.forEach((moment) => {
    if (!earliest || moment.isBefore(earliest)) {
      earliest = moment;
    }
  });

  return earliest;
}

/**
 * Return the latest moment from those provided
 * @param {...Moment} The moment instances to compare
 * @return {Moment} The latest moment instance
 */
function max(...moments) {
  let latest;

  moments.forEach((moment) => {
    if (!latest || moment.isAfter(latest)) {
      latest = moment;
    }
  });

  return latest;
}

export {
  combine,
  date,
  datetime,
  max,
  min,
  time,
};
