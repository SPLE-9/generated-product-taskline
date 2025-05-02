/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
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
  
  const onSubmitEvent = (data) => {
    const cleanData = cleanFormData(data)
    updateTask({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/task`)
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
		  onSubmit={handleSubmit(onSubmitEvent)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="slot"
		        name="slot"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Task Title"
		            placeholder="Masukkan task title"
		            defaultValue={editTaskData.slot}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="slot"
		        name="slot"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Task Description"
		            placeholder="Masukkan task description"
		            defaultValue={editTaskData.slot}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="OnSubmit Event" type="submit" variant="primary">OnSubmit Event</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditTask
