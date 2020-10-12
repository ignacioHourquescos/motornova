import React from 'react';
import './SocialMedia.css';
import SocialMediaBar from 'react-social-media-bar';


const SocialMediaBarCrafted= props =>(
    <div className="social_media_bar_crafted" >
        <SocialMediaBar
        icons={[{'media':'facebook'},{'media':'instagram'},{'media':'thumbtack'}]}
        bgColor="rgba(0, 0, 0, 0)"
        iconColor="#fff"
        iconOpacity={1}
        iconSize="2rem"
        hoverColor="#fff"
        hoverOpacity={1}
        margin={{top: '5px', right: '5px', bottom: '5px', left: '5px'}}
        padding={{top: '0px', right: '0px', bottom: '0px', left: '0px'}}
        sameTab={false}
        vertical={true}
        />
    </div>

);

export default SocialMediaBarCrafted;