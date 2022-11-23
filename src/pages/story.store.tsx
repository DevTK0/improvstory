import create from "zustand";

export const useStore = create<{
    story: string[];
    addPost: (content: string) => void;
}>((set) => ({
    story: [],
    addPost: (content) =>
        set((state) => ({ story: [...state.story, content] })),
}));
