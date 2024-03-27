import React from "react";
import downArrow from "@/images/down-arrow.svg";
import language from "@/images/language.svg";
import productSample from "@/images/product-sample.webp";
import logo from "@/images/type-form.png";
import videoIcon from "@/images/video-icon.svg";
import Image from "next/image";
function HomeComponent() {
  return (
    <>
      <div>
        <div className="w-full bg-[rgb(25,25,25)]">
          <div className="flex justify-center w-full ">
            <div className="w-[44.40%] lg:block hidden bg-[rgb(25,25,25)] relative mx-auto">
              <div className="w-full flex flex-col gap-4 items-center justify-center min-h-[90vh]">
                <h1 className="font-apercu-pro max-w-[366px] text-[36px] leading-[44px] text-[#fff] text-center">Sign up <br></br>and come on in</h1>
                <Image className="w-[366px] h-[300px]" src={productSample} alt="product-sample" />
              </div>
              <p className="font-apercu-pro relative mt-[-50px] mx-auto text-white text-center text-sm leading-[16.8px]">© Typeform</p>
            </div>
            <div className="lg:w-[55.60%] w-full lg:border-l-2 border-none  lg:rounded-tl-2xl rounded-none lg:rounded-b-lg bg-white">
              <div>
                <div className="w-full flex justify-between items-center mx-auto py-2 px-6">
                  <span className="sm:flex  hidden items-center gap-2">
                    <Image src={language} alt="language" />
                    <button type="button" className="font-apercu-pro text-[#3d3d3c] hover:text-[#a0a0a0] text-[14px] leading-[21px]">
                      English
                    </button>
                  </span>
                  <div className="flex sm:justify-center justify-between items-center gap-3">
                    <p className="font-apercu-pro text-[#3d3d3c] text-sm leading-[16.8px]">Already have an Account?</p>
                    <button type="button" className="font-apercu-pro sm:w-[64px] w-full py-[3px] px-2.5 text-[#191919] text-[12px] leading-[18px] font-medium border border-[#191919] rounded">Log in</button>
                  </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center min-h-[100vh]">
                  <div className="flex flex-col items-center max-w-[542px] w-full">
                    <div className="flex items-center gap-3 w-[151.2px] h-[80px]">
                      <Image src={videoIcon} alt="video-icon" />
                      <Image className="w-[108px] h-6" src={logo} alt="type-form" />
                    </div>
                    <h2 className="font-apercu-pro mb-4 text-2xl text-[rgb(94,94,94)] text-center font-[300] leading-9 md:px-0 px-3">Get better data with conversational forms, surveys, quizzes & more.</h2>

                    <div className="flex flex-col gap-4 w-[254px]">
                      <input className="font-apercu-pro w-full px-1 py-[6px] text-md text-[rgb(207,207,206)] border border-[rgb(207,207,206)] rounded-[4px] leading-6 font-normal " type="email" placeholder=" Email" />
                      <input className="font-apercu-pro w-full px-1 py-[6px] text-md border text-[rgb(207,207,206)] border-[rgb(207,207,206)] rounded-[4px] leading-6 font-normal" type="password" placeholder=" Password" />
                      <span className="flex gap-2">
                        <input className="font-apercu-pro w-[45px] h-5 text-[rgb(207,207,206)] border border-[rgb(207,207,206)] rounded-[4px] appearance-none" type="checkbox" id="terms" name="terms" value="terms" />
                        <label htmlFor="terms" className="font-apercu-pro text-[#191919] text-sm leading-[18px]"> I agree to Typeform’s <a className="underline" href="#">Terms of Service</a>, <a className="underline" href="#">Privacy Policy</a> and <a className="underline" href="#">Data Processing Agreement</a>.</label>
                      </span>
                      <div className="flex w-full justify-between items-center">
                        <p className="font-apercu-pro text-md leading-8 text-[#191919]">See options</p>
                        <Image src={downArrow} alt="down-arrow" />
                      </div>
                      <button type="submit" className="font-apercu-pro w-[230px] px-1 py-[9px] text-md  rounded-[4px] leading-[22.4px] font-normal bg-[#1a1a1a] text-white">Create my free account</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
