import { render } from "@testing-library/react";
import { vi } from "vitest";
import Portfolio from "../../pages/Portfolio";
import MockRender from "../__mocks__/MockRender";

vi.mock('../../components/portfolio/about/About', () => ({
    About: vi.fn(() => <div id="about">About</div>)
}))

vi.mock('../../components/portfolio/projects/Project', () => ({
    Project: vi.fn(() => <div id="projects">Project</div>)
}))

vi.mock('../../components/portfolio/contact/Contact', () => ({
    Contact: vi.fn(() => <div id="contact">Contact</div>)
}))

vi.mock('../../components/portfolio/header/Header', () => ({
    Header: vi.fn(() => <div id="header">Header</div>)
}))

const customRender = () => render(
    <MockRender>
        <Portfolio />
    </MockRender>
);

test("should render the Portfolio page correctly", () => {
    customRender();
    const header = document.getElementById("header");
    const aboutSection = document.getElementById("about");
    const projectsSection = document.getElementById("projects");
    const contactSection = document.getElementById("contact");

    expect(header).toBeInTheDocument();
    expect(aboutSection).toBeInTheDocument();
    expect(projectsSection).toBeInTheDocument();
    expect(contactSection).toBeInTheDocument();
})