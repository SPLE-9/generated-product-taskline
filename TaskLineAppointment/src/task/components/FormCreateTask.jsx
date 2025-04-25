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
import saveTask from '../services/saveTask'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormCreateTask = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");
  
  const navigate = useNavigate()
  
  const create = (data) => {
    const cleanData = cleanFormData(data)
    saveTask({
      ...cleanData,
      projectId,
    })
    .then(({ data: { data } }) => {
      navigate(`/task?projectId=${projectId}`)
  	notifySuccess(`Save Task berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Create Task" 
		  onSubmit={handleSubmit(create)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="title"
		        name="title"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Title"
		            placeholder="Masukkan title"
		            fieldState={fieldState}
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
				  <InputField
		            label="Description"
		            placeholder="Masukkan description"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Create" type="submit" variant="primary">Create</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormCreateTask