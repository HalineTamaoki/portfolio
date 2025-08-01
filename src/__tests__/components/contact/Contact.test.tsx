import { fireEvent, render, screen } from "@testing-library/react";
import MockRender from "../../__mocks__/MockRender";
import { Contact, contactInfo } from "../../../components/portfolio/contact/Contact";
import { vi } from "vitest";

vi.mock('../../../components/portfolio/contact/ContactForm', () => ({
    ContactForm: vi.fn(({setEmailStatus}: {setEmailStatus: (status: string) => void}) => <div>
        <button id="contact-form-success" onClick={() => setEmailStatus('success')}>Contact Form</button> 
        <button id="contact-form-error" onClick={() => setEmailStatus('error')}>Contact Form</button> 
    </div>)
}))

const customRender = () => render(
    <MockRender>
        <Contact />
    </MockRender>
);

describe("Contact page tests", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("should render the page correctly", () => {
        customRender();

        expect(screen.getByText('contact-header')).toBeInTheDocument();
        contactInfo.forEach(info => {
            const infoLink = screen.getByTestId(info.name);
            expect(infoLink).toBeInTheDocument();
            expect(infoLink).toHaveAttribute('href', info.url);
        })
    });

    test("should show message-sent text", () => {
        customRender();

        fireEvent.click(screen.getByTestId('contact-form-success'));
        expect(screen.getByText('message-sent')).toBeInTheDocument();
    });

    test("should show error-sending-email text", () => {
        customRender();

        fireEvent.click(screen.getByTestId('contact-form-error'));
        expect(screen.getByText('error-sending-email')).toBeInTheDocument();
    });
});