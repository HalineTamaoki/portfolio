import "@testing-library/jest-dom";
import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom/vitest';
import { cleanup, configure } from '@testing-library/react';
import { ReactNode } from "react";
import { afterEach, expect, vi } from 'vitest';

expect.extend(matchers);
vi.mock('react-i18next', async () => {
  return {
    ...await import('./__mocks__/i18nmock'),
    I18nextProvider: ({children}: {children: ReactNode}) => (<>{children}</>)
  };
});

vi.mock('../i18n/i18n', () => ({
  default: () => ({
    t: vi.fn((str: string) => str),
    language: 'de',
  })
}));

global.matchMedia = global.matchMedia || function() {
  return {
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
  };
};

configure({ testIdAttribute: 'id' });

afterEach(() => {
  cleanup();
});