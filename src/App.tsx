import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import {
  AboutMePage,
  HomePage,
  ProjectDetailPage,
  ProjectListPage,
} from './pages';
import Header from './components/Header';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/:projectID" element={<ProjectDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Box>
  );
}

export default App;
