const Hero = () => {
  return (
    <section>
      <div className="background-image">
        <div
          className={
            "flex justify-center items-center h-full translate-y-[-5%]"
          }
        >
          <h1
            className={
              "text-white text-center text-[100px] md:text-[200px]  font-bold backdrop-blur-[1px]"
            }
          >
            NASA EXPLORE<span className={"text-[#957ffd]"}>R</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
