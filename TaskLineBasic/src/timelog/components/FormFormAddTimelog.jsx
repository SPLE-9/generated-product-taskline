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
import saveTimelog from '../services/saveTimelog'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormFormAddTimelog = ({ 
	taskListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const addTimelog = (data) => {
    const cleanData = cleanFormData(data)
    saveTimelog({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/timelog`)
  	notifySuccess(`Save Timelog berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Form Add Timelog" 
		  onSubmit={handleSubmit(addTimelog)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="timelogDate"
		        name="timelogDate"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Date"
		            placeholder="Masukkan date"
					type="date"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="timelogNotes"
		        name="timelogNotes"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Notes"
		            placeholder="Masukkan notes"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key="taskId"
	        name="taskId"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Task"
	            options={taskListData}
				optionKey="taskId"
	            optionLabel="title"
	            placeholder="Masukkan task"
					fieldState={fieldState}
	            {...field}
					isRequired={false}
	          />
	
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button key="Add Timelog" type="submit" variant="primary">Add Timelog</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormFormAddTimelog
