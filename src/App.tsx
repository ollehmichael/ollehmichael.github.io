import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {Box} from '@mui/material';
import {HomePage, ProjectPage} from './pages';

function App() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'scroll',
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:projectID" element={<ProjectPage />} />
        <Route path="*" element={null} />
      </Routes>
    </Box>
  );
}

export default App;
