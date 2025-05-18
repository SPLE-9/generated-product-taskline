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

const ProjectsTable = ({ projectListData,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  const navigate = useNavigate();
  const detail = async (projectsItem) => {
    isMobile() && navigate(`/projects/${projectsItem.projectId}`
    );
  };
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[projectListData]}
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
        itemsEvents={(projectsItem) => [
          
          <Link to={`/projects/${projectsItem.projectId}`}>
            <Button
          	id="_dV4xICHlEfChD41pi9QTAQ"
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

export default ProjectsTable;
