import { useTranslation } from "react-i18next";
import LinkButton from "../shared/LinkButton";
import CV_eng from "/cv_eng.pdf";
import CV_swe from "/cv_swe.pdf";
import i18next from "i18next";

const CTA = () => {
  const { t, i18n } = useTranslation();
  const getLanguage = () => i18next.language || window.localStorage.i18nextLng;

  const isEnglish = () => {
    const currLocale = getLanguage();
    if (currLocale == "en") return true;
    return false;
  };


  return (
    <div className="mt-[37px] flex gap-5 justify-center">
      <a className="bg-border-primary" href={isEnglish() ? CV_eng : CV_swe} download>
        <button
          className="bg-liBg dark:bg-transparent dark:hover:bg-bgAlt dark:hover:text-white 
                      dark:hover:border-transparent dark:border-primary dark:text-primaryAlt dark:bg-none
                      border-solid border-2 border-liSec
                      text-liLight hover:bg-liSec hover:text-liBg
                      transition ease-linear duration-300
                      md:py-3 py-4 px-5 rounded-lg cursor-pointer text-center text-sm whitespace-nowrap md:text-lg md:whitespace-normal"
          title={t("header.downloadCV")}
        >
          {t("header.downloadCV")}
        </button>
      </a>
      <LinkButton link="#contact" title={t("contactButton.aria")}>
        {t("contactButton.text")}
      </LinkButton>
    </div>
  );
};

export default CTA;
