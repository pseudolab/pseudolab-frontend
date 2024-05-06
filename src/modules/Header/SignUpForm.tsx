import { Box, TextField, FormControlLabel, Checkbox, Link, Button } from "@mui/material";


interface SignUpProps {
    email: string // 소셜 로그인으로 자동으로 추가될 수 있다
}


const SignUpForm = (signUpProps: SignUpProps) => {

    return (
        <Box component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '50vw', textAlign: "center" },
        }}>
            <TextField
                required
                id="outlined-required"
                label="이름"
                placeholder="본명으로 입력"
            />
            <br />

            <TextField
                required
                id="outlined-required"
                label="닉네임"
                placeholder="2글자 이상 알파벳, 한글, 숫자"
            />
            <br />

            <TextField
                id="outlined"
                variant="outlined"
                label="전화번호"
                placeholder="010XXXXXXXX"
            />
            <br />

            <TextField
                id="outlined"
                label="이메일"
                defaultValue={signUpProps.email}
                placeholder="example@pseudolab.com"
            />
            <br />

            <Box sx={{ marginTop: "3vw" }}>
                <FormControlLabel required control={<Checkbox />} label="개인 정보 수집 및 이용 동의" />
                <Link href="/">보기</Link>
            </Box>
            <br />

            <Button variant="outlined">가입 하기</Button>

        </Box>
    );
};

export default SignUpForm;
