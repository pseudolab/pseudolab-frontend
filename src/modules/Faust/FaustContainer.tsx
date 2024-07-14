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

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const FaustContainer = () => {
  const [keywordList, _] = useState(getKeywordList());
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const sentenceId = useInput("42");

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
  const handleSentenceIDChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    sentenceId.onChange(event);
  };
  const handleRegisterSentence = () => {
    try {
      const sentences: { [key: string]: string } = {
        "42": "삶과 우주, 그리고 모든 것에 대한 답은 42 입니다.",
      };

      if (typeof sentenceId.value !== "string") {
        throw new Error("sentenceId.value must be a string");
      }

      if (!sentences.hasOwnProperty(sentenceId.value)) {
        throw new Error(
          `No sentence found for sentenceId.value: ${sentenceId.value}`
        );
      }

      alert(sentences[sentenceId.value]);
    } catch (error) {
      return `Error: ${(error as any).message}`;
    }
  };

  const handleNextButtonClick = () => {
    if (selectedKeywords.length === 4) {
      setIsClicked(true);
    } else {
      alert("4개의 키워드를 선택해주세요.");
    }
  };

  return (
    <FaustPresenter
      keywordList={keywordList}
      selectedKeywords={selectedKeywords}
      handleKeywordClick={handleKeywordClick}
      isClicked={isClicked}
      sentenceId={sentenceId.value}
      handleNextButtonClick={handleNextButtonClick}
      handleSentenceIDChange={handleSentenceIDChange}
      handleRegisterSentence={handleRegisterSentence}
    />
  );
};

export default FaustContainer;
