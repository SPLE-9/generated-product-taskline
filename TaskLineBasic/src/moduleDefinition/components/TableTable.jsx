/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const TableTable = ({ appointmentsList,
	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[appointmentsList]}
  	  itemsAttrs={[
          {
            id: "startTime",
            condition: "",
            label: "startTime",
  		  featureName: "startTime",
            editable: false
          }
  ,
          {
            id: "endTime",
            condition: "",
            label: "endTime",
  		  featureName: "endTime",
            editable: false
          }
  ,
          {
            id: "description",
            condition: "",
            label: "description",
  		  featureName: "description",
            editable: false
          }
  ,
          {
            id: "invitedUsers",
            condition: "",
            label: "Invited Users",
  		  featureName: "inviteduserimpl",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default TableTable;
