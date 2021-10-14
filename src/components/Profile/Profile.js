import './Profile.scss';
import userImg from '../../images/image-jeremy.png';

function Profile({ active, onClick }) {
  return (
    <div className='Profile'>
      <div className='Profile__user'>
        <img src={userImg} alt='' className='Profile__image' />
        <div className='texts'>
          <p className='report'>Report for</p>
          <p className='user-name'>Jeremy Robson</p>
        </div>
      </div>

      <div className='Profile__buttons'>
        <button
          className={`${active === 'daily' ? 'btn active' : 'btn'}`}
          onClick={() => onClick('daily')}
        >
          Daily
        </button>
        <button
          className={`${active === 'weekly' ? 'btn active' : 'btn'}`}
          onClick={() => onClick('weekly')}
        >
          Weekly
        </button>
        <button
          className={`${active === 'monthly' ? 'btn active' : 'btn'}`}
          onClick={() => onClick('monthly')}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}

export default Profile;
