import { fireEvent, render, screen } from "@testing-library/react";
import { sections } from "../../common/utils";
import { Header } from "../../components/portfolio/header/Header";
import MockRender from "../__mocks__/MockRender";
import { describe, vi } from "vitest";

const customRender = () => render(
    <MockRender>
        <Header />
    </MockRender>
);

describe("Header tests", () => {
    beforeEach(() => {
        window.matchMedia = vi.fn().mockImplementation(query => {
            return {
                matches: query === '(max-width:600px)',
                media: query,
                onchange: null,
                addListener: vi.fn(),
                removeListener: vi.fn(),
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
                };
            });
        }
    );

    test("should render the Header correctly", () => {
        customRender();

        for(const item of sections){
            const nav = screen.getByTestId(`nav-${item}`);
            expect(nav).toBeInTheDocument();
            const navMobile = screen.getByTestId(`nav-${item}-mobile`);
            expect(navMobile).toBeInTheDocument();
        }
        const languageButton = screen.getByTestId("language-btn");
        const themeBtn = screen.getByTestId("theme-btn-mobile");
        const themeSwitch = screen.getByTestId("theme-switch");

        expect(languageButton).toBeInTheDocument();
        expect(themeBtn).toBeInTheDocument();
        expect(themeSwitch).toBeInTheDocument();
    });

    test("should switch language", () => {
        customRender();
        
        const languageButton = screen.getByTestId("language-btn");
        fireEvent.click(languageButton);

        const languagePtBr = screen.getByTestId("language-ptBr");
        fireEvent.click(languagePtBr);
        expect(screen.getByTestId("language-btn")).toHaveTextContent('PT');

        fireEvent.click(languageButton);    
        const languageEs = screen.getByTestId("language-es");
        fireEvent.click(languageEs);
        expect(screen.getByTestId("language-btn")).toHaveTextContent('ES');

        fireEvent.click(languageButton);
        const languageEn = screen.getByTestId("language-en");
        fireEvent.click(languageEn);
        expect(screen.getByTestId("language-btn")).toHaveTextContent('EN');
    });
    
    test('should hide header when breakpoint is md and scrollY >= 50', () => {
        window.matchMedia = vi.fn().mockImplementation(query => ({
            matches: query === '(min-width:900px)' && query !== '(min-width:1200px)',
            media: query,
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        }));

        Object.defineProperty(window, 'scrollY', {
            value: 100,
            writable: true,
        });

        customRender();

        fireEvent.scroll(window);
        expect(screen.getByTestId('header-appbar')).toHaveStyle('opacity: 0');
    });
})