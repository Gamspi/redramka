import React from 'react';
import "./Success.scss"

const Success = ({name}) => {
    return (

            <div className="success">
                <h1>
                    Успех
                </h1>
                <p>Вы успешно удалили карточку</p>
                <p>{name}</p>
            </div>

    );
};

export default Success;
