import React, { useState } from 'react'
import elements from './elements'

export default function NoteList() {
    const [notes, setNotes] = useState(elements.notes)


    return (
        <main>
            <header>
                <h1>
                NoteList
                </h1>
            </header>
            <section>
                <ul>
                    <li>Note 1</li>
                    <li>Note 2</li>
                    <li>Note 3</li>
                </ul>
            </section>
        </main>
    )
}