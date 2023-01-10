import React from "react";
import NewsItem from "./NewsItem";
import { useSelector } from "react-redux";

export default function NewsItems() {
  const news = useSelector((state) => state.news);

  console.log(news?.loading);

  const newsData = news?.news?.data?.articles;
  return (
    <>
      <div className="container">
        <div className="row">
          {news?.loading === true && (
            <>
              <div class="d-flex justify-content-center mb-3">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </>
          )}
          {!newsData && news?.loading === false && (
            <>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3">
                <div className="alert alert-info" role="alert">
                  Please Click on <strong>Get News</strong> Button to Get News!
                </div>
              </div>
            </>
          )}
          {newsData?.map((element) => (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mb-3">
              <NewsItem data={element} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
