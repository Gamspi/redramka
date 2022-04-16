import React, {memo} from 'react';
import "./Success.scss"

const Success = ({name}:{name:string}) => (
            <div className="success">
                <h1>
                    Успех
                </h1>
                <p>Вы успешно удалили карточку</p>
                <p>{name}</p>
            </div>
    );


export default memo(Success);
