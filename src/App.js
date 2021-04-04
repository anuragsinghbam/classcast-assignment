import './App.css'

function App() {
  return (
    <div className='App'>
      <main className='main-content'>
        <nav className='navbar'>
          <div className='user-details'>
            <div className='profile-img'>
              <img src='./user.png' alt='user profile' />
            </div>
            <div className='username'>
              <h2>Floyd Miles</h2>
              <p>Free Account</p>
            </div>
          </div>
          <div className='nav-icons'>
            <div className='bell-icon'>
              <i className='far fa-bell' />
              <p className='notification-count'>4</p>
            </div>
            <div className='settings-icon'>
              <i className='fas fa-sliders-h' />
            </div>
          </div>
        </nav>
        <div className='health'>
          <h2>Health</h2>
          <div className='progress-container'>
            <div className='hours'>
              <h1>6:25</h1>
              <p>
                <i className='fas fa-clock health-icons' />
                &nbsp; Hours
              </p>
              <div className='progress-bar'>
                <div className='progress-done' />
              </div>
            </div>
            <div className='divider' />
            <div className='rpm'>
              <h1>120</h1>
              <p>
                <i className='fas fa-heartbeat health-icons' />
                &nbsp; Rpm
              </p>
              <div className='progress-bar'>
                <div className='progress-done' />
              </div>
            </div>
            <div className='divider' />
            <div className='kcal'>
              <h1>1.84</h1>
              <p>
                <i className='fas fa-apple-alt health-icons' />
                &nbsp; Kcal
              </p>
              <div className='progress-bar'>
                <div className='progress-done' />
              </div>
            </div>
          </div>
        </div>
        <div className='sign-up'>
          <div className='sign-up-img'>
            <img src='./sign-up.png' alt='sign-up image' />
          </div>
          <div className='sign-up-text'>
            <p>Sign up for a personal trainer to improve your results</p>
            <button className='sign-up-btn'>Sign Up</button>
          </div>
        </div>
        <div className='today-training'>
          <h2>Today trainings</h2>
          <div className='box blue-box'>
            <div className='sport-club'>
              <h2>Box</h2>
              <h4>Sport Club</h4>
              <div className='time-stamp'>
                <p>10:00</p>
              </div>
            </div>
            <div className='warm-up'>
              <h1>40</h1>
              <h5>min</h5>
              <p>Warm-Up</p>
            </div>
            <div className='stretch'>
              <h1>20</h1>
              <h5>min</h5>
              <p>Stretch</p>
            </div>
            <div className='three-dots'>
              <div className='dot' />
              <div className='dot' />
              <div className='dot' />
            </div>
          </div>
          <div className='box red-box'>
            <div className='sport-club'>
              <h2>Crossfit</h2>
              <h4>Sport Club</h4>
              <div className='time-stamp'>
                <p>12:00</p>
              </div>
            </div>
            <div className='warm-up'>
              <h1>20</h1>
              <h5>min</h5>
              <p>Warm-Up</p>
            </div>
            <div className='stretch'>
              <h1>20</h1>
              <h5>min</h5>
              <p>Pull-Ups</p>
            </div>
            <div className='three-dots'>
              <div className='dot' />
              <div className='dot' />
              <div className='dot' />
            </div>
          </div>
          <div className='three-dots grey-dots'>
            <div className='dot' />
            <div className='dot' />
            <div className='dot' />
          </div>
        </div>
        <div className='your-trainers'>
          <h2>Your Trainers</h2>
          <div className='trainer'>
            <div className='trainer-profile'>
              <div className='trainer-pic'>
                <img src='./trainer-1.jpg' alt='' />
                <div className='green-dot' />
              </div>
              <div className='trainer-name'>
                <h3>John Kavanagh</h3>
                <h5>MMA Coach</h5>
              </div>
            </div>
            <div className='message-icon'>
              <h1>
                <i className='far fa-comment-dots' />
              </h1>
            </div>
          </div>
          <div className='trainer'>
            <div className='trainer-profile'>
              <div className='trainer-pic'>
                <img src='./trainer-2.jpg' alt='' />
                <div className='green-dot' />
              </div>
              <div className='trainer-name'>
                <h3>Jacob Jones</h3>
                <h5>Boxing Coach</h5>
              </div>
            </div>
            <div className='message-icon'>
              <h1>
                <i className='far fa-comment-dots' />
              </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
