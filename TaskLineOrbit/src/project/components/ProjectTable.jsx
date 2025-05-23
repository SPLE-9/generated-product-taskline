/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.10.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';


import deleteProjectMemberProjectWithMembers from '../services/deleteProjectMemberProjectWithMembers'


import * as Layouts from "@/commons/layouts";

const ProjectTable = ({ projectMemberListData,
		 

	}) => {
  const { checkPermission } = useAuth();

  const { projectId } = useParams();
  
  const [selectedConfirmRemoveMember, setSelectedConfirmRemoveMember] = React.useState(null);
  
  const [showModalConfirmRemoveMember, setShowModalConfirmRemoveMember] = React.useState(false);
  
  
  
  	
  const confirmRemove = async (selectedConfirmRemoveMember) => {
    await deleteProjectMemberProjectWithMembers({
      projectMemberId: selectedConfirmRemoveMember.projectMemberId,
    });
    window.location.reload();
  }
  
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
        itemsEvents={(projectMemberItem) => [
          
          <Link to=''>
            <Button
          	  id="_snY2QDJBEfCBKLsveFPh7w"
              size="sm"
              variant="secondary"
              onClick={() => {
                setSelectedConfirmRemoveMember(projectMemberItem);
                setShowModalConfirmRemoveMember(true);
              }}
            >
              Remove
            </Button>
          </Link>
          
          
        ]}
  	/>
  		<Modal
  		isShow={showModalConfirmRemoveMember}
  		title={"Confirm Remove Member"}
  		>
  		
  		
  		
  		
  		
  				<Link to=''><Button className={`w-full`} variant="tertiary" onClick={() => setShowModalConfirmRemoveMember(false)}>Batal</Button></Link>
  		
  		<Button
  		  id="_n1yzoCHnEfChD41pi9QTAQ"
  		  variant="primary"
  		  onClick={() => confirmRemove(selectedConfirmRemoveMember)}
  		>
  		  Confirm Remove
  		</Button>
  		</Modal>
  		
  </>
  )
};

export default ProjectTable;
