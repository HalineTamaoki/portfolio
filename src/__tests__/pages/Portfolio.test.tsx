import { render } from "@testing-library/react";
import Portfolio from "../../pages/Portfolio"
import MockRender from "../__mocks__/MockRender";
import { vi } from "vitest";

vi.mock('../components/portfolio/about/About', () => ({
    default: <div id="about">About</div>
}))

vi.mock('../components/portfolio/projects/Project', () => ({
    default: <div id="projects">Project</div>
}))

vi.mock('../components/portfolio/contact/Contact', () => ({
    default: <div id="contact">Contact</div>
}))

const customRender = () => render(
    <MockRender>
        <Portfolio />
    </MockRender>
);

test("should render the Portfolio page correctly", () => {
    customRender();
    const aboutSection = document.getElementById("about");
    const projectsSection = document.getElementById("projects");
    const contactSection = document.getElementById("contact");

    expect(aboutSection).toBeInTheDocument();
    expect(projectsSection).toBeInTheDocument();
    expect(contactSection).toBeInTheDocument();
})