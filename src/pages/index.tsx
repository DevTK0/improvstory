import TextArea from "./components/text-area";
import Story from "./components/story";
import { useState } from "react";

export default function Example() {
    const [story, setStory] = useState({
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
        ],
    });

    return (
        <div className="max-w-xl m-auto pt-3">
            <TextArea />
            <div className="pt-10">
                <Story story={story.content} />
            </div>
        </div>
    );
}
