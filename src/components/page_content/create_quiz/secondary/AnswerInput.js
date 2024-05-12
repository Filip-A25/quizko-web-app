function AnswerInput() {
    return (
        <div className="flex items-center justify-between w-full">
            <input type="text" className="rounded-md border-gray-300 py-2 pl-2 bg-transparent h-10 lg:h-12 w-[85%]" placeholder="Unesite odgovor" required/>
            <input type="checkbox" className="w-8 h-8 !rounded-[50%] outline-none !bg-slate-500 accent-background-green" />
        </div>
    )
}

export default AnswerInput;