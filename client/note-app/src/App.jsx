import { Route, Routes } from 'react-router-dom';
import './App.css'
import PathTo from './utils/paths';

import Dashboard from './pages/Dashboard/Dashboard';
import CreateNote from './components/Note/Note-Create-Edit/CreatePage';
import Layout from './components/Main/Layout';
import NotePage from './components/Note/NoteCard/NotePage';
import EditNote from './components/Note/Note-Create-Edit/EditPage';

function App() {

  return (
    <>
      <Routes>

        <Route path={PathTo.Dashboard} element={<Layout />}>

          <Route index element={<Dashboard />} />
          <Route path={PathTo.NoteId} element={<NotePage />} />
          <Route path={PathTo.CreateNote} element={<CreateNote />} />
          <Route path={PathTo.EditNoteId} element={<EditNote />} />
          {/* <Route path={"*"} element={<NotFound />} /> */}

        </Route>

      </Routes>
    </>
  )
}

export default App
