import React, { } from 'react';
import { Link } from 'react-router-dom'
import './index.css';

export default function App() {

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <main role="main" className="main">
                <header role="banner" className="header">
                    <h2> Home </h2>
                    <p> Track and categorize your tasks to stay organized and view your progress. </p>
                </header>
                <section>
                    <Link to="/tasks">
                        <button onSubmit={onSubmit} className="start-button">
                            <span>Get Organized!</span>
                            <i className="fas fa-2x fa-arrow-circle-right"></i>
                        </button>
                    </Link>
                </section>
            </main>
        </div>
    );
}