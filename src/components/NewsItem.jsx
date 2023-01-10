import React from 'react'
import moment from 'moment';
export default function NewsItem({ data }) {

    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    {
                        (!data?.urlToImage) ? (
                            <>
                                Image Not Available
                            </>
                        ) : (
                            <>
                                <img src={data?.urlToImage} alt={data?.title} height="100%" width="100%" style={{ borderRadius: '10px' }} />
                            </>
                        )
                    }
                </div>
                <div className="card-header">
                    {
                        (!data?.author) ? (
                            <>
                                Author: Unknown
                            </>
                        ) : (
                            <>
                                Author: {data?.author}
                            </>
                        )
                    }
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data?.title}</h5>
                    <p className="card-text">{data?.description}</p>
                    <a href={data?.url} rel="noreferrer" className="btn btn-dark w-100" target="_blank">Read Full Article</a>
                </div>
                <div className="card-footer text-muted">
                    {moment(data?.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}
                </div>
            </div>
        </>
    )
}
