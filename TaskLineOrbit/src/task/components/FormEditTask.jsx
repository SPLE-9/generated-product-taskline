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
import updateTask from '../services/updateTask'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditTask = ({ 
	editTaskData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: editTaskData })
  
  
  
  
  const navigate = useNavigate()
  
  const edit = (data) => {
    const cleanData = cleanFormData(data)
    updateTask({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/task/${editTaskData.taskId}`)
  	notifySuccess(`Update Task berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Task" 
		  onSubmit={handleSubmit(edit)}
	
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
		            defaultValue={editTaskData.title}	            fieldState={fieldState}
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
		            defaultValue={editTaskData.description}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Edit" type="submit" variant="primary">Edit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditTask
