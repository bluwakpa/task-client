import React, { useState } from 'react'
import data from './data'

export default function CategoryNav() {
    const [categories, setCategories] = useState(data.categories)

//import data, iterate over data, get category Id, route

    return (
        <aside style={{width:"25%"}}>
            <main>
                <header>
                    <h1>
                    CategoryNav
                    </h1>
                </header>
                <section>
                    <ul>
                        <button>Personal</button><br />
                        <button>Work</button><br />
                        <button>Chores</button><br />
                    </ul>
                </section>
            </main>
        </aside>
    )
}