/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.10.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteProject from '../services/deleteProject';

import * as Layouts from "@/commons/layouts";


const ProjectDetail = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalConfirmDeleteProject, setShowModalConfirmDeleteProject] = React.useState(false); 
    const edit = async () => {
      navigate(
        '/projects/edit?'
        + `projectId=${data.projectId}`
        
      );
    };
    
    
  
    const confirmDelete = async () => {
      await deleteProject({
        projectId: data.projectId,
      });
      navigate('/projects');
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
        
      ]}
      itemsEvents={[
            <Button
              id="_skt2UCHmEfChD41pi9QTAQ"
              variant="secondary"
              onClick={() => edit()}
            >
              Edit
            </Button>
        ,
            <Button
          id="_3pUzQCHmEfChD41pi9QTAQ"
          variant="secondary"
          onClick={() => setShowModalConfirmDeleteProject(true)}
        >
          Delete
        </Button>
        ,
            <Button
          id="_ETjLICZxEfCpHrP5kP8MPQ"
          variant="secondary"
        >
          View Tasks
        </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalConfirmDeleteProject}
           title={"Confirm Delete Project"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalConfirmDeleteProject(false)}>Batal</Button></Link>
          <Button
            id="_n1yzoCHnEfChD41pi9QTAQ"
            variant="secondary"
            onClick={() => confirmDelete()}
          >
            Confirm Delete
          </Button>
          <Button
            id="_vf7-cDJGEfCBKLsveFPh7w"
            variant="secondary"
            onClick={() => addProjectMember()}
          >
            Add Project Member
          </Button>
        </Modal>
        
      ]}
    />
  );
};

export default ProjectDetail;
