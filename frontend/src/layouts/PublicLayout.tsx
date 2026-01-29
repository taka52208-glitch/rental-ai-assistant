import { Box, AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import SmartToyIcon from '@mui/icons-material/SmartToy';

interface PublicLayoutProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  showHeader?: boolean;
  centerContent?: boolean;
}

export const PublicLayout = ({
  children,
  maxWidth = 'lg',
  showHeader = true,
  centerContent = false,
}: PublicLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
      }}
    >
      {showHeader && (
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <SmartToyIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              賃貸AIアシスタント
            </Typography>
            {isLandingPage ? (
              <Button
                color="inherit"
                variant="outlined"
                sx={{ borderColor: 'rgba(255,255,255,0.5)' }}
                onClick={() => navigate('/chat')}
              >
                デモを試す
              </Button>
            ) : (
              <Button color="inherit" onClick={() => navigate('/')}>
                トップへ戻る
              </Button>
            )}
          </Toolbar>
        </AppBar>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          ...(centerContent && {
            justifyContent: 'center',
            alignItems: 'center',
          }),
        }}
      >
        {maxWidth ? (
          <Container maxWidth={maxWidth} sx={{ py: 4, flexGrow: 1 }}>
            {children}
          </Container>
        ) : (
          children
        )}
      </Box>
    </Box>
  );
};
