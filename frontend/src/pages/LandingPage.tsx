import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SpeedIcon from '@mui/icons-material/Speed';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { PublicLayout } from '../layouts/PublicLayout';

const features = [
  {
    icon: <SpeedIcon sx={{ fontSize: 48 }} />,
    title: '即座に返信',
    description:
      'AIが24時間365日、お客様からの問い合わせに即座に対応。レスポンスの遅さによる離脱を防ぎます。',
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 48 }} />,
    title: '賃貸知識を学習',
    description:
      '賃貸不動産の専門知識を学習したAIが、正確で的確な回答を提供。誤った情報を伝えるリスクを軽減。',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 48 }} />,
    title: '人間味ある対話',
    description:
      'AI感を感じさせない自然な会話で、お客様との信頼関係を構築。電話予約までスムーズに誘導。',
  },
];

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <PublicLayout maxWidth={false}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #4a90b8 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            AIで賃貸仲介の
            <br />
            顧客対応を自動化
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            LINE上でのお客様とのやり取りをAIが代行。
            <br />
            問い合わせから電話予約まで、24時間自動対応。
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/chat')}
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)',
              },
            }}
          >
            デモを試す
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          sx={{ mb: 6, fontWeight: 600 }}
        >
          3つの特長
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            まずは体験してみてください
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            実際のAIチャットを体験して、
            <br />
            どのような顧客対応ができるかご確認ください。
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/chat')}
            sx={{ px: 6, py: 1.5 }}
          >
            AIチャットを試す
          </Button>
        </Container>
      </Box>
    </PublicLayout>
  );
};
