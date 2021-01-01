import React from 'react'
import './Skeleton.css'

const SkeletonElements = ({ type }) => {
    const classes = `skeleton ${type}`;
    return (
        <div className={classes}>
            
        </div>
    )
}

export default SkeletonElements
