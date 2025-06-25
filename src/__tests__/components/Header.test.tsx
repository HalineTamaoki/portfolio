import { render, screen } from "@testing-library/react";
import { sections } from "../../common/utils";
import { Header } from "../../components/portfolio/header/Header";
import MockRender from "../__mocks__/MockRender";

const customRender = () => render(
    <MockRender>
        <Header />
    </MockRender>
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
})