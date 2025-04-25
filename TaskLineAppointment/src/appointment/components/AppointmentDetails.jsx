/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteAppointment from '../services/deleteAppointment';

import * as Layouts from "@/commons/layouts";


const AppointmentDetails = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalConfirmDeleteAppointment, setShowModalConfirmDeleteAppointment] = React.useState(false); 

    const displayData = {
      ...data,
      createdBy: data?.member?.name || '-'
  };

    const confirmDelete = async () => {
      await deleteAppointment({
        appointmentId: data.appointmentId,
      });
      navigate('/appointments');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={displayData}
      itemsAttrs={[
        {
          id: "startTime",
          condition: "",
          label: "Start Time",
          featureName: "startTime",
        }
        ,
        {
          id: "endTime",
          condition: "",
          label: "End Time",
          featureName: "endTime",
        }
        ,
        {
          id: "description",
          condition: "",
          label: "Description",
          featureName: "description",
        }
        ,
        {
          id: "createdBy",
          condition: "",
          label: "Created By",
          featureName: "createdBy",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
          <Modal
              isShow={showModalConfirmDeleteAppointment}
              title={"Confirm Delete Appointment"}
          >
              <Link to=''><Button variant="tertiary" onClick={() => setShowModalConfirmDeleteAppointment(false)}>Batal</Button></Link>
            <Button
              variant="secondary"
              onClick={() => confirmDelete()}
            >
              Confirm Delete
            </Button>
          </Modal>
          
        ]}
    />
  );
};

export default AppointmentDetails;
