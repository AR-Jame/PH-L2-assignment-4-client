const Hero = () => {
    return (
        <section className="h-screen relative">
            <img src="/banner.jpg" className="w-full h-full" alt="" />
            <div className="absolute top-[40%] space-y-6 -translate-y-[40%] text-white mx-[10%] max-w-xl">
                <p className="text-8xl font-bold ">Welcome to our library</p>
                <p className="bg-[#000000ad] text-lg border-l-4 border-amber-200 p-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, aliquam. Odit sequi veniam corrupti fuga perspiciatis consequuntur sint consectetur neque.</p>

            </div>
        </section>
    );
};

export default Hero;