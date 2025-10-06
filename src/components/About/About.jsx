import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about'>
        <h1>What We Do</h1>
        <div className='about-container'>
            <div className='left-about'>
                <p>
                    At Nova Web, we specialize in providing complete digital solutions that help businesses thrive in the online world. From custom website and software development to e-commerce platforms, cloud solutions, and branding, we deliver innovative and reliable products tailored to each client's unique needs. Our team combines creativity and technology to craft digital experiences that engage users and drive results.
                    <br /><br />
                    We are passionate about helping brands enhance their online presence, streamline operations, and grow sustainably. Beyond building websites and software, we focus on strategic solutions that include Google Business setup, digital marketing, and scalable integrations. At Nova Web, we don't just develop products — we create tools that transform businesses and empower them for long-term success.
                </p>
            </div>

            <div className='right-about'>
                <div className='animation-container'>
                    {/* Computer Monitor */}
                    <div className='monitor'>
                        {/* Screen */}
                        <div className='screen'>
                            {/* Animated code lines */}
                            <div className='code-text'>
                                {'<div className="nova-web">'}
                                <br />
                                {'  const innovation = () => {'}
                                <br />
                                {'    return <Success />;'}
                                <br />
                                {'  }'}
                                <br />
                                {'</div>'}
                            </div>

                            {/* Floating particles */}
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className={`particle particle-${i % 3}`} 
                                     style={{
                                         left: `${20 + (i * 30)}px`,
                                         top: `${80 + (i % 3) * 20}px`,
                                         animationDuration: `${2 + (i % 3)}s`
                                     }} />
                            ))}

                            {/* Binary rain effect */}
                            {[...Array(6)].map((_, i) => (
                                <div key={`binary-${i}`} className='binary-rain'
                                     style={{
                                         left: `${30 + i * 40}px`,
                                         animationDuration: `${3 + (i % 2)}s`
                                     }}>
                                    1010<br/>0101<br/>1100<br/>0011
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Monitor Stand */}
                    <div className='monitor-stand' />

                    {/* Monitor Base */}
                    <div className='monitor-base' />

                    {/* Floating UI Elements */}
                    <div className='ui-element ui-element-1'>
                        {'</>'}
                    </div>

                    <div className='ui-element ui-element-2'>
                        {'{}'}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About