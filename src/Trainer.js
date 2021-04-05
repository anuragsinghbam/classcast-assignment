export default function Trainer(props) {
  const { profilePic, name, jobTitle } = props

  return (
    <div className='trainer'>
      <div className='trainer-profile'>
        <div className='trainer-pic'>
          <img src={profilePic} alt='' />
          <div className='green-dot' />
        </div>
        <div className='trainer-name'>
          <h3>{name}</h3>
          <h5>{jobTitle}</h5>
        </div>
      </div>
      <div className='message-icon'>
        <h1>
          <i className='far fa-comment-dots' />
        </h1>
      </div>
    </div>
  )
}
