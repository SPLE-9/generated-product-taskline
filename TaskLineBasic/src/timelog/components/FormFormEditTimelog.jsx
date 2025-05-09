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
import updateTimelog from '../services/updateTimelog'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormFormEditTimelog = ({ 
	editTimelogData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: editTimelogData })
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    updateTimelog({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/timelog?tab=me`)
  	notifySuccess(`Update Timelog berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Form Edit Timelog" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
	      <VisualizationAttr
	        label="Task Title"
	        content={editTimelogData?.title}
	        
	      />
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="timelogNote"
		        name="timelogNote"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Note"
		            placeholder="Masukkan note"
		            defaultValue={editTimelogData.timelogNote}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="timelogDate"
		        name="timelogDate"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Date"
		            placeholder="Masukkan date"
					type="date"
		            defaultValue={editTimelogData.timelogDate}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormFormEditTimelog
