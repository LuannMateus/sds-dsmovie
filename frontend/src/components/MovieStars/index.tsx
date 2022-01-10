import { ReactComponent as StarFull } from '../../assets/starFull.svg';
import { ReactComponent as StarHalf } from '../../assets/starHalf.svg';
import { ReactComponent as StarEmpty } from '../../assets/starEmpty.svg';

import './styles.css';

export const MovieStars = () => {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
};
