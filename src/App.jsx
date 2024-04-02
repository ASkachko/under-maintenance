import landingImage from "../src/assets/landing-image.svg";
import logo from "../src/assets/logo.jpg";

function App() {
  return (
    <div className="min-h-screen flex  justify-center flex-col">
      <div className="flex w-full mx-auto px-[100px] justify-between md:flex-col md:items-center md:px-[50px] md:gap-[50px] sm:px-">
        <div className="w-1/2 md:w-full">
          <img
            src={landingImage}
            alt="Under maintenance"
            className="h-full w-full"
          />
        </div>
        <div className="w-[47.98%] font-Lato flex flex-col justify-center items-center md:w-full">
          <h1 className="text-4xl 2xl:text-5xl text-center">
            Website Under Construction!
          </h1>
          <h3 className="text-stone text-center mt-2.5 mb-12 text-xl 2xl:text-2xl">
            This website is currently undergoing construction.
          </h3>
          <a
            href="https://www.linkedin.com/in/skachko-mikhail-66ba8b36"
            target="_blank"
          >
            <div className="w-[148px] h-[50px] mx-auto bg-bgclementine border-2 border-clementine rounded-[20px] flex justify-center items-center text-[20px] text-clementine ">
              Contact us
            </div>
          </a>
        </div>
      </div>
      <div className="md:w-[82px] h-[136px] w-[145px] bottom-[75px] right-[75px] md:h-[77px] absolute md:bottom-[50px] md:right-[50px]">
        <img src={logo} alt="MLS Hospitality" className="w-full h-full" />
      </div>
    </div>
  );
}

export default App;
