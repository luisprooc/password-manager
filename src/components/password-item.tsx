import { Avatar, Box, ListItem, ListItemText, OutlinedInput, IconButton } from '@mui/material';
import { Password } from '../types/index';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PasswordInput from './password-input';

interface Props {
  password: Password;
}

const PasswordItem = ({ password }: Props) => {
  return (
    <>
      {/* Mobile */}
      <ListItem>
        <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 4, width: '100%' }}>
          <Box sx={{ display: 'flex' }}>
            <Avatar sx={{ mr: 2, backgroundColor: 'primary.main' }}>
              <EnhancedEncryptionIcon />
            </Avatar>
            <ListItemText primary={password.name} secondary={password.url} sx={{ display: 'inline' }} />

            <Box sx={{ mr: 2 }}>
              <IconButton
                color="primary"
                edge="end"
                aria-label="rename"
                onClick={() => {
                  alert(`rename ${password.name}`);
                }}
              >
                <DriveFileRenameOutlineIcon />
              </IconButton>

              <IconButton
                color="primary"
                edge="end"
                aria-label="delete"
                onClick={() => {
                  alert(`delete ${password.name}`);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <OutlinedInput id="standard-basic" type="text" value={password.username} sx={{ mr: 2 }} fullWidth />
            <PasswordInput value={password.key} />
          </Box>
        </Box>
      </ListItem>

      {/* Desktop */}
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <ListItem>
          <Avatar sx={{ mr: 2, backgroundColor: 'primary.main' }}>
            <EnhancedEncryptionIcon />
          </Avatar>
          <ListItemText primary={password.name} secondary={password.url} />

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <OutlinedInput id="standard-basic" type="text" value={password.username} sx={{ mr: 2 }} fullWidth />
            <PasswordInput value={password.key} />

            <Box sx={{ mr: 2 }}>
              <IconButton
                color="primary"
                edge="end"
                aria-label="rename"
                onClick={() => {
                  alert(`rename ${password.name}`);
                }}
              >
                <DriveFileRenameOutlineIcon />
              </IconButton>

              <IconButton
                color="primary"
                edge="end"
                aria-label="delete"
                onClick={() => {
                  alert(`delete ${password.name}`);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        </ListItem>
      </Box>
    </>
  );
};

export default PasswordItem;
