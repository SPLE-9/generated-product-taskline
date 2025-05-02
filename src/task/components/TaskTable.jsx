/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const TaskTable = ({ listTask,
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listTask]}
  	  itemsAttrs={[
          {
            id: "taskTitle",
            condition: "",
            label: "Task Title",
  		  featureName: "",
            editable: false
          }
  ,
          {
            id: "taskDescription",
            condition: "",
            label: "Task Description",
  		  featureName: "",
            editable: false
          }
  ]}
        itemsEvents={(taskItem) => [
          
          <Link to={`/task/edit`}>
            <Button
              size="sm"
              variant=
                          "secondary"
            >
              Edit Task
            </Button>
          </Link>
          
          
  ,
          
  <Link to=''>
    <Button 
       variant=
                  "secondary"
       onClick={() => deleteTask(taskItem)}
    >
       Delete Task
    </Button>
  </Link>
  
  
        ]}
  	/>
  </>
  )
};

export default TaskTable;
