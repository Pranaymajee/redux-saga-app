import React from 'react'
import { useDispatch } from 'react-redux'
import { getNews } from '../redux/actions/news';
import applogo from '../static/images/applogo.png'

export default function Navbar() {
    const dispatch = useDispatch();

    const handleGetNews = () => {
        dispatch(getNews()); // DISPATCHING THE ACTION
    }

    return (
        <>
            <nav className="navbar bg-light fixed-top">
                <div className="container">
                    <div className="navbar-brand">
                        <img src={applogo} alt="" width="40px" height="30px" className="d-inline-block align-text-top" />
                        <span style={{fontWeight: 'bold', marginLeft: '10px'}}>NewsBeast</span>
                    </div>
                    <div className="d-flex" role="search">
                        <button type="button" onClick={handleGetNews} className="btn btn-info">Get News</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
