import { Box, Button } from "@mui/material";
import InputField from "../../components/common/InputField";
import MultipleChoiceField from "../../components/common/MultipleChoiceField";
import PrivacyPolicy from "./component/PrivacyPolicy";
import BuilderRules from "./component/BuilderRules";

const ApplyBuilder = () => {
  return (
    <>
      <h1>빌더 지원서</h1>
      <InputField id="email" label="이메일" placeholder="이메일" />
      <InputField id="name" label="이름" placeholder="이름" />
      <InputField
        id="phone"
        label="연락처(000-0000-0000)"
        placeholder="연락처"
      />
      <InputField
        id="introduce-me"
        label="3줄 자기소개"
        placeholder="3줄 자기소개"
        multiline={true}
        rows={3}
      />
      <MultipleChoiceField
        id="was-builder"
        label="이전에 빌더로 활동하신 적 있으신가요?"
        options={[
          { value: "예", label: "yes" },
          { value: "아니오", label: "no" },
        ]}
      />
      <InputField
        id="discordId"
        label="디스코드 ID"
        placeholder="디스코드 ID"
      />
      <InputField
        id="notionId"
        label="노션 ID(이메일 형태; 이메일 주소가 아니면 초대가 어렵습니다."
        placeholder="노션 ID"
      />
      <InputField
        id="portfolio"
        label="자신을 표현할 수 있는 링크를 하나 공유해주세요!"
        placeholder="e.g. linkedIn, github, blog, CV 등"
      />
      <MultipleChoiceField
        id="role"
        label="지원하고자 하는 역할은 무엇인가요?"
        options={[
          { value: "아카데미 빌더", label: "academy" },
          { value: "펠로우십 빌더", label: "fellowship" },
          { value: "커뮤니티 빌더", label: "comminity" },
          { value: "데브 빌더", label: "dev" },
          {
            value: "리서치팀으로 전환(1기수 수료 후, 2기수 이상 활동 희망시",
            label: "research",
          },
        ]}
      />
      <InputField
        id="build-name"
        label='지원하신 역할로 진행하실 스터디/프로젝트명을 알려주세요. (리서치팀인 경우 팀명과 프로젝트 명을 각각 적어주셍. "팀명/프로젝트명" 형태)'
        placeholder=""
      />
      <InputField
        id="build-description"
        label="위의 지원하신 역할에 대한 활동 계획을 간단히 적어주세요.
(아카데미 빌더의 경우: 주제와 간단한 주차별 목표,
 커뮤니티 빌더의 경우: 기대하는 역할,
 데브 빌더의 경우: 개발하고 싶으신 것)"
        placeholder=""
        multiline={true}
        rows={3}
      />
      <InputField
        id="build-reason"
        label="위의 지원하신 역할과 관련된 경험이 있으시다면, 얘기해주세요! 없으시다면, 지원하신 역할을 하고자하는 이유를 적어주세요."
        placeholder=""
        multiline={true}
        rows={3}
      />
      <InputField
        id="build-gain"
        label="빌더 활동을 통해 얻고 싶은 것이 무엇인가요?"
        placeholder=""
        multiline={true}
        rows={3}
      />
      <InputField
        id="build-research-member"
        label="(리서치팀 전환시 작성) 새로운 프로젝트에도 계속해서 참여할 사람이 누구인지 알려주세요. 그리고 추가 모집 여부도 알려주세요.
            (예: 김찬란 빌더, 김찬란, 김찬란 / 총 3명 / 추가 모집 0명 필요)"
        placeholder=""
        multiline={true}
        rows={3}
      />
      <InputField
        id="expectation"
        label="여러분들이 가짜연구소 커뮤니티에 가장 기대하는 것은 무엇인가요?"
        placeholder=""
        multiline={true}
        rows={3}
      />
      <InputField
        id="question"
        label="가짜연구소에 궁금한 점이 있으신가요?"
        placeholder=""
        multiline={true}
        rows={3}
      />
      <MultipleChoiceField
        id=""
        label="가짜연구소의 대부분의 모임 및 활동들은 주 1회 이루어집니다. 2024년 상반기에 주 1회 모임을 이끄시거나 참여하시는 것이 가능하신지 생각해봐주세요!"
        options={[
          {
            value: "cool",
            label: "특별한 일정 (1-2회 정도) 외에는 가능합니다",
          },
          {
            value: "condition-busy",
            label:
              "취업이나 이직 등 변동사항이 생기면 그때부터는 활동이 어려울것 같습니다.",
          },
          {
            value: "busy",
            label: "너무 바쁘고, 다른 일정들이 많아 예상할 수가 없습니다.",
          },
        ]}
        isOtherOption={true}
      />
      <MultipleChoiceField
        id="is-builder"
        label='본 신청은 스터디나 일반 참가자가 아닌 "운영진"을 신청하는 것임을 확인하셨나요?'
        options={[
          { value: "예", label: "yes" },
          { value: "아니오", label: "no" },
        ]}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          textAlign: "start",
          border: "1px solid #ccc",
          borderRadius: 2,
          marginBottom: 2,
        }}
      >
        <BuilderRules />
      </Box>
      <MultipleChoiceField
        id="rule-agree"
        label="위의 규칙에 동의하십니까?"
        options={[
          { value: "예", label: "yes" },
          { value: "아니오", label: "no" },
        ]}
      />
      <MultipleChoiceField
        id="privacy-agree"
        label="아래 개인정보 처리방침에 동의하십니까?"
        options={[
          { value: "예", label: "yes" },
          { value: "아니오", label: "no" },
        ]}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          textAlign: "start",
          border: "1px solid #ccc",
          borderRadius: 2,
          marginBottom: 2,
        }}
      >
        <PrivacyPolicy />
      </Box>
      <Button fullWidth={true} variant="contained" color="primary">
        제출하기
      </Button>
    </>
  );
};

export default ApplyBuilder;
