import { DateTimeSpan } from '../src/date-time-span.mjs';
import { datetime } from '../src/date-utils.mjs';

describe('DateTimeSpan', () => {
  describe('isSame', () => {
    it('returns true when the spans are the same', () => {
      const span1 = new DateTimeSpan(
        datetime(2016, 3, 28, 0),
        datetime(2016, 3, 28, 4),
      );

      const span2 = new DateTimeSpan(
        datetime(2016, 3, 28, 0),
        datetime(2016, 3, 28, 4),
      );

      expect(span1.isSame(span2)).toBe(true);
    });

    it('returns false when the spans are not the same', () => {
      const span1 = new DateTimeSpan(
        datetime(2016, 3, 28, 0),
        datetime(2016, 3, 28, 4),
      );

      const span2 = new DateTimeSpan(
        datetime(2016, 3, 29, 0),
        datetime(2016, 3, 29, 4),
      );

      expect(span1.isSame(span2)).toBe(false);
    });

    it('returns false even when the span\'s start date is not the same in both', () => {
      const span1 = new DateTimeSpan(
        datetime(2016, 3, 29, 0),
        datetime(2016, 3, 29, 4),
      );

      const span2 = new DateTimeSpan(
        datetime(2016, 3, 29, 1),
        datetime(2016, 3, 29, 4),
      );

      expect(span1.isSame(span2)).toBe(false);
    });

    it('returns false even when the span\'s end date is not the same in both', () => {
      const span1 = new DateTimeSpan(
        datetime(2016, 3, 29, 0),
        datetime(2016, 3, 29, 4),
      );

      const span2 = new DateTimeSpan(
        datetime(2016, 3, 29, 0),
        datetime(2017, 3, 29, 4),
      );

      expect(span1.isSame(span2)).toBe(false);
    });
  });

  describe('isStrictlyWithin', () => {
    it('returns true when the given span is within the other span', () => {
      // this
      const span1 = new DateTimeSpan(
        datetime(2016, 3, 28, 6),
        datetime(2016, 3, 28, 7),
      );

      // other
      const span2 = new DateTimeSpan(
        datetime(2016, 3, 28, 4),
        datetime(2016, 3, 28, 8),
      );

      expect(span1.isStrictlyWithin(span2)).toBe(true);
    });

    it('returns false when the given span start is not within the other span start', () => {
      // this
      const span1 = new DateTimeSpan(
        datetime(2016, 3, 28, 2),
        datetime(2016, 3, 28, 7),
      );

      // other
      const span2 = new DateTimeSpan(
        datetime(2016, 3, 28, 3),
        datetime(2016, 3, 28, 6),
      );

      expect(span1.isStrictlyWithin(span2)).toBe(false);
    });

    it('returns false when the given span is touching the ending edge of other span', () => {
      // this
      const span1 = new DateTimeSpan(
        datetime(2016, 3, 28, 4),
        datetime(2016, 3, 28, 6),
      );

      // other
      const span2 = new DateTimeSpan(
        datetime(2016, 3, 28, 3),
        datetime(2016, 3, 28, 6),
      );

      expect(span1.isStrictlyWithin(span2)).toBe(false);
    });

    it('returns false when the given span is touching the starting edge of other span', () => {
      // this
      const span1 = new DateTimeSpan(
        datetime(2016, 3, 28, 4),
        datetime(2016, 3, 28, 5),
      );

      // other
      const span2 = new DateTimeSpan(
        datetime(2016, 3, 28, 4),
        datetime(2016, 3, 28, 6),
      );

      expect(span1.isStrictlyWithin(span2)).toBe(false);
    });
  });

  describe('intersects', () => {
    it('returns true when the given span is intersects the other span', () => {
      // this
      const span1 = new DateTimeSpan(
        datetime(2016, 3, 28, 4),
        datetime(2016, 3, 28, 8),
      );

      // other
      const span2 = new DateTimeSpan(
        datetime(2016, 3, 28, 3),
        datetime(2016, 3, 28, 5),
      );

      expect(span1.intersects(span2)).toBe(true);
    });
    it('returns true when the given span is within the other span', () => {
      // this
      const span1 = new DateTimeSpan(
        datetime(2016, 3, 28, 1),
        datetime(2016, 3, 28, 3),
      );

      // other
      const span2 = new DateTimeSpan(
        datetime(2016, 3, 28, 0),
        datetime(2016, 3, 28, 3),
      );

      expect(span1.intersects(span2)).toBe(true);
    });
    it('returns false when the given span is touches the other span\'s one of the edge', () => {
      // this
      const span1 = new DateTimeSpan(
        datetime(2016, 3, 28, 0),
        datetime(2016, 3, 28, 2),
      );

      // other
      const span2 = new DateTimeSpan(
        datetime(2016, 3, 28, 2),
        datetime(2016, 3, 28, 4),
      );

      expect(span1.intersects(span2)).toBe(false);
    });
    it('returns false when the given span is not at all overlapping with the other span', () => {
      // this
      const span1 = new DateTimeSpan(
        datetime(2016, 3, 28, 0),
        datetime(2016, 3, 28, 1),
      );

      // other
      const span2 = new DateTimeSpan(
        datetime(2016, 3, 28, 8),
        datetime(2016, 3, 28, 9),
      );

      expect(span1.intersects(span2)).toBe(false);
    });
  });
});
