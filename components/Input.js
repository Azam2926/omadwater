export default function Input(props) {
    return (
        <input
            className={'focus:ring-2 transition-all duration-200 hover:ring-2 ring-blue-500 outline-none py-3 px-6 border rounded-full mx-auto w-full'}
            {...props}
        />
    );
}