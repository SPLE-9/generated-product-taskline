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
import { isMobile } from '@/commons/utils/responsive';

import * as Layouts from "@/commons/layouts";

const TaskTable = ({ listTask,
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  const navigate = useNavigate();
  const detail = async (taskItem) => {
    isMobile() && navigate(`/task/${taskId}`
    );
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
  ]}
        itemsEvents={(taskItem) => [
          
          <Link to=''>
            <Button 
          	 id="_XkeOUCH0EfCEXJqvmcK_5Q"
               variant=
                          "tertiary"
               onClick={() => hapus(taskItem)}
            >
               Hapus
            </Button>
          </Link>
          
          
  ,
          
  <Link to={`/task/${taskId}`}>
    <Button
  	id="_6wx1gCdOEfCHbe1wpsqx6g"
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
