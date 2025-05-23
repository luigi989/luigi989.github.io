import { useRecoilValue } from "recoil";
import { chosenProjectInfo } from "../../atoms/atoms";
import GithubButton from "./GithubButton";
import { useTranslation } from "react-i18next";

interface ProjectContainerProps {
  onClick: () => void;
}

const ProjectContainer = ({ onClick }: ProjectContainerProps) => {
  const { t } = useTranslation();
  const projectInfo = useRecoilValue(chosenProjectInfo);
  console.log(projectInfo);
  return (
    <div
      className="p-5 rounded-2xl md:rounded-none md:rounded-r-2xl flex flex-col
        bg-liSec dark:bg-bgAlt text-liBg items-center justify-center space-y-6"
    >
      <div className="flex flex-col-reverse md:flex-row space-x-4 justify-between">
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <p>{t('portfolio.projects.' + projectInfo.link.toLowerCase() + '.description')}</p>
          <div className="flex flex-col py-4">
            <h2 className="text-xl text-liPrimary dark:text-primaryAlt">
              {t("portfolio.project.toolsUsed")}
            </h2>
            <ul>
              {projectInfo.tags.map((tag) => (
                <li key={tag}>
                  <span className="dark:text-primaryAlt">{"> "}</span>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex p-2 space-x-2">
            {projectInfo.github_link && (
              <GithubButton link={projectInfo.github_link} />
            )}
          </div>
        </div>
        <img
          className="w-3/4 md:w-1/2 rounded-2xl"
          src={"/" + projectInfo.link + "/" + projectInfo.link + "-sm.webp"}
          alt={t('portfolio.project.image')}
        />
      </div>
      <button
        onClick={onClick}
        title="Close project"
        className="py-1 px-3 border-solid border-2 border-red-500 
            hover:text-black hover:bg-red-500 text-white rounded-md
            transition ease-linear duration-300"
      >
        {t("portfolio.project.close")}
      </button>
    </div>
  );
};

export default ProjectContainer;
