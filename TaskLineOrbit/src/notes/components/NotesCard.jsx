/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";
import deleteNotes from '../services/deleteNotes'

const NotesCard = ({ notes }) => {
  const { checkPermission } = useAuth();
  
  const confirmDelete = async (notesItem) => {
    await deleteNotes({
      notesId: notesItem.notesId,
    });
    window.location.reload();
  }
  
  return (
    <Layouts.ListComponentCardLayout
      items={[notes]}
  	
  	itemsAttrs={[
          {
            id: "notesTitle",
            condition: "",
            label: "Notes Title",
  		  featureName: "title",
            editable:  false 
          }
  ,
          {
            id: "notes",
            condition: "",
            label: "Notes",
  		  featureName: "notes",
            editable:  false 
          }
  ]}
      itemsEvents={(notesItem) => [
        <Link to=''>
          <Button 
            size="sm"
             variant=
                        "secondary"
             onClick={() => confirmDelete(notesItem)}
          >
             Delete Notes
          </Button>
        </Link>
        
        
  ,
        <Link to={`/notes/${notesItem.notesId}`}>
    <Button
      size="sm"
      variant=
          "primary"
    >
      Detail
    </Button>
  </Link>
  
  
  	]}
    />
  )	
};

export default NotesCard;
