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
import updateAppointment from '../services/updateAppointment'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormForm = ({ 
	editAppointmentData
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: editAppointmentData })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const editAppointment = (data) => {
    const cleanData = cleanFormData(data)
    updateAppointment({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/appointments/${data.appointmentId}`); // Redirect to the appointment detail page after successful update
  	notifySuccess(`Update Appointment berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Form" 
		  onSubmit={handleSubmit(editAppointment)}
	
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
		            defaultValue={editAppointmentData.startTime}	            fieldState={fieldState}
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
		            defaultValue={editAppointmentData.endTime}	            fieldState={fieldState}
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
		            defaultValue={editAppointmentData.description}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Edit Appointment" type="submit" variant="primary">Edit Appointment</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormForm
