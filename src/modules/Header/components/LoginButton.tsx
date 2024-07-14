import { Box, IconButton, Modal } from '@mui/material';
import { Login } from '@mui/icons-material';
import { useState } from 'react';
import {
    DiscordLoginButton,
    GoogleLoginButton,
    GithubLoginButton,
} from 'react-social-login-buttons';
//import DiscordLoginButton from '../../../components/common/DiscordLoginButton';

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
};

const LoginButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const loginModal = (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <DiscordLoginButton />
                <GoogleLoginButton />
                <GithubLoginButton />
            </Box>
        </Modal>
    );

    return (
        <Box>
            <IconButton size="medium" onClick={handleOpen}>
                <Login />
            </IconButton>
            {loginModal}
        </Box>
    );
};

export default LoginButton;
