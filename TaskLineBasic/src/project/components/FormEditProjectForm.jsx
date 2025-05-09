/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
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
import updateProject from '../services/updateProject'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditProjectForm = ({ 
	editProjectData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: editProjectData })
  
  
  
  
  const navigate = useNavigate()
  
  const editProject = (data) => {
    const cleanData = cleanFormData(data)
    updateProject({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/projects/${editProjectData.projectId}`)
  	notifySuccess(`Update Project berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Project Form" 
		  onSubmit={handleSubmit(editProject)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="title"
		        name="title"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Project Title"
		            placeholder="Masukkan project title"
		            defaultValue={editProjectData.title}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="description"
		        name="description"
		        control={control}
		        render={({ field, fieldState }) => (
				  <RichTextField
		            label="Project Description"
		            placeholder="Masukkan project description"
		            defaultValue={editProjectData.description}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Edit Project" type="submit" variant="primary">Edit Project</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditProjectForm
