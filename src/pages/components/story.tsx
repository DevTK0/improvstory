import { useStore } from "../story.store";

export default function Story() {
    const { story } = useStore();

    return (
        <ul className="">
            {story.map((content, index) => {
                return (
                    <li key={index} className="pt-5">
                        {content}
                    </li>
                );
            })}
        </ul>
    );
}
