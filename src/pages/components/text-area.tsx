import { useEffect, useRef, useState } from "react";
import { useStore } from "../story.store";

export default function TextArea() {
    const textarea = useRef(null);
    const { addPost } = useStore();
    const post = () => {
        const userInput = (textarea.current! as HTMLTextAreaElement).value;

        fetch("/api/improv/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ story: userInput }),
        })
            .then((response) => response.json())
            .then((data) => {
                addPost(userInput);
            });
    };

    return (
        <div className="flex items-start space-x-4">
            <div className="min-w-0 flex-1">
                <form action="#" className="relative">
                    <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm ">
                        <textarea
                            ref={textarea}
                            rows={3}
                            name="comment"
                            id="comment"
                            className="block w-full resize-none p-3 border-0 py-3 focus:outline-none sm:text-sm"
                            placeholder="Add your improv..."
                            defaultValue={""}
                        />

                        <div className="py-2" aria-hidden="true">
                            <div className="py-px">
                                <div className="h-9" />
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex justify-end py-2 pl-3 pr-2">
                        <button
                            type="button"
                            onClick={post}
                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
