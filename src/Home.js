import React, { } from 'react';
import { Link } from 'react-router-dom'
import './index.css';

export default function App() {
    return (
        <div>
            <main role="main" className="main" />
            <header role="banner" className="header">
                <h2 className="h2"> Home </h2>
                <p> Track and categorize your tasks to stay organized and view your progress. </p>
            </header>
            <section className="button-section">
                <Link to="/task"><button className="start-button"> Get Organized! <i class="fas fa-2x fa-arrow-circle-right"></i></button></Link>
            </section>
        </div>
    );
}