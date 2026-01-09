import React from 'react'

const CategorySelector = ({ category, onCategoryChange }) => {

    const categories = [
        { id: "general", name: "General" },
        { id: "business", name: "Business" },
        { id: "entertainment", name: "Entertainment" },
        { id: "health", name: "Health" },
        { id: "sciense", name: "Sciense" },
        { id: "sports", name: "Sports" },
        { id: "technology", name: "Technology" },
    ]

    return (
        <div className='flex justify-center'>
            <div className='btn-group'>
                {categories.map(cat => (
                    <button onClick={() => onCategoryChange(cat.id)} className={`btn bg-white text-teal-700 m-1 ${category === cat.id ? "btn-active" : ""}`} key={cat.id}>
                        {cat.name}
                    </button>
                ))
                }
            </div>
        </div>
    )
}

export default CategorySelector;