import { test, expect, vi } from "vitest";
import { setupCounter } from "./counter";

test('setupCounter', () => {
  let testElement = {
    addEventListener: vi.fn()
  };
  setupCounter(testElement);
  expect(testElement.addEventListener).toHaveBeenCalled();
});
