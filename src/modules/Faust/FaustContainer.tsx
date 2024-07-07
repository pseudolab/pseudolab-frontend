import { useState } from "react";
import FaustPresenter from "./FaustPresenter";

const getKeywordList = () => {
  // ToDo: API 호출로 변경
  return [
    "Passion(열정)",
    "Science(과학)",
    "Excellence(탁월함)",
    "Understanding(이해)",
    "Dedication(헌신)",
    "Originality(독창성)",
    "Learning(학습)",
    "Achievement(성취)",
    "Brilliance(빛남)",
  ];
};

const FaustContainer = () => {
  const [keywordList, _] = useState(getKeywordList());
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const handleKeywordClick = (keyword: string) => {
    setSelectedKeywords((prevSelected) => {
      if (prevSelected.includes(keyword)) {
        return prevSelected.filter((item) => item !== keyword);
      } else if (prevSelected.length < 4) {
        return [...prevSelected, keyword];
      }
      return prevSelected;
    });
  };

  return (
    <FaustPresenter
      keywordList={keywordList}
      selectedKeywords={selectedKeywords}
      handleKeywordClick={handleKeywordClick}
    />
  );
};

export default FaustContainer;
