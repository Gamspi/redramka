import React, {memo} from 'react';
import './Success.scss';
interface props {
  name: string;
}
const Success = ({name}: props) => (
  <div className="success">
    <h1>Success</h1>
    <p>You have successfully deleted the card</p>
    <p>{name}</p>
  </div>
);

export default memo(Success);
