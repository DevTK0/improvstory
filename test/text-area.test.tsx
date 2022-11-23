import { describe, expect, test } from "@jest/globals";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ReactTestUtils, { act } from "react-dom/test-utils";
import TextArea from "../src/pages/components/text-area";

import fetch from "jest-fetch-mock";
import Story from "../src/pages/components/story";
import { useStore } from "../src/pages/story.store";

fetch.enableMocks();
const originalState = useStore.getState();

beforeEach(() => {
    fetch.resetMocks();
    useStore.setState(originalState);
});

describe("user can post content", () => {
    const USER_TEXT_INPUT = "hello world!!!";

    test("post content", async () => {
        fetch.mockResponseOnce(JSON.stringify({ story: USER_TEXT_INPUT }));

        render(<TextArea />);

        await act(() => {
            const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
            textarea.value = USER_TEXT_INPUT;

            const button = screen.getByRole("button");
            fireEvent.click(button);
        });

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][1]).toBeDefined();
        expect(fetch.mock.calls[0][1]!.body).toEqual(
            JSON.stringify({ story: USER_TEXT_INPUT })
        );
    });

    // test("story is updated with new content", () => {
    //     const content = ["line 1", "line 2"];
    //     render(<Story story={content} />);

    //     content.push("line 3");

    //     const paragraphs = screen.getAllByRole("listitem");
    //     expect(paragraphs.length).toBe(3);
    // });
});
