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


import deleteProject from '../services/deleteProject'


import * as Layouts from "@/commons/layouts";

const ProjectTable = ({ projectMemberListData,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  
  const [selectedConfirmRemoveMember, setSelectedConfirmRemoveMember] = React.useState(null);
  
  
  	const { 	projectId } = useParams();
  
  const [showModalConfirmDeleteProject, setShowModalConfirmDeleteProject] = React.useState(false);
  
  
  
  	
    const confirmDelete = async (selectedConfirmDeleteProject) => {
      await deleteProject({
        projectId: selectedConfirmDeleteProject.projectId,
      });
  		navigate('/projects');
    }
    const addProjectMember = async (selectedConfirmDeleteProject) => {
      navigate(
        '/projects/:projectId/add-member?'
        + `projectId= ${selectedConfirmDeleteProject.projectId}`
        
      );
    };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[projectMemberListData]}
  	  itemsAttrs={[
          {
            id: "name",
            condition: "",
            label: "Name",
  		  featureName: "name",
            editable: false
          }
  ,
          {
            id: "email",
            condition: "",
            label: "Email",
  		  featureName: "email",
            editable: false
          }
  ]}
        itemsEvents={(projectItem) => [
          
          <Link to=''>
            <Button
          	id="_snY2QDJBEfCBKLsveFPh7w"
              size="sm"
              variant=
                          "secondary"
            >
              Remove
            </Button>
          </Link>
          
          
        ]}
  	/>
  		<Modal
  		isShow={showModalConfirmDeleteProject}
  		title={"Confirm Delete Project"}
  		>
  		
  		
  		
  		
  		
  				<Link to=''><Button className={`w-full`} variant="tertiary" onClick={() => setShowModalConfirmDeleteProject(false)}>Batal</Button></Link>
  		
  		<Button
  		  id="_n1yzoCHnEfChD41pi9QTAQ"
  		  variant="primary"
  		  onClick={() => confirmDelete(selectedConfirmDeleteProject)}
  		>
  		  Confirm
  		</Button>
  		<Button
  		  id="_vf7-cDJGEfCBKLsveFPh7w"
  		  variant="primary"
  		  onClick={() => addProjectMember(selectedConfirmDeleteProject)}
  		>
  		  Add
  		</Button>
  		</Modal>
  		
  </>
  )
};

export default ProjectTable;
