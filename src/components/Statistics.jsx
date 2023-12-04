function Statistics() {
    return (
        <div className="flex flex-col sm:flex-row w-full justify-between px-6 sm:px-28 items-center space-y-6 sm:space-y-0 sm:items-end mt-4 sm:mt-16">
            <div className="flex flex-col items-center order-3 sm:order-1">
                <h1 className="font-sans font-black text-7xl mb-2">250+</h1>
                <p className="text-xl">hackers</p>
            </div>
            <div className="flex flex-col items-center order-1 sm:order-2">
                <h1 className="font-sans font-black text-9xl text-palette-100 pt mb-4">500+</h1>
                <p className="text-xl">applicants</p>
            </div>
            <div className="flex flex-col items-center order-2 sm:order-3">
                <h1 className="font-sans font-black text-7xl mb-2">50+</h1>
                <p className="text-xl">submissions</p>
            </div>
        </div>
    )
}

export default Statistics;