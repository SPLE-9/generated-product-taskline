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
import { isMobile } from '@/commons/utils/responsive';
import deleteTask from '../services/deleteTask';

import * as Layouts from "@/commons/layouts";

const TaskTable = ({ listTask,
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  const navigate = useNavigate();
  const detail = async (taskItem) => {
    isMobile() && navigate(`/task/${taskItem.taskId}`
    );
  };

  const hapus = async (taskItem) => {
      await deleteTask({
        taskId: taskItem.taskId,
      });
      window.location.reload();
    };
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listTask]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "title",
            condition: "",
            label: "Title",
  		  featureName: "title",
            editable: false
          }
  ,
          {
            id: "description",
            condition: "",
            label: "Description",
  		  featureName: "description",
            editable: false
          }
  ]}
        itemsEvents={(taskItem) => [
          
          <Link to=''>
            <Button 
               variant=
                          "tertiary"
               onClick={() => hapus(taskItem)}
            >
               Delete
            </Button>
          </Link>
          
          
  ,
          
  <Link to={`/task/${taskItem.taskId}`}>
    <Button
      size="sm"
      variant=
          "primary"
    >
      Detail
    </Button>
  </Link>
  
  
        ]}
  	/>
  </>
  )
};

export default TaskTable;
