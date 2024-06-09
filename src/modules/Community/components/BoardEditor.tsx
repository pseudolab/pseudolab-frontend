import { useState } from "react";
import {
    Box,
    TextField,
    Button,
} from "@mui/material";
import type { RequestEditBoard } from "../types/BoardTypes";

const DEFAULT_BOARD_EDIT_INFO: RequestEditBoard = { author: "", contents: "", password: "" }
let author: string | null = localStorage.getItem("nickname")
author = author == null ? "" : author
DEFAULT_BOARD_EDIT_INFO.author = author

const DEFAULT_ERROR_MESSAGE = { author: "", password: "", contents: "" }

const BoardEditor = () => {
    const [boardInfo, setBoardInfo] = useState(DEFAULT_BOARD_EDIT_INFO)
    const [errorMessages, setErrorMessages] = useState(DEFAULT_ERROR_MESSAGE)
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        let valid = true;
        const newErrorMessages = DEFAULT_ERROR_MESSAGE;
        let alertMessage: string = ""

        if (!boardInfo.author.trim()) {
            newErrorMessages.author = "닉네임을 입력해 주세요.";
            alertMessage += "닉네임을 입력해 주세요.\n";
            valid = false;
        }

        const passwordRegex = /^\d{4}$/;
        if (!boardInfo.password.trim() || !passwordRegex.test(boardInfo.password)) {
            newErrorMessages.password = "비밀번호를 숫자로만4자리로 입력해 주세요.";
            alertMessage += "비밀번호를 숫자로만 4자리로 입력해 주세요.\n";
            valid = false;
        }

        if (!boardInfo.contents.trim()) {
            newErrorMessages.contents = "내용을 입력해 주세요.";
            alertMessage += "내용을 입력해 주세요.\n";
            valid = false;
        }

        setErrorMessages(newErrorMessages);

        if (!valid) {
            alert(alertMessage);
            return
        }

        localStorage.setItem("nickname", boardInfo.author);
        console.log("Form submitted:", boardInfo);
        window.location.href = "/community"
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
                id="outlined-required-author"
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
                id="outlined-required-password"
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
                id="outlined-required-contents "
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
