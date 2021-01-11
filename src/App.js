import React, { useState } from 'react';
import elements from './elements'
import { Route, Link } from 'react-router-dom'
import FolderNav from './FolderNav'
import NoteList from './NoteList'
import Note from './Note'
import FilteredNotes from './FilteredNotes'

console.log(elements)



function App() {
  const [folders, setFolders] = useState(elements.folders)
  const [notes, setNotes] = useState(elements.notes)
  return (
    <main>
      <header>
        <h1>
          <Link to="/">Noteful</Link>
        </h1>
      </header>
      <section style={{display:"flex"}}>
        <Route exact path="/" component={FolderNav} />
        <Route exact path="/" component={NoteList} />
      </section>
      <section style={{display:"flex"}}>
        <Route exact path="/folder/:folderId" component={FolderNav} />
        <Route exact path="/folder/:folderId" component={NoteList} />
      </section>
      <section>
        <Route exact path="/note/:noteId" component={Note} />
      </section>
    </main>
  );
}

export default App;