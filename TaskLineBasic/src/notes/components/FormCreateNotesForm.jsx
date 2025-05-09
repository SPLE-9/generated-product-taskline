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
import saveNotes from '../services/saveNotes'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormCreateNotesForm = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
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
		  title="Create Notes Form" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="notes_id"
		        name="notes_id"
		        control={control}
				rules={{ required: "Harap masukkan notes id" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Notes ID"
		            placeholder="Masukkan notes id"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="notes_title"
		        name="notes_title"
		        control={control}
				rules={{ required: "Harap masukkan notes title" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Notes Title"
		            placeholder="Masukkan notes title"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="notes"
		        name="notes"
		        control={control}
				rules={{ required: "Harap masukkan notes" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Notes"
		            placeholder="Masukkan notes"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
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

export default FormCreateNotesForm
