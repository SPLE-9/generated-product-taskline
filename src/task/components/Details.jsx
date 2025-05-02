/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const Details = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "taskTitle",
          condition: "",
          label: "Task Title",
          featureName: "invalid",
        }
        ,
        {
          id: "visualizationAttribute",
          condition: "",
          label: "Visualization Attribute",
          featureName: "invalid",
        }
        ,
        {
          id: "visualizationAttribute",
          condition: "",
          label: "Visualization Attribute",
          featureName: "invalid",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default Details;
