import React from 'react'

const NewsCard = ({ articles }) => {
    return (
        <div className='card bg-white shadow-xl'>
            {articles.urlToImage && (
                <figure>
                    <img src={articles.urlToImage} alt={articles.title} className='w-full h-48 object-cover' />
                </figure>
            )}
            <div className='card-body'>
                <h2 className='card-title'>{articles.title}</h2>
                {articles.source?.name && (
                    <p className='text-sm text-gray-500 mb-2'>Source: {articles.source.name}</p>
                )}
                <p>{articles.description}</p>
                <div className='card-actions justify-end mt-4'>
                    <a href={articles.url} rel="noopener noreferrer" target='_blank' className='btn bg-teal-700 border-none outline-0'>
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NewsCard