/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const ListTable = ({ notes,
	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[notes]}
  	  itemsAttrs={[
          {
            id: "notesID",
            condition: "",
            label: "Notes ID",
  		  featureName: "notesId",
            editable: false
          }
  ,
          {
            id: "visualizationAttribute",
            condition: "",
            label: "Visualization Attribute",
  		  featureName: "notesId",
            editable: false
          }
  ,
          {
            id: "notesTitle",
            condition: "",
            label: "Notes Title",
  		  featureName: "title",
            editable: false
          }
  ,
          {
            id: "notes",
            condition: "",
            label: "Notes",
  		  featureName: "notes",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default ListTable;
