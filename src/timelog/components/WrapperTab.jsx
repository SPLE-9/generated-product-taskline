/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { Tab } from '@/commons/components'
import AllTimelog from '../containers/AllTimelog.jsx'
import MyTimelog from '../containers/MyTimelog.jsx'


const WrapperTab = () => {
  
  return (
    <Tab
      tabs={[
        {
          id: 'AllTimelog',
          name: 'All Timelog',
          children: <AllTimelog />
        }
    ,
        {
          id: 'MyTimelog',
          name: 'My Timelog',
          children: <MyTimelog />
        }
      ]}
      id='0'
    />
  );
};

export default WrapperTab;
