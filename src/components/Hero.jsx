import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`} id="home">
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#219ebc]' />
                    <div className='w-1 sm:h-80 h-40 teal-gradient' />
                </div>

                <div className="flex flex-col">
                    <div className="flex">
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, Im <span className='text-[#219ebc]'>Dhruv</span> <span className="waving-hand">👋
                            </span>
                        </h1>
                    </div>
                    <div className="flex">
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            A Full Stack Web Developer, AIML and DevOps Enthusiast <br className='sm:block hidden' />
                        </p>
                    </div>
                </div>
            </div>

            <ComputersCanvas />
        </section>
    );
};

export default Hero;