import { Box, Button } from "@mui/material";
import InputField from "../../components/common/InputField";
import MultipleChoiceField from "../../components/common/MultipleChoiceField";
import PrivacyPolicy from "../../components/common/PrivacyPolicy";
import AgreeDatasetUsage from "./component/AgreeDatasetUsage";
import { useState } from "react";

const ApplyRunner = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    introduceMe: "",
    discordId: "",
    notionId: "",
    credentialLink: "",
    portfolio: "",
    applyFirst: "",
    applySecond: "",
    applyThird: "",
    motivation: "",
    myFuture: "",
    myLevel: "",
    etc: "",
    question: "",
    availability: "",
    privacyAgree: true,
    agreeDatasetUsage: true,
  });

  const handleChange = (id: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <>
      <h1>러너 지원서</h1>
      <InputField
        id="email"
        label="이메일"
        placeholder="이메일"
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <InputField
        id="name"
        label="이름"
        placeholder="이름"
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <InputField
        id="phone"
        label="연락처(000-0000-0000)"
        placeholder="연락처"
        onChange={(e) => handleChange("phone", e.target.value)}
      />
      <InputField
        id="introduce-me"
        label="3줄 자기소개"
        placeholder="3줄 자기소개"
        multiline={true}
        rows={3}
        onChange={(e) => handleChange("introduceMe", e.target.value)}
      />
      <InputField
        id="discord-id"
        label="디스코드 ID"
        placeholder="디스코드 ID"
        onChange={(e) => handleChange("discordId", e.target.value)}
      />
      <InputField
        id="notion-id"
        label="Notion ID를 알려주세요!(팀 운영에 활용됩니다!)"
        placeholder="노션 ID"
        onChange={(e) => handleChange("notionId", e.target.value)}
      />
      <InputField
        id="credential-link"
        label="LinkedIn 혹은 자신의 신원을 확인할 수 있는 링크(중복 신청 등의 문제를 방지하기 위한 본인 인증 과정 정도로 생각해주세요!)"
        placeholder="e.g. linkedIn, github, blog, CV 등"
        onChange={(e) => handleChange("credentialLink", e.target.value)}
      />
      <InputField
        id="portfolio"
        label="기타 자신을 소개할 수 있는 링크(블로그, 유튜브 등 선택사항입니다!)"
        placeholder="e.g. linkedIn, github, blog, CV 등"
        onChange={(e) => handleChange("portfolio", e.target.value)}
      />
      {/* 이 부분 DB랑 연동시켜야함 */}
      <MultipleChoiceField
        id="apply-first"
        label="지원하고자 하는 팀은 무엇인가요? (1지망)"
        options={[
          { value: "1academy", label: "[Study] JAX 입문하기]" },
          { value: "2academy", label: "[Study] JAX 입문하기]" },
          { value: "3academy", label: "[Study] JAX 입문하기]" },
          { value: "4academy", label: "[Study] JAX 입문하기]" },
        ]}
        onChange={(e) => {
          handleChange("applyFirst", e.target.value);
        }}
      />
      <MultipleChoiceField
        id="apply-second"
        label="지원하고자 하는 팀은 무엇인가요? (2지망)"
        options={[
          { value: "5academy", label: "[Study] JAX 입문하기]" },
          { value: "6academy", label: "[Study] JAX 입문하기]" },
          { value: "7academy", label: "[Study] JAX 입문하기]" },
          { value: "8academy", label: "[Study] JAX 입문하기]" },
        ]}
        onChange={(e) => {
          handleChange("applySecond", e.target.value);
        }}
      />
      <MultipleChoiceField
        id="apply-third"
        label="지원하고자 하는 팀은 무엇인가요? (3지망)"
        options={[
          { value: "9academy", label: "[Study] JAX 입문하기]" },
          { value: "10academy", label: "[Study] JAX 입문하기]" },
          { value: "11academy", label: "[Study] JAX 입문하기]" },
          { value: "12academy", label: "[Study] JAX 입문하기]" },
        ]}
        onChange={(e) => {
          handleChange("applyThird", e.target.value);
        }}
      />
      <InputField
        id="motivation"
        label="가짜연구소 활동에 지원하시게 된 동기가 궁금합니다!(지원 수가 모집 인원을 초과할 경우, 선정에 중요한 영향을 미치는 항목이니 잘 작성해주세요!)"
        placeholder=""
        multiline={true}
        rows={3}
        onChange={(e) => {
          handleChange("motivation", e.target.value);
        }}
      />
      <InputField
        id="myfuture"
        label="내년 상반기 기대하는 나의 성장한 모습은 무엇인가요?"
        placeholder=""
        multiline={true}
        rows={3}
        onChange={(e) => {
          handleChange("myFuture", e.target.value);
        }}
      />
      <InputField
        id="mylevel"
        label="1지망으로 지원한 팀에서 다루는 내용에 대한 현재 나의 수준에 대해서 간단히 말씀해주세요!"
        placeholder=""
        multiline={true}
        rows={3}
        onChange={(e) => {
          handleChange("myLevel", e.target.value);
        }}
      />
      <InputField
        id="etc"
        label="기타 (팀별 계획표 참고하여 필요시 작성)"
        placeholder=""
        multiline={true}
        rows={3}
        onChange={(e) => {
          handleChange("etc", e.target.value);
        }}
      />
      <InputField
        id="question"
        label="가짜연구소에 궁금한 것을 질문해주세요!"
        placeholder=""
        multiline={true}
        rows={3}
        onChange={(e) => {
          handleChange("question", e.target.value);
        }}
      />
      <MultipleChoiceField
        id="availability"
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
        onChange={(e) => {
          handleChange("availability", e.target.value);
        }}
      />
      <MultipleChoiceField
        id="privacy-agree"
        label="아래 개인정보 처리방침에 동의하십니까?"
        options={[
          { value: "y", label: "예" },
          { value: "n", label: "아니오" },
        ]}
        onChange={(e) => {
          handleChange("privacyAgree", e.target.value === "y" ? true : false);
        }}
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
        <AgreeDatasetUsage />
      </Box>
      <MultipleChoiceField
        id="dataset-agree"
        label="데이터셋 활용에 동의하십니까?"
        options={[
          { value: "y", label: "예" },
          { value: "n", label: "아니오" },
        ]}
        onChange={(e) => {
          handleChange(
            "agreeDatasetUsage",
            e.target.value === "y" ? true : false
          );
        }}
      />
      <Button
        fullWidth={true}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        제출하기
      </Button>
    </>
  );
};

export default ApplyRunner;
