import React from 'react';
import "./NotFoundPage.scss"
const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <h2 className="not-found-page__title">404 </h2>
            <p className="not-found-page__text">
                Not Found Page
            </p>
        </div>
    );
};

export default React.memo(NotFoundPage);
