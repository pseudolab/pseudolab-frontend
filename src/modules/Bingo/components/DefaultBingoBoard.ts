export const shuffleArray = (array: any[]) => {
  let shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

export const defafultBingoBoard = [
  {
    selected: 0,
    status: 0,
    value: "학생 / 취준생",
  },
  {
    selected: 0,
    status: 0,
    value: "신입 ~ 2년차",
  },
  {
    selected: 0,
    status: 0,
    value: "3년차 ~ 5년차",
  },
  {
    selected: 0,
    status: 0,
    value: "6년차 이상",
  },
  {
    selected: 0,
    status: 0,
    value: "ML 연구자/엔지니어",
  },
  {
    selected: 0,
    status: 0,
    value: "데이터 분석가/엔지니어",
  },
  {
    selected: 0,
    status: 0,
    value: "Dev/MLOps, SRE, Platform",
  },
  {
    selected: 0,
    status: 0,
    value: "클라우드, 시스템",
  },
  {
    selected: 0,
    status: 0,
    value: "프론트 백 클라 서버 개발",
  },
  {
    selected: 0,
    status: 0,
    value: "기획, 디자인, 마케팅 등 기타 직군",
  },
  {
    selected: 0,
    status: 0,
    value: "가짜연구소 행사 처음 온 사람",
  },
  {
    selected: 0,
    status: 0,
    value: "8기 빌더, 러너",
  },
  {
    selected: 0,
    status: 0,
    value: "수도콘 2회 이상 참가",
  },
  {
    selected: 0,
    status: 0,
    value: "9기 빌더, 러너 희망자",
  },
  {
    selected: 0,
    status: 0,
    value: "스트레스 해소법 이야기하기",
  },
  {
    selected: 0,
    status: 0,
    value: "노동요 이야기하기",
  },
  {
    selected: 0,
    status: 0,
    value: "공부 꿀팁 이야기하기",
  },
  {
    selected: 0,
    status: 0,
    value: "취업/이직 이야기 하기",
  },
  {
    selected: 0,
    status: 0,
    value: "ChatGPT 이야기 하기",
  },
  {
    selected: 0,
    status: 0,
    value: "올해 목표 이야기 하기",
  },
  {
    selected: 0,
    status: 0,
    value: "SNS 인증 미션",
  },
  {
    selected: 0,
    status: 0,
    value: "PesudoRec 피카츄 부스",
  },
  {
    selected: 0,
    status: 0,
    value: "DE부캠 건강빵 인과추론 부스",
  },
  {
    selected: 0,
    status: 0,
    value: "껄무새 수다쟁이 RAG 부스",
  },
  {
    selected: 0,
    status: 0,
    value: "핸즈온 마법학교 AMA 참여",
  },
];
