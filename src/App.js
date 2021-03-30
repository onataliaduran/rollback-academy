import './App.css';
import MainLayout from './components/Layouts/MainLayout/MainLayout';
import CoursesContainer from './components/Courses/CoursesContainer/CoursesContainer';

function App() {
  return (
    <div className="App">
        <MainLayout>
          <CoursesContainer />
        </MainLayout>
    </div>
  );
}

export default App;
