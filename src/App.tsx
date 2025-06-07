import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faEyeSlash, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setDropDownLanguage(false);
  };

  return (
    <div className="w-full bg-[#F0F4FC] min-h-screen">
      {/* Header */}
      <div className="flex w-full h-16 md:h-32">
        <div className="flex justify-between md:justify-end w-full items-center p-4 md:p-5">
          {/* Mobile menu button */}
          <button className="md:hidden text-[#4461F2] text-xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none items-center mx-16 relative">
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

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E0E0E9] shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <div className="relative">
              <div className="cursor-pointer flex items-center justify-between" onClick={() => setDropDownLanguage((prev) => !prev)}>
                <span>{i18n.language === "en" ? "English" : i18n.language === "id" ? "Indonesia" : "Japan"}</span>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
              {dropDownLanguage && (
                <div className="mt-2 bg-gray-50 rounded border">
                  <div onClick={() => handleLanguageChange("id")} className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                    Indonesia
                  </div>
                  <div onClick={() => handleLanguageChange("jp")} className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                    Japan
                  </div>
                  <div onClick={() => handleLanguageChange("en")} className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                    English
                  </div>
                </div>
              )}
            </div>
            <div className="cursor-pointer text-[#4461F2] font-bold">{t("signIn")}</div>
            <Link to="/register" className="flex items-center justify-center cursor-pointer text-[#4461F2] bg-white rounded-2xl h-9 shadow-[0px_4px_10px_rgba(68,97,242,0.2)] border border-[#E0E0E9]" onClick={() => setMobileMenuOpen(false)}>
              {t("register")}
            </Link>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-col lg:flex-row mx-4 md:mx-6 p-4 md:p-5 gap-4 lg:gap-0">
        {/* Left section - Welcome content */}
        <div className="w-full lg:w-[65%] order-1 lg:order-1">
          <div className="flex flex-col justify-center mx-2 md:mx-10 text-xl md:text-2xl lg:text-3xl font-bold p-2 md:p-5">
            <h1 className="text-center lg:text-left">{t("welcome")}</h1>
            <p className="text-center lg:text-left">{t("platform")}</p>
            <p className="font-thin text-xs md:text-sm mt-4 mb-2 text-center lg:text-left max-w-full lg:w-[37rem]">{t("description1")}</p>
            <p className="font-thin text-xs md:text-sm mb-2 text-center lg:text-left max-w-full lg:w-[41rem]">{t("description2")}</p>
            <a href="#" className="text-[#4461F2] cursor-pointer hidden md:block text-lg md:text-xl text-center lg:text-left">
              {t("join")}
            </a>
          </div>
          <div className="hidden lg:block">
            <SvgTemplate className="w-full h-full mx-8 md:max-w-2 md:max-h-2 lg:mx-16" />
          </div>
        </div>

        {/* Right section - Login form */}
        <div className="w-full lg:w-[35%] order-2 lg:order-2 flex flex-col justify-start">
          <div className="flex flex-col items-center lg:items-start w-full">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center lg:text-left">{t("signIn")}</h2>
            <div className="w-full max-w-sm lg:w-[70%] lg:max-w-none">
              <input className="my-4 bg-white border border-gray-200 w-full h-12 rounded p-3 focus:outline-blue-300 shadow-[0px_4px_10px_rgba(68,97,242,0.2)]" placeholder={t("emailPlaceholder")} />
              <div className="flex relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="my-4 bg-white border border-gray-200 w-full h-12 rounded p-3 pr-12 focus:outline-blue-300 shadow-[0px_4px_10px_rgba(68,97,242,0.2)]"
                  placeholder={t("passwordPlaceholder")}
                />
                {showPassword ? (
                  <TemplateEyesShow className="absolute inset-y-0 right-2 cursor-pointer pr-3 flex items-center" onClick={() => setShowPassword(false)} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} className="absolute top-8 right-3 opacity-50 cursor-pointer pr-3 flex items-center" onClick={() => setShowPassword(true)} />
                )}
              </div>

              <div className="w-full flex justify-end">
                <a href="#" className="flex justify-end pr-2 w-fit font-thin cursor-pointer text-sm">
                  {t("recoverPassword")}
                </a>
              </div>

              <a href="#" className="w-full bg-[#4461F2] cursor-pointer h-14 flex justify-center items-center rounded-lg my-3 text-white font-bold">
                {t("signInButton")}
              </a>

              <div className="w-full flex items-center justify-center">
                <div className="mt-1 flex-1 h-[1px] bg-gray-300"></div>
                <p className="mx-3 text-[#6C737F] text-xs md:text-sm whitespace-nowrap">{t("orContinueWith")}</p>
                <div className="mt-1 flex-1 h-[1px] bg-gray-300"></div>
              </div>

              <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 my-8 md:my-12">
                <a href="#" className="cursor-pointer flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg border bg-white border-gray-300 hover:bg-gray-100 shadow-[0px_3px_10px_rgba(68,97,242,0.2)]">
                  <GoogleSvg />
                </a>
                <a href="#" className="cursor-pointer flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg border bg-white border-gray-300 hover:bg-gray-100 shadow-[0px_3px_10px_rgba(68,97,242,0.2)]">
                  <TwitterSvg />
                </a>
                <a href="#" className="cursor-pointer flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg border bg-white border-gray-300 hover:bg-gray-100 shadow-[0px_3px_10px_rgba(68,97,242,0.2)]">
                  <FacebookSvg />
                </a>
                <a href="#" className="cursor-pointer flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg border bg-white border-gray-300 hover:bg-gray-100 shadow-[0px_3px_10px_rgba(68,97,242,0.2)]">
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
