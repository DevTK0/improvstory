import TextArea from "./components/text-area";
import Story from "./components/story";
import { useState } from "react";

export default function Example() {
    return (
        <div className="max-w-xl m-auto pt-3">
            <TextArea />
            <div className="pt-10">
                <Story />
            </div>
        </div>
    );
}
