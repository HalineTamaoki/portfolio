import { render, screen, fireEvent, act } from "@testing-library/react";
import { vi } from "vitest";
import { VideoModal } from "../../../components/projects/VideoModal";
import * as mui from "@mui/material";

const src = "test.mp4";
const onClose = vi.fn();

vi.mock("@mui/material", async () => {
    const actual = await vi.importActual<any>("@mui/material");
    return {
        ...actual,
        useMediaQuery: vi.fn(),
    };
});

describe("VideoModal Tests", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders dialog and video with correct src", () => {
        vi.spyOn(mui, "useMediaQuery").mockReturnValue(true);
        render(<VideoModal onClose={onClose} src={src} />);
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByTestId("video-project")).toBeInTheDocument();
        expect(screen.getByTestId("video-close-button")).toBeInTheDocument();
        expect(screen.getByTestId("video-source").getAttribute("src")).toBe(src);
    });

    it("calls onClose when close button is clicked", () => {
        vi.spyOn(mui, "useMediaQuery").mockReturnValue(true);
        render(<VideoModal onClose={onClose} src={src} />);
        fireEvent.click(screen.getByTestId("video-close-button"));
        expect(onClose).toHaveBeenCalled();
    });

    it("hides controls by default on mobile", () => {
        vi.spyOn(mui, "useMediaQuery").mockReturnValue(false);
        render(<VideoModal onClose={onClose} src={src} />);
        const video = screen.getByTestId("video-project");
        expect(video.hasAttribute("controls")).toBe(false);
    });

    it("shows controls when breakpointUpMd is true", () => {
        vi.spyOn(mui, "useMediaQuery").mockReturnValue(true);
        render(<VideoModal onClose={onClose} src={src} />);
        const video = screen.getByTestId("video-project");
        expect(video).toHaveAttribute("controls");
    });

    it("auto-hides controls after 2 seconds on mobile", async () => {
        vi.useFakeTimers();
        vi.spyOn(mui, "useMediaQuery").mockReturnValue(false);
        render(<VideoModal onClose={onClose} src={src} />);
        const dialogContent = screen.getByRole("dialog").querySelector(".MuiDialogContent-root")!;
        fireEvent.click(dialogContent);
        const video = screen.getByTestId("video-project");
        expect(video).toHaveAttribute("controls");
        act(() => {
            vi.advanceTimersByTime(2000);
        });
        expect(video.hasAttribute("controls")).toBe(false);
        vi.useRealTimers();
    });

    it("does not call setcontrolsOpen if breakpointUpMd is true", () => {
        vi.spyOn(mui, "useMediaQuery").mockReturnValue(true);
        render(<VideoModal onClose={onClose} src={src} />);
        const dialogContent = screen.getByRole("dialog").querySelector(".MuiDialogContent-root")!;
        fireEvent.click(dialogContent);
        // No error, nothing changes, controls remain visible
        const video = screen.getByTestId("video-project");
        expect(video).toHaveAttribute("controls");
    });
});
