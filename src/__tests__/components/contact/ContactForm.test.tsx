import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import { vi } from "vitest";
import { ContactForm } from "../../../components/portfolio/contact/ContactForm";
import MockRender from "../../__mocks__/MockRender";
import { sendForm } from "@emailjs/browser";

vi.mock('@emailjs/browser', () => ({
  sendForm: vi.fn(),
}));

const setEmailStatus = vi.fn();

const customRender = () => render(
    <MockRender>
        <ContactForm setEmailStatus={setEmailStatus} />
    </MockRender>
);

describe("Contact Form tests", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("should render the element correctly", () => {
        customRender();

        expect(screen.getByTestId('contact-form-email')).toBeInTheDocument();
        expect(screen.getByTestId('contact-form-name')).toBeInTheDocument();
        expect(screen.getByTestId('contact-form-message')).toBeInTheDocument();
        expect(screen.getByTestId('contact-send')).toBeInTheDocument();
    });

    test("should Validate", async () => {
        customRender();

        const sendButton = screen.getByTestId('contact-send');
        act(() => fireEvent.click(sendButton));
        expect(await screen.findAllByText('form-mandatory')).toHaveLength(3);

        const emailField = screen.getByTestId('contact-form-email');
        act(() => fireEvent.change(emailField, {target: {value: 'INVALID'}}));

        expect(await screen.findByText('form-email-error')).toBeInTheDocument();
    });

    test("should send email", async () => {
        vi.mocked(sendForm).mockReturnValue(Promise.resolve({ status: 200, text: 'OK' }));
        customRender();

        const nameField = screen.getByTestId('contact-form-name');
        act(() => fireEvent.change(nameField, {target: {value: 'Name'}}));

        const emailField = screen.getByTestId('contact-form-email');
        act(() => fireEvent.change(emailField, {target: {value: 'email@email.com'}}));

        const messageField = screen.getByTestId('contact-form-message');
        act(() => fireEvent.change(messageField, {target: {value: 'Message'}}));

        const sendButton = screen.getByTestId('contact-send');
        act(() => fireEvent.click(sendButton));

        waitFor(() => {
            expect(setEmailStatus).toHaveBeenCalledWith('success');
        })
    });

    test("should fail on send email", async () => {
        vi.mocked(sendForm).mockRejectedValue({ status: 400, text: 'Fail' });
        customRender();

        const nameField = screen.getByTestId('contact-form-name');
        act(() => fireEvent.change(nameField, {target: {value: 'Name'}}));

        const emailField = screen.getByTestId('contact-form-email');
        act(() => fireEvent.change(emailField, {target: {value: 'email@email.com'}}));

        const messageField = screen.getByTestId('contact-form-message');
        act(() => fireEvent.change(messageField, {target: {value: 'Message'}}));

        const sendButton = screen.getByTestId('contact-send');
        act(() => fireEvent.click(sendButton));

        waitFor(() => {
            expect(setEmailStatus).toHaveBeenCalledWith('error');
        })
    });
});