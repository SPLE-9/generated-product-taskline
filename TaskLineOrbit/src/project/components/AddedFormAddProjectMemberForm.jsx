/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.10.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "@/commons/hooks/useParams"
import { useNavigate, useSearchParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  RadioInputField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveProjectMemberProjectWithMembers from '../services/saveProjectMemberProjectWithMembers'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const AddedFormAddProjectMemberForm = ({ 
	memberListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: memberListData })
  
  
  
  
  const navigate = useNavigate()

  const { projectId } = useParams()
  
  const addMember = (data) => {
    const cleanData = cleanFormData(data)
    saveProjectMemberProjectWithMembers({
      ...cleanData,
	  projectId: projectId
    })
    .then(({ data: { data } }) => {
     navigate(`/projects/${projectId}`)
  	notifySuccess(`SaveProjectMember ProjectWithMembers berhasil!`);
    })
    .catch((error) => {
		navigate(`/projects/${projectId}`)
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Project Member Form" 
		  onSubmit={handleSubmit(addMember)}
	
	    vas={[
		  ]}
	
		  formFields={[
		  
	
		  
		  <Controller
		    key="memberId"
	        name="memberId"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Member"
	            options={memberListData}
				optionKey="memberId"
	            optionLabel="name"
	            placeholder="Masukkan member"
					fieldState={fieldState}
					defaultValue={memberListData.memberId}
	            {...field}
					isRequired={false}
	          />
	
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button id="_sXE3cDJDEfCBKLsveFPh7w" key="Add Member" type="submit" variant="primary">Add Member</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default AddedFormAddProjectMemberForm
