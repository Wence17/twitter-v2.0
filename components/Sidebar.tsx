import React from 'react'
import Image from 'next/image';
import {
  BellIcon, 
  HashtagIcon, 
  BookmarkIcon, 
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon, 
  UserIcon, 
  HomeIcon,
  RectangleStackIcon
} from '@heroicons/react/24/outline';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
        <Image 
          src="https://links.papareact.com/drq"
          className="m-3 w-10 h-10"
          alt="twitter logo"
          width="50"
          height="50"
        />
        <SidebarRow Icon= {HomeIcon} title='Home' />
        <SidebarRow Icon= {HashtagIcon} title='Explore' />
        <SidebarRow Icon= {BellIcon} title='Notifications' />
        <SidebarRow Icon= {EnvelopeIcon} title='Messages' />
        <SidebarRow Icon= {BookmarkIcon} title='Bookmark' />
        <SidebarRow Icon= {RectangleStackIcon} title='List' />
        <SidebarRow Icon= {UserIcon} title='Sign in' />
        <SidebarRow Icon= {EllipsisHorizontalCircleIcon} title='More' />
    </div>
  )
}

export default Sidebar