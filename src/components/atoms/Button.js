export default function Button({ value = "button" }) {
    return (
        <button type="button" className="text-white h-12 w-36 rounded-xl font-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">{ value }</button>
    )
};
