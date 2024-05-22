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
    value: "기술 블로그 운영자",
  },
  {
    selected: 0,
    status: 0,
    value: "Linkedin 사용자",
  },
  {
    selected: 0,
    status: 0,
    value: "데이터 분석가/과학자",
  },
  {
    selected: 0,
    status: 0,
    value: "PM/PO",
  },
  {
    selected: 0,
    status: 0,
    value: "8기 스터디 참여자",
  },
  {
    selected: 0,
    status: 0,
    value: "인과추론 번역서 독자",
  },
  {
    selected: 0,
    status: 0,
    value: "A/B 테스트 경험자",
  },
  {
    selected: 0,
    status: 0,
    value: "제품 개선 경험자",
  },
  {
    selected: 0,
    status: 0,
    value: "인과추론팀 깃헙 팔로워",
  },
  {
    selected: 0,
    status: 0,
    value: "대시보드 만들어본 사람",
  },
  {
    selected: 0,
    status: 0,
    value: "통계/경제 전공자",
  },
  {
    selected: 0,
    status: 0,
    value: "오픈소스 기여자",
  },
  {
    selected: 0,
    status: 0,
    value: "SQL 사용자",
  },
  {
    selected: 0,
    status: 0,
    value: "데이터 컨퍼런스 참가경험",
  },
  {
    selected: 0,
    status: 0,
    value: "인과추론 연구자",
  },
  {
    selected: 0,
    status: 0,
    value: "CHATGPT 사용자",
  },
  {
    selected: 0,
    status: 0,
    value: "OP.GG 써본 사람",
  },
  {
    selected: 0,
    status: 0,
    value: "배그 해본 사람",
  },
  {
    selected: 0,
    status: 0,
    value: "게임이 취미인 사람",
  },
  {
    selected: 0,
    status: 0,
    value: "MBTI E인 사람",
  },
  {
    selected: 0,
    status: 0,
    value: "반려동물 키우는 사람",
  },
  {
    selected: 0,
    status: 0,
    value: "아이폰 쓰는 사람",
  },
  {
    selected: 0,
    status: 0,
    value: "넷플릭스 구독자",
  },
  {
    selected: 0,
    status: 0,
    value: "오늘 저녁 약속있는 사람",
  },
  {
    selected: 0,
    status: 0,
    value: "KPOP 좋아하는 사람",
  },
];
