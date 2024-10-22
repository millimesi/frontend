import React from 'react'
import './homeCard.css'
import Card from './Card'

const HomeCard = () => {
  return (
    <section>
      <div className='container'>
        <Card>
          <h2>For Developers</h2>
          <p>Browse our React jobs and start your career today</p>
          <a href="#">Browse Jobs</a>
        </Card>
        <Card bg='-bg-indigo'>
          <h2>For Employers</h2>
          <p>List your job to find the perfect developer for the role</p>
          <a href="#">Add Jobs</a>
        </Card>
      </div>
    </section>
  )
}

export default HomeCard
