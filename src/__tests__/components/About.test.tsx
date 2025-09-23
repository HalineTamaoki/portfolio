import { render, screen } from "@testing-library/react";
import MockRender from "../__mocks__/MockRender";
import { About } from "../../components/about/About";

const customRender = () => render(
    <MockRender>
        <About />
    </MockRender>
);

describe("About page tests", () => {
    test("should render the page correctly", () => {
        customRender();

        expect(screen.getByTestId('about-photo')).toBeInTheDocument();
        expect(screen.getByText('Haline Tamaoki')).toBeInTheDocument();
        expect(screen.getByText('about-subtitle')).toBeInTheDocument();
        expect(screen.getByText('about-text')).toBeInTheDocument();

        const cardsContainer = screen.getByTestId('about-cards');
        expect(cardsContainer.getElementsByClassName('about-card').length).toBe(3)
    });
});