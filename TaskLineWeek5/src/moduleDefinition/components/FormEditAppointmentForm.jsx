/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.10.0
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

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditAppointmentForm = ({ 
	editAppointmentData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: editAppointmentData })
  
  
  
  
  const navigate = useNavigate()
  
  const updateAppointment = (data) => {
    const cleanData = cleanFormData(data)
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Appointment Form" 
		  onSubmit={handleSubmit(updateAppointment)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key=""
		        name=""
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="startTime"
		            placeholder="Masukkan starttime"
					type="date"
		            defaultValue={editAppointmentData.}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key=""
		        name=""
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="endTime"
		            placeholder="Masukkan endtime"
					type="date"
		            defaultValue={editAppointmentData.}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key=""
		        name=""
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="description"
		            placeholder="Masukkan description"
		            defaultValue={editAppointmentData.}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key=""
	        name=""
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Invited User"
	            options={editAppointmentData}
	            optionLabel="invalid"
	            placeholder="Masukkan invited user"
					fieldState={fieldState}
					defaultValue={editAppointmentData.}
	            {...field}
					isRequired={false}
	          />
	
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button id="_hK3rYCH1EfC5wJZdT1cTeg" key="Update Appointment" type="submit" variant="primary">Update Appointment</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditAppointmentForm
