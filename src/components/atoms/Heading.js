export default function Heading({ title = "heading", description = "description" }) {
    return (
        <div className="text-xl font-black mb-12 text-indigo-800">{ title }: { description }</div>
    )
};
