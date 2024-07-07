import { Avatar, IconButton } from '@mui/material';

// 토큰 활용해서 프로필 아이콘 갱신?
interface UserProfileProps {
    jwtToken: string;
}

const UserProfileButton = ({ jwtToken }: UserProfileProps) => {
    const handleClickProfile = () => {
        // TODO: 프로필 관련 DropDown 메뉴 출력 (정보, 업적, 로그아웃 등...)
    };

    return (
        <>
            <IconButton size="medium" onClick={handleClickProfile}>
                <Avatar src="" />
            </IconButton>
        </>
    );
};

export default UserProfileButton;
