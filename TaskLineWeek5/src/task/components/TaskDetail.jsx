/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.10.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const TaskDetail = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const edit = async () => {
      navigate(
        '/task/edit?'
        + `taskId=${data.taskId}`
        
      );
    };
    
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "title",
          condition: "",
          label: "Title",
          featureName: "title",
        }
        ,
        {
          id: "description",
          condition: "",
          label: "Description",
          featureName: "description",
        }
        ,
        {
          id: "status",
          condition: "",
          label: "Status",
          featureName: "status",
        }
        
      ]}
      itemsEvents={[
            <Button
              id="_iw7UsCdPEfCHbe1wpsqx6g"
              variant="secondary"
              onClick={() => edit()}
            >
              Edit
            </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default TaskDetail;
