import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { SvgTemplate } from "./components/Template-svg";
import { useState } from "react";
import TemplateEyesShow from "./components/Template-eyes";
import { useTranslation } from "react-i18next";
import GoogleSvg from "./components/GoogleSvg";
import FacebookSvg from "./components/FacebookSvg";
import TwitterSvg from "./components/TwitterSvg";
import AppleSvg from "./components/AppleSvg";
import { Link } from "react-router-dom";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [dropDownLanguage, setDropDownLanguage] = useState(false);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setDropDownLanguage(false);
  };

  return (
    <div className="w-full bg-[#F0F4FC] h-screen">
      <div className="flex w-full h-32">
        <div className="flex justify-end w-full items-center p-5">
          <ul className="list-none flex items-center mx-16 relative">
            <div className="flex flex-col items-center justify-center relative">
              <li className="m-5 cursor-pointer" onClick={() => setDropDownLanguage((prev) => !prev)}>
                {i18n.language === "en" ? "English" : i18n.language === "id" ? "Indonesia" : "Japan"} <FontAwesomeIcon icon={faCaretDown} />
              </li>
              <div className={`transition-all duration-300 ease-in-out absolute top-16 w-24 bg-white border border-[#E0E0E9] rounded shadow z-10 ${dropDownLanguage ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <li onClick={() => handleLanguageChange("id")} className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                  Indonesia
                </li>
                <li onClick={() => handleLanguageChange("jp")} className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                  Japan
                </li>
                <li onClick={() => handleLanguageChange("en")} className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                  English
                </li>
              </div>
            </div>

            <li className="m-5 cursor-pointer text-[#4461F2] font-bold">{t("signIn")}</li>
            <Link to="/register" className="flex items-center justify-center m-5 cursor-pointer text-[#4461F2] bg-white rounded-2xl w-24 h-9 shadow-[0px_4px_10px_rgba(68,97,242,0.2)] border p-3 border-[#E0E0E9]">
              {t("register")}
            </Link>
          </ul>
        </div>
      </div>

      {/* Main login section */}
      <div className="flex mx-6 -my-8 p-5">
        <div className="w-[65%]">
          <div className="flex flex-col justify-center mx-10 text-3xl font-bold p-5">
            <h1>{t("welcome")}</h1>
            <p>{t("platform")}</p>
            <p className="font-thin text-sm mt-4 mb-2 w-[37rem]">{t("description1")}</p>
            <p className="font-thin text-sm mb-2 w-[41rem]">{t("description2")}</p>
            <a href="#" className="text-[#4461F2] cursor-pointer text-xl">
              {t("join")}
            </a>
          </div>
          <div>
            <SvgTemplate className="w-full h-full mx-16" />
          </div>
        </div>

        {/* Login form */}
        <div className="w-[35%] my-12 flex flex-col justify-start">
          <div className="flex flex-col items-start w-full h-full">
            <h2 className="text-2xl font-semibold">{t("signIn")}</h2>
            <div className="w-[70%] h-[80%] rounded">
              <input className="my-4 bg-white border border-gray-200 w-80 h-12 rounded p-3 focus:outline-blue-300 shadow-[0px_4px_10px_rgba(68,97,242,0.2)]" placeholder={t("emailPlaceholder")} />
              <div className="flex relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="my-4 bg-white  border border-gray-200 w-80 h-12 rounded p-3 focus:outline-blue-300 shadow-[0px_4px_10px_rgba(68,97,242,0.2)]"
                  placeholder={t("passwordPlaceholder")}
                />
                {showPassword ? (
                  <TemplateEyesShow className="absolute inset-y-0 right-2 cursor-pointer pr-3 flex items-center" onClick={() => setShowPassword(false)} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} className="absolute top-8 right-3 opacity-50 cursor-pointer pr-3 flex items-center" onClick={() => setShowPassword(true)} />
                )}
              </div>

              <div className="w-full flex justify-end">
                <a href="#" className="flex justify-end pr-2 w-fit font-thin cursor-pointer">
                  {t("recoverPassword")}
                </a>
              </div>
              <a href="#" className="w-full bg-[#4461F2] cursor-pointer h-14 flex justify-center items-center rounded-lg my-3 text-white font-bold">
                {t("signInButton")}
              </a>

              <div className="w-full flex items-center justify-center ">
                <div className="mt-1 w-24 h-[1px] bg-gray-300"></div>
                <p className="mx-1 text-[#6C737F] text-sm">{t("orContinueWith")}</p>
                <div className="mt-1 w-24 h-[1px] bg-gray-300"></div>
              </div>

              <div className="flex justify-center items-center gap-8 my-12">
                <a href="#" className=" cursor-pointer flex items-center justify-center w-12 h-12 rounded-lg border bg-white border-gray-300 hover:bg-gray-100 shadow-[0px_3px_10px_rgba(68,97,242,0.2)]">
                  <GoogleSvg />
                </a>
                <a href="#" className=" cursor-pointer flex items-center justify-center w-12 h-12 rounded-lg border bg-white border-gray-300 hover:bg-gray-100 shadow-[0px_3px_10px_rgba(68,97,242,0.2)]">
                  <TwitterSvg />
                </a>
                <a href="#" className=" cursor-pointer flex items-center justify-center w-12 h-12 rounded-lg border bg-white border-gray-300 hover:bg-gray-100 shadow-[0px_3px_10px_rgba(68,97,242,0.2)]">
                  <FacebookSvg />
                </a>
                <a href="#" className=" cursor-pointer flex items-center justify-center w-12 h-12 rounded-lg border bg-white border-gray-300 hover:bg-gray-100 shadow-[0px_3px_10px_rgba(68,97,242,0.2)]">
                  <AppleSvg />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
