import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils";
import TextArea from "../src/pages/components/text-area";

describe("user can post content", () => {
    test("button click", () => {
        const click = { value: false };
        render(<TextArea clicked={click} />);

        const button = screen.getByRole("button");
        ReactTestUtils.Simulate.click(button);

        expect(click.value).toBe(true);
    });
});
