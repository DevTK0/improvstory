import { describe, expect, test } from "@jest/globals";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ReactTestUtils, { act } from "react-dom/test-utils";
import TextArea from "../src/pages/components/text-area";

import fetch from "jest-fetch-mock";
import Story from "../src/pages/components/story";
import { useStore } from "../src/pages/story.store";

const originalState = useStore.getState();

beforeEach(() => {
    useStore.setState(originalState);
});

describe("user can post content", () => {
    const USER_TEXT_INPUT = "hello world!!!";

    test("posted content is displayed", async () => {
        render(<Story />);

        await act(() => {
            const { addPost } = useStore.getState();
            addPost(USER_TEXT_INPUT);
        });
        const input = screen.getByText(USER_TEXT_INPUT) as HTMLUListElement;
        expect(input.innerHTML).toEqual(USER_TEXT_INPUT);
    });
});
