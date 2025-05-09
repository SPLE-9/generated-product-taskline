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

import * as Layouts from "@/commons/layouts";

const ProjectsTable = ({ projectListData,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  const navigate = useNavigate();
  const detail = async (projectsItem) => {
    isMobile() && navigate(`/projects/:projectId`
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
          
          <Link to={`/projects/:projectId`}>
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

export default ProjectsTable;
