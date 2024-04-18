import test from "ava";
import { pow } from "./pow";

test("pow should return the correct result when the exponent is positive", (t) => {
  t.is(pow(2, 3), 8);
  t.is(pow(5, 2), 25);
  t.is(pow(10, 4), 10000);
});

test("pow should return 1 when the exponent is 0", (t) => {
  t.is(pow(2, 0), 1);
  t.is(pow(5, 0), 1);
  t.is(pow(10, 0), 1);
});

test("pow should return 0 when the base is 0 and the exponent is positive", (t) => {
  t.is(pow(0, 2), 0);
  t.is(pow(0, 3), 0);
  t.is(pow(0, 4), 0);
});
