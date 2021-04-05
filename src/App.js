import './App.css'
import React from 'react'
import Box from './Box'
import Trainer from './Trainer'

export default function App() {
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
          <Box
            boxClass='box blue-box'
            title='Box'
            timeStamp='10:00'
            exercise='Stretch'
            warmUpTime='40'
            backgroundImage='./curves-1.svg'
          />

          <Box
            boxClass='box red-box'
            title='Crossfit'
            timeStamp='12:00'
            exercise='Pull-Ups'
            warmUpTime='20'
            backgroundImage='./curves-2.svg'
          />

          <div className='three-dots grey-dots'>
            <div className='dot' />
            <div className='dot' />
            <div className='dot' />
          </div>
        </div>
        <div className='your-trainers'>
          <h2>Your Trainers</h2>
          <Trainer 
            profilePic='./trainer-1.jpg'
            name='John Kavanagh'
            jobTitle='MMA Coach'
          />
          
          <Trainer 
            profilePic='./trainer-2.jpg'
            name='Jacob Jones'
            jobTitle='Boxing Coach'
          />
          
          
        </div>
      </main>
    </div>
  )
}
