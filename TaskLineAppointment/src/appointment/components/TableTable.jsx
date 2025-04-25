/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import * as Layouts from "@/commons/layouts";

const TableTable = ({ appointmentsList,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  const navigate = useNavigate();
  const detail = async (tableItem) => {
    isMobile() && navigate(`/appointments/${tableItem.appointmentId}`
    );
  };
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[appointmentsList]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "startTime",
            condition: "",
            label: "startTime",
  		  featureName: "startTime",
            editable:  false 
          }
  ,
          {
            id: "endTime",
            condition: "",
            label: "endTime",
  		  featureName: "endTime",
            editable:  false 
          }
  ,
          {
            id: "description",
            condition: "",
            label: "description",
  		  featureName: "description",
            editable:  false 
          }
  ,
          {
            id: "createdBy",
            condition: "",
            label: "Created By",
  		  featureName: "createdBy",
            editable:  false 
          }
  ]}
        itemsEvents={(tableItem) => [
          <Link to={`/appointments/${tableItem.appointmentId}`}>
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

export default TableTable;
