import './directory.styles.scss'

import CategoryItem from '../category-item/category-item.component';


import React from 'react'

const Directory = ({ categories }) => {
    return (
        <div className="categories-container">
            <CategoryItem categories={categories} />
        </div>
    )
}

export default Directory;