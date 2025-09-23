import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ProjectCard } from "../../../components/projects/ProjectCard";
import { Project, ProjectTags } from "../../../types/Project";
import MockRender from "../../__mocks__/MockRender";

const openVideo = vi.fn();

const MOCKED_PROJECT: Project = {
    imageSrc: 'imageSrc',
    name:{
        en: "MOCKED_PROJECT",
        es: "MOCKED_PROJECT_ES",
        ptBr: "MOCKED_PROJECT_PT"
    },
    tags: [ProjectTags.angular, ProjectTags.springBoot],
    description: {
        en: "Description",
        ptBr: "Description BR",
        es: "Description ES"
    },
    demoSrc: "demoSrc",
    githubUrl: "githubUrl"
}

const customRender = () => render(
    <MockRender>
        <ProjectCard openVideo={openVideo} project={MOCKED_PROJECT}/>
    </MockRender>
);

describe("Contact page tests", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("should render the component correctly", () => {
        customRender();

        const projectNameEn = MOCKED_PROJECT.name.en;

        expect(screen.getByTestId(`card-media-${projectNameEn}`)).toBeInTheDocument();
        expect(screen.getByText(projectNameEn)).toBeInTheDocument();

        const githubLink = screen.getByTestId(`card-github-link-${projectNameEn}`);
        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute('href', MOCKED_PROJECT.githubUrl);

        MOCKED_PROJECT.tags.forEach(tag => {
            expect(screen.getByText(tag)).toBeInTheDocument();
        })

        expect(screen.getByText(MOCKED_PROJECT.description.en)).toBeInTheDocument();

        const demoVideoBtn = screen.getByTestId(`card-open-demo-${projectNameEn}`);
        expect(demoVideoBtn).toBeInTheDocument();
        fireEvent.click(demoVideoBtn);
        expect(openVideo).toHaveBeenCalledTimes(1);
    });
});