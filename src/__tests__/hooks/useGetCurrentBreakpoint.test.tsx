import { renderHook } from "@testing-library/react";
import { Mock, vi } from "vitest";
import useGetCurrentBreakpoint from "../../hooks/useGetCurrentBreakpoint";
import { useMediaQuery } from "@mui/material";

vi.mock("@mui/material", async () => {
    const actual = await vi.importActual<any>("@mui/material");
    return {
        ...actual,
        useMediaQuery: vi.fn(),
        useTheme: () => ({
          breakpoints: {
            only: (bp: string) => bp,
          },
        }),
    };
});

vi.mock('@mui/material/useMediaQuery', () => ({
  __esModule: true,
  default: vi.fn(),
}));

describe("useGetCurrentBreakpoint", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("returns 'md' when only isMd is true", () => {
    (useMediaQuery as Mock)
      .mockImplementationOnce(() => false) // xs
      .mockImplementationOnce(() => false) // sm
      .mockImplementationOnce(() => true)  // md
      .mockImplementationOnce(() => false) // lg
      .mockImplementationOnce(() => false);// xl

    const { result } = renderHook(() => useGetCurrentBreakpoint());
    expect(result.current).toBe("md");
  });

  it("returns 'unknown' when all are false", () => {
    (useMediaQuery as Mock)
      .mockImplementation(() => false);

    const { result } = renderHook(() => useGetCurrentBreakpoint());
    expect(result.current).toBe("unknown");
  });

  it("returns 'xs' when only isXs is true", () => {
    (useMediaQuery as Mock)
      .mockImplementationOnce(() => true)  // xs
      .mockImplementationOnce(() => false) // sm
      .mockImplementationOnce(() => false) // md
      .mockImplementationOnce(() => false) // lg
      .mockImplementationOnce(() => false);// xl

    const { result } = renderHook(() => useGetCurrentBreakpoint());
    expect(result.current).toBe("xs");
  });

  it("returns 'sm' when only isSm is true", () => {
    (useMediaQuery as Mock)
      .mockImplementationOnce(() => false) // xs
      .mockImplementationOnce(() => true)  // sm
      .mockImplementationOnce(() => false) // md
      .mockImplementationOnce(() => false) // lg
      .mockImplementationOnce(() => false);// xl

    const { result } = renderHook(() => useGetCurrentBreakpoint());
    expect(result.current).toBe("sm");
  });

  it("returns 'lg' when only isLg is true", () => {
    (useMediaQuery as Mock)
      .mockImplementationOnce(() => false) // xs
      .mockImplementationOnce(() => false) // sm
      .mockImplementationOnce(() => false) // md
      .mockImplementationOnce(() => true)  // lg
      .mockImplementationOnce(() => false);// xl

    const { result } = renderHook(() => useGetCurrentBreakpoint());
    expect(result.current).toBe("lg");
  });

  it("returns 'xl' when only isXl is true", () => {
    (useMediaQuery as Mock)
      .mockImplementationOnce(() => false) // xs
      .mockImplementationOnce(() => false) // sm
      .mockImplementationOnce(() => false) // md
      .mockImplementationOnce(() => false) // lg
      .mockImplementationOnce(() => true); // xl

    const { result } = renderHook(() => useGetCurrentBreakpoint());
    expect(result.current).toBe("xl");
  });
});