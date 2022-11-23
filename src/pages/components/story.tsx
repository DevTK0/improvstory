export default function Story(prop: any) {
    const story: string[] = prop.story;

    return (
        <ul key={prop} className="">
            {story.map((line) => {
                return (
                    <li key={line} className="pt-2">
                        {line}
                    </li>
                );
            })}
        </ul>
    );
}
