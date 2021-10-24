import "./Home.css";

export default function Home() {
    return (
        <>
            <section className="relative pb-20 bg-gray-800 overflow-hidden">
                <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-zospace-1"/>
                <div
    className="absolute bottom-0 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 bg-gradient-zospace-2 transform -rotate-6"/>

                <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
                    <div className="hidden 2xl:block absolute bottom-0 w-3/5 mb-40 h-2 border-b border-white"/>
                    <div className="relative flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-12 mb:mb-0">
                            <span
                                className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">Two ways to start!</span>
                            <h2 className="max-w-lg lg:max-w-md 2xl:max-w-none mt-7 mb-12 mb:mb-20 text-6xl lg:text-7xl 2xl:text-9xl text-white font-bold font-heading">Get
                                perfect app for your project</h2>
                            <p className="mb-12 lg:mb-24 text-lg text-white opacity-90">Discover how it works and start
                                for free.</p>
                            <div className="flex flex-wrap items-center">

                                <div className="w-full sm:w-auto mt-8 sm:mt-0 flex">
                                    <button className="p-2">
                                        <svg width="11" height="20" viewBox="0 0 11 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">

                                        </svg>
                                    </button>
                                    <span className="py-2 px-4">
              <svg width="2" height="24" viewBox="0 0 2 24" fill="none" xmlns="http://www.w3.org/2000/svg">

              </svg>
            </span>
                                    <button className="p-2">
                                        <svg width="11" height="20" viewBox="0 0 11 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">

                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
