import * as dateUtils from './date-utils.mjs';

/**
 * Representation of a period between two moments in time.
 *
 * Example
 * 2017-02-03T10:31:21Z     2017-03-01T10:22:05Z
 * <------------------------------------------->
 */
class DateTimeSpan {
  /**
   * Create a DateTimeSpan between two times on the same day.
   * @param {day} dateUtils.date
   * @param {startTime} dateUtils.time
   * @param {endTime} dateUtils.time
   * @returns {DateTimeSpan}
   */
  static fromDayAndTimes(day, startTime, endTime) {
    return new DateTimeSpan(
      dateUtils.combine(day, startTime),
      dateUtils.combine(day, endTime),
    );
  }

  /**
   * Create a DateTimeSpan between two datetimes.
   * @param  {dateUtils.datetime} startDt
   * @param  {dateUtils.datetime} endDt
   * @returns {DateTimeSpan}
   */
  constructor(startDt, endDt) {
    if (endDt.isBefore(startDt)) {
      throw new Error('Invalid span');
    }

    this.startDt = startDt;
    this.endDt = endDt;
  }

  /**
   * Is this within, and not touching either edge of, other?
   * @param {DateTimeSpan} other
   * @returns {Boolean}
   */
  isStrictlyWithin(other) {
    return this.startDt.isAfter(other.startDt) && this.endDt.isBefore(other.endDt);
  }

  /**
   * Return whether the current DateTimeSpan intersects with another.
   * This returns true if there is any overlap between the two.
   * @param  {DateTimeSpan} other
   * @returns {Boolean}
   */
  intersects(other) {
    const [first, second] = (this.startDt.isBefore(other.startDt) ? [this, other] : [other, this] ); 
    // [0, 1]  [8, 9]   0 9
    // 0 < 8 true  first = [8,9], second = [0,1]
    return first.endDt.isAfter\(second.startDt); // && first.endDt.isBefore(second.endDt);
    // 9 < 1
  }

  /**
   * Return any part of self which is also in other.
   * @param {DateTimeSpan}
   * @returns {DateTimeSpan|null} - A new DateTimeSpan or null if no overlap.
   */
  overlap(other) {
    if (this.endDt < other.startDt || other.endDt < this.startDt) {
      return null;
    }

    return new DateTimeSpan(
      dateUtils.max(this.startDt, other.startDt),
      dateUtils.min(this.endDt, other.endDt),
    );
  }

  /**
   * Return whether the current DateTimeSpan should be considered equal to another.
   * @param  {DateTimeSpan}  other
   * @return {Boolean}
   */
  isSame(other) {
    return this.startDt.isSame(other.startDt) && this.endDt.isSame(other.endDt);  
  }

  /**
   * Represent the DateTimeSpan as a string
   * @return {String}
   */
  toString() {
    return `${this.startDt.toString()} - ${this.endDt.toString()}`;
  }
}

export { DateTimeSpan };
