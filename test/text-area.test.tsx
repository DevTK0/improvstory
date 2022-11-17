import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils";
import TextArea from "../src/pages/components/text-area";

describe("user can post content", () => {
    test("post content", () => {
        const click = { value: "" };
        render(<TextArea props={click} />);

        const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
        textarea.value = "hello world";

        const button = screen.getByRole("button");
        ReactTestUtils.Simulate.click(button);

        expect(click.value).toBe("hello world");
    });
});
