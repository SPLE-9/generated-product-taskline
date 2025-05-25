/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
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
import saveNotes from '../services/saveNotes'

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
    saveNotes({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/notes`)
  	notifySuccess(`Save Notes berhasil!`);
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
			    key="slot"
		        name="slot"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Notes Title"
		            placeholder="Masukkan notes title"
		            defaultValue={editNotesData.slot}	            fieldState={fieldState}
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
		            label="Notes"
		            placeholder="Masukkan notes"
		            defaultValue={editNotesData.slot}	            fieldState={fieldState}
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
