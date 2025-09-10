import { fireEvent, render, screen, within } from "@testing-library/react";
import { Mock, vi } from "vitest";
import { projects } from "../../../common/projects";
import { Project } from "../../../components/portfolio/projects/Project";
import { Project as ProjectType } from "../../../types/Project";
import MockRender from "../../__mocks__/MockRender";
import useGetCurrentBreakpoint from "../../../hooks/useGetCurrentBreakpoint";

vi.mock('../../../components/portfolio/projects/ProjectCard', () => ({
    ProjectCard: vi.fn(({project, openVideo}: {project: ProjectType, openVideo: (demoSrc: string) => void}) => (
        <div id={project.name.en}>
            <p>{project.name.en}</p>
            {project.demoSrc && <button onClick={() => openVideo('project.demoSrc')}>Open video</button>}
        </div>
    ))
}))

vi.mock("../../../hooks/useGetCurrentBreakpoint", async () => {
    return {
        __esModule: true,
        default: vi.fn(),
    };
});

vi.mock('swiper/react', () => {
    return {
        Swiper: vi.fn(({ children, spaceBetween, slidesPerView, ...props }) => (
            <div {...props} data-slidesperview={slidesPerView}>
                {children}
            </div>
        )),
        SwiperSlide: vi.fn(({ children, ...props }) => (
            <div id="mock-swiper-slide" {...props}>
                {children}
            </div>
        )),
    };
});

vi.mock('swiper/modules', () => ({
    Navigation: {},
    Pagination: {},
}));

const customRender = () => render(
    <MockRender>
        <Project />
    </MockRender>
);

describe("Project page tests", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("should render the page correctly", () => {
        customRender();

        expect(screen.getByText('projects-header')).toBeInTheDocument();
        expect(screen.getByTestId('project-swiper')).toBeInTheDocument();
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

    test.each([
        ["xs", 1],
        ["sm", 2],
        ["md", 2],
        ["lg", 3],
        ["xl", 3],
    ])("sets slidesPerView correctly for breakPoint '%s'", (breakPoint, expectedSlides) => {
        (useGetCurrentBreakpoint as Mock).mockReturnValue(breakPoint);

        customRender();
        expect(screen.getByTestId('project-swiper').getAttribute('data-slidesperview')).toBe(expectedSlides.toString());
    });
});