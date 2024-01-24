export default function Header() {
    return (
        <>
            <div className="h-16">
                <div className="flex justify-between">
                    <div className="font-black text-xl text-indigo-500">
                        MeijiInfo
                    </div>
                <li className="list-none flex gap-2">
                    <ul>サークル一覧</ul>
                    <ul></ul>
                    <ul>MeijiInfoについて</ul>
                </li>
                </div>
            </div>
        </>
    )
};
