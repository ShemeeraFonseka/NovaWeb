import React from 'react'
import './Team.css';
import shemiImg from './shemi.png';
import seliImg from './seli.png';
import runiImg from './runi.png';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Shemeera Fonseka",
      position: "Co-Founder & Tech Lead",
      image: shemiImg
    },
    {
      id: 2,
      name: "Selina Fernando",
      position: "Co-Founder & Operations Lead",
      image: seliImg
    },
    {
      id: 3,
      name: "Runeesha Senadeera",
      position: "Co-Founder & Marketing Lead",
      image: runiImg
    }
  ];

  return (
    <div className='team'>
      <h1>MEET THE TEAM</h1>
      <br />
      <div className='team-container'>
        {teamMembers.map((member) => (
          <div className='team-card' key={member.id}>
            <div className='team-image-wrapper'>
              <img src={member.image} alt={member.name} className='team-image' />
            </div>
            <div className='team-info'>
              <h3 className='team-name'>{member.name}</h3>
              <p className='team-position'>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team