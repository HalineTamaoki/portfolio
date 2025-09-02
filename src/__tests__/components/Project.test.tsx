import { fireEvent, render, screen, within } from "@testing-library/react";
import { vi } from "vitest";
import { projects } from "../../common/projects";
import { Project } from "../../components/portfolio/projects/Project";
import { Project as ProjectType } from "../../types/Project";
import MockRender from "../__mocks__/MockRender";

vi.mock('../../components/portfolio/projects/ProjectCard', () => ({
    ProjectCard: vi.fn(({project, openVideo}: {project: ProjectType, openVideo: (demoSrc: string) => void}) => (
        <div id={project.name.en}>
            <p>{project.name.en}</p>
            {project.demoSrc && <button onClick={() => openVideo('project.demoSrc')}>Open video</button>}
        </div>
    ))
}))

const customRender = () => render(
    <MockRender>
        <Project />
    </MockRender>
);

describe("Contact page tests", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("should render the page correctly", () => {
        customRender();

        expect(screen.getByText('projects-header')).toBeInTheDocument();
        const projectSwiper = screen.getByTestId('project-swiper-wrapper');
        expect(within(projectSwiper).getByTestId('project-prev-button')).toBeInTheDocument();
        expect(within(projectSwiper).getByTestId('project-next-button')).toBeInTheDocument();
        projects.forEach(project => {
            const projectCard = screen.getByTestId(project.name.en);
            expect(projectCard).toBeInTheDocument();
        })
    });

    test("should display video model", () => {
        customRender();

        fireEvent.click(within(screen.getByTestId('Moodle development')).getByText('Open video'));
        expect(screen.getByTestId('video-dialog')).toBeInTheDocument();
    });
});