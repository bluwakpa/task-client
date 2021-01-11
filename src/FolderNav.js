import React, { useState } from 'react'
import elements from './elements'

export default function FolderNav() {
    const [folders, setFolders] = useState(elements.folders)

//import elements, iterate over data, get folder Id, route

    return (
        <aside style={{width:"25%"}}>
            <main>
                <header>
                    <h1>
                    FolderNav
                    </h1>
                </header>
                <section>
                    <ul>
                        <button>Important</button><br />
                        <button>Super</button><br />
                        <button>Spangley</button><br />
                    </ul>
                </section>
            </main>
        </aside>
    )
}