/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
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
import updateNotes from '../services/updateNotes'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditNotesForm = ({ 
	editNotesData
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: editNotesData })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const editNotes = (data) => {
    const cleanData = cleanFormData(data)
    updateNotes({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/notes`)
  	notifySuccess(`Update Notes berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Notes Form" 
		  onSubmit={handleSubmit(editNotes)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="title"
		        name="title"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Notes Title"
		            placeholder="Masukkan notes title"
		            defaultValue={editNotesData.title}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="notes"
		        name="notes"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Notes"
		            placeholder="Masukkan notes"
		            defaultValue={editNotesData.notes}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Edit Notes" type="submit" variant="primary">Edit Notes</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditNotesForm
