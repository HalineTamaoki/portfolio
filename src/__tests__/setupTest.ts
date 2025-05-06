import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import "@testing-library/jest-dom";
import { vi } from 'vitest';

expect.extend(matchers);
vi.mock('react-i18next', async () => {
  return await import('./__mocks__/i18nmock');
});
