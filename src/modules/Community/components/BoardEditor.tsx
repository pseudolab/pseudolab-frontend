import { useState } from "react";
import {
    Box,
    TextField,
    Button,
} from "@mui/material";
import type { RequestEditBoard } from "../types/BoardTypes";

const DEFAULT_BOARD_EDIT_INFO: RequestEditBoard = { author: "", contents: "", password: "" }

const BoardEditor = () => {
    const [boardInfo, setBoardInfo] = useState(DEFAULT_BOARD_EDIT_INFO)
    const [errorMessages, setErrorMessages] = useState({ author: "", password: "", contents: "" })
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        let valid = true;
        const newErrorMessages = { author: "", password: "", contents: "" };

        if (!boardInfo.author.trim()) {
            newErrorMessages.author = "닉네임을 입력해 주세요.";
            valid = false;
        }

        const passwordRegex = /^\d{4}$/;
        if (!boardInfo.password.trim() || !passwordRegex.test(boardInfo.password)) {
            newErrorMessages.password = "비밀번호를 4자리로 입력해 주세요.";
            valid = false;
        }

        if (!boardInfo.contents.trim()) {
            newErrorMessages.contents = "내용을 입력해 주세요.";
            valid = false;
        }

        setErrorMessages(newErrorMessages);

        if (!valid) {
            return
        }

        console.log("Form submitted:", boardInfo);
    };


    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "70vw", textAlign: "center" },
            }}
        >
            <TextField
                required
                id="outlined-required"
                name="author"
                label="닉네임"
                placeholder="닉네임을 입력해 주세요"
                value={boardInfo.author}
                onChange={(e) => setBoardInfo({ ...boardInfo, author: e.target.value })}
                error={!!errorMessages.author}
            />
            <br />

            <TextField
                required
                id="outlined-required"
                name="password"
                type="password"
                label="비밀번호"
                placeholder="비밀번호를 4자리를 입력해 주세요."
                value={boardInfo.password}
                onChange={(e) => setBoardInfo({ ...boardInfo, password: e.target.value })}
                inputProps={{
                    maxLength: 4, // 최대 길이 4자로 설정
                }}
                error={!!errorMessages.password}
            />
            <br />

            <TextField
                required
                fullWidth
                multiline
                id="outlined-required"
                name="contents"
                label="내용"
                rows={10}
                placeholder="내용을 입력해주세요"
                value={boardInfo.contents}
                onChange={(e) => setBoardInfo({ ...boardInfo, contents: e.target.value })}
                error={!!errorMessages.contents}
            />
            <br />

            <Button variant="outlined" onClick={handleSubmit}>등록</Button>
        </Box>
    );
};

export default BoardEditor;
