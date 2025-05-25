/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import { notifyError, notifySuccess } from '@/commons/utils/toaster'

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

    const viewTasks = async () => {
      navigate(
        '/task?'
        + `projectId=${data.projectId}`
        
      );
    };
    
    
  
    const confirmDelete = async () => {
      await deleteProject({
        projectId: data.projectId,
      })
      .then(({ data: { data } }) => {
          navigate(`/projects`)
          notifySuccess(`Delete project berhasil!`);
      })
      .catch((error) => {
      console.error(error);
          notifyError(error);
      });
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
              variant="secondary"
              onClick={() => edit()}
            >
              Edit
            </Button>
        ,
            <Button
          variant="secondary"
          onClick={() => setShowModalConfirmDeleteProject(true)}
        >
          Delete
        </Button>
        ,
            <Button
          variant="secondary"
          onClick={() => viewTasks()}
        >
          View Tasks
        </Button>
        ,
            <Button
          variant="secondary"
          onClick={() => window.location.href = `/projectburndown/${data.projectId}`}
        >
          View Burndown
        </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalConfirmDeleteProject}
           title={"Confirm Delete Project"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalConfirmDeleteProject(false)}>Batal</Button></Link>
          <Button
            variant="secondary"
            onClick={() => confirmDelete()}
          >
            Confirm Delete
          </Button>
        </Modal>
        
      ]}
    />
  );
};

export default ProjectDetail;
