import React from 'react'
import './Team.css';
import shemiImg from './shemi.jpg';
import seliImg from './seli.jpg';

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
      name: "Emily Rodriguez",
      position: "Design Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
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