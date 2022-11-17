import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils";
import Example from "../src/pages/index";

describe("user can post content", () => {
    test("button click", () => {
        const click = { value: false };
        render(<Example clicked={click} />);

        const button = screen.getByRole("button");
        ReactTestUtils.Simulate.click(button);

        expect(click.value).toBe(true);
    });
});
