/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const DetailNotes = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const editNotes = async () => {
      navigate(
        '/notes/edit?'
        + `notesId=${data.notesId}`
        
      );
    };
    
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "title",
          condition: "",
          label: "Title",
          featureName: "title",
        }
        ,
        {
          id: "notes",
          condition: "",
          label: "Notes",
          featureName: "notes",
        }
        
      ]}
      itemsEvents={[
            <Button
              variant="secondary"
              onClick={() => editNotes()}
            >
              Edit Notes
            </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailNotes;
