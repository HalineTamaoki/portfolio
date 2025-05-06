import { render } from "@testing-library/react";
import Portfolio from "../../pages/Portfolio"
import MockRender from "../__mocks__/MockRender";

const customRender = () => render(
    <MockRender>
        <Portfolio />
    </MockRender>
);

test("should render the Portfolio page correctly", () => {
    customRender();
})