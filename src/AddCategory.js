import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from './ApiContext'

export default function AddCategory(props) {
    const context = useContext(ApiContext)
    console.log(context.categories)
    const init = {
        category: ""
    }
    const [formData, setFormData] = useState(init)

    const handleChange = (e) => {
        /* insert fetch and then for db */
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        /* insert fetch and then for db */
        e.preventDefault()
        const newCategory = {
          category: parseInt(formData.category),
        }
        context.setCategories([...context.categories, newCategory])
        props.history.push(`/task/${formData.category}`)
    }
    AddCategory.defaultProps = {
        /* insert fetch and then for db */
        history: {
            push: () => { }
        },
    }

    let allCategories = [1, 2, 3, 4, 5, 6]

    allCategories = allCategories.filter(filteredCategory => !context.categories.some(category => category.category === filteredCategory))
    console.log(allCategories)

    return (
        <main role="main">
            <header role="banner">
                <h2>Select Category</h2>
            </header>
            <div>
                {
                    context.categories.map(category => (
                        <div>
                            <Link to={`/task/${category.category}`}>
                                <button type='submit'>
                                    <span>Task Category {category.category}</span>
                                </button>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <form className='signup-form' onSubmit={onSubmit}>
                <div className="container-fluid">
                    <section className="button-section">
                        <span className="custom-dropdown big">
                            <select value={formData.category} name='category' onChange={handleChange} required>
                                <option value=""> Add Task Category </option>
                                {
                                    allCategories.map(category => (
                                        <option value={category}>{category}</option>
                                    ))
                                }
                            </select>
                        </span>
                        <button type='submit' > Submit </button>
                    </section>
                </div>
            </form>
        </main>
    );
}