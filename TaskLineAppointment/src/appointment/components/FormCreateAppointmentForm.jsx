/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
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
import saveAppointment from '../services/saveAppointment'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormCreateAppointmentForm = ({ 
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const createAppointment = (data) => {
    const cleanData = cleanFormData(data)
    saveAppointment({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/appointments`)
  	notifySuccess(`Save Appointment berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Create Appointment Form" 
		  onSubmit={handleSubmit(createAppointment)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="startTime"
		        name="startTime"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Start Time"
		            placeholder="Masukkan start time"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="endTime"
		        name="endTime"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="End Time"
		            placeholder="Masukkan end time"
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
				<Button key="Create Appointment" type="submit" variant="primary">Create Appointment</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormCreateAppointmentForm
