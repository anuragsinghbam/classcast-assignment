export default function Box(props) {
  const {
    boxClass,
    title,
    timeStamp,
    exercise,
    backgroundImage,
    warmUpTime,
  } = props

  return (
    <div
      className={boxClass}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className='sport-club'>
        <h2>{title}</h2>
        <h4>Sport Club</h4>
        <div className='time-stamp'>
          <p>{timeStamp}</p>
        </div>
      </div>
      <div className='warm-up'>
        <h1>{warmUpTime}</h1>
        <h5>min</h5>
        <p>Warm-Up</p>
      </div>
      <div className='stretch'>
        <h1>20</h1>
        <h5>min</h5>
        <p>{exercise}</p>
      </div>
      <div className='three-dots'>
        <div className='dot' />
        <div className='dot' />
        <div className='dot' />
      </div>
    </div>
  )
}
