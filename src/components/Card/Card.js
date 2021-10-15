import './Card.scss';
import ellipsis from './../../images/icon-ellipsis.svg';

function Card({ title, timeframes, active }) {
  let cardType = title.replace(/\s+/g, '').toLowerCase();
  let tFrame =
    active === 'daily' ? 'Day' : active === 'weekly' ? 'Week' : 'Month';

  return (
    <div className={`Card ${cardType}`}>
      <div className='Card__information'>
        <div className='header'>
          <p className='title'>{title}</p>
          <span className='dots'>
            <img src={ellipsis} alt='' />
          </span>
        </div>
        <div className='times'>
          <p className='current-time'>{timeframes[active].current}hrs</p>
          <p className='previous-time'>{`Last ${tFrame} - ${timeframes[active].previous}hrs`}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
