import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {MdLibraryBooks, MdSubscriptions, MdManageAccounts} from 'react-icons/md';
import {GiPapers, GiAnticlockwiseRotation} from 'react-icons/gi';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'News',
    path: '/news',
    icon: <GiPapers />,
    cName: 'nav-text'
  },
  {
    title: 'Library',
    path: '/library',
    icon: <MdLibraryBooks />,
    cName: 'nav-text'
  },
  {
    title: 'Subscriptions',
    path: '/subscription',
    icon: <MdSubscriptions />,
    cName: 'nav-text'
  },
  {
    title: 'History',
    path: '/history',
    icon: <GiAnticlockwiseRotation />,
    cName: 'nav-text'
  },
  {
    title: 'Accounts',
    path: '/accounts',
    icon: <MdManageAccounts />,
    cName: 'nav-text'
  }
];