/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ListTable from "../components/ListTable";

import getNotes from '../services/getNotes'
const NotesPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	notesList: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [notes, setNotes] = useState()
	
	
	


useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, notesList: true}))
				const { data: notes } = await getNotes()
				setNotes(notes.data)
			} finally {
				setIsLoading(prev => ({...prev, notesList: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Notes Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/notes/create
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Add Notes
			  		</Button>
			  	</Link>
			  	
			  	
			  	<Link to={`/notes/edit?notesId
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Edit Notes
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Notes List"}
	singularName={"List"}
	items={[notes]}
	isLoading={isLoading.notesList}
>
	<ListCard
		notes={notes}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default NotesPage

