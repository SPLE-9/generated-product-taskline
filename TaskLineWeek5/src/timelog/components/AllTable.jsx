/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.10.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const AllTable = ({ tableAllTImelog,
	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[tableAllTImelog]}
  	  itemsAttrs={[
          {
            id: "date",
            condition: "",
            label: "Date",
  		  featureName: "timelogDate",
            editable: false
          }
  ,
          {
            id: "taskTitle",
            condition: "",
            label: "Task Title",
  		  featureName: "title",
            editable: false
          }
  ,
          {
            id: "userName",
            condition: "",
            label: "User Name",
  		  featureName: "name",
            editable: false
          }
  ,
          {
            id: "note",
            condition: "",
            label: "Note",
  		  featureName: "timelogNotes",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default AllTable;
