import React from 'react'
import SkeletonElements from './SkeletonElements'

const SkeletonProfile = ({ theme }) => {
    const themeClass = theme || 'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-profile">
                <div>
                    <SkeletonElements type="avatar" />
                </div>
                <div>
                    <SkeletonElements type="title" />
                    <SkeletonElements type="text" />
                    <SkeletonElements type="text" />
                </div>
            </div>
        </div>
    )
}

export default SkeletonProfile
