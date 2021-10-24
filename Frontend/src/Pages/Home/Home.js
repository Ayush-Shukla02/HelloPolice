import "./Home.css";
import Image from "../../images/oie_YnkmtSt56Shv.png";
export default function Home() {
    return (
        <>
            <section className="relative pb-20  overflow-hidden">
                <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-zospace-1" />
                <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
                    <div className="relative flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-12 mb:mb-0">
                            <h2 className="max-w-lg lg:max-w-md 2xl:max-w-none mt-7 mb-12 mb:mb-20 text-6xl lg:text-7xl 2xl:text-9xl text-white font-bold font-heading">
                                Get all the amazing resources at one place
                            </h2>
                            <p className="mb-12 lg:mb-24 text-lg text-white opacity-90">
                                Discover how it works and start for free.
                            </p>
                        </div>
                        <div className={"imgdiv"} id={"homeimg"}>
                            <img src={Image} className={"bgimg"} alt={""} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
