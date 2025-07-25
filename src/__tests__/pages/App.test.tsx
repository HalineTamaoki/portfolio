import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { vi } from "vitest";
import App from "../../App";
import { CustomThemeProvider } from "../../context/ThemeContext";

vi.mock('../../pages/Portfolio', () => ({
    default: vi.fn(() => <div id="portfolio">Portfolio</div>)
}))

vi.mock('react-router-dom', () => ({
  Navigate: () => (<div>Navigate</div>),
  BrowserRouter: ({children}: {children: ReactNode}) => (<>{children}</>),
  Routes: ({children}: {children: ReactNode}) => (<>{children}</>),
  Route: ({path, element}: {path: string, element: ReactNode}) => (<div id={path}>{element}</div>),
}));

const customRender = () => render(
    <CustomThemeProvider>
        <App />
    </CustomThemeProvider>
);

describe("App tests", () => {
    test("Should have all pages", () => {
        customRender();

        expect(screen.getByText('Navigate')).toBeInTheDocument();
        expect(screen.getByText('Portfolio')).toBeInTheDocument();
    });
});