/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import CreateNotes from './containers/CreateNotes'
import NotesPage from './containers/NotesPage'
import EditNotesPage from './containers/EditNotesPage'
import DetailNotesPage from './containers/DetailNotesPage'

const notesRoutes = [
{ 
	path: "/notes/create",
	element: <CreateNotes />,
}

	
,
{ 
	path: "/notes",
	element: <NotesPage />,
}

	
,
{ 
	path: "/notes/edit",
	element: <EditNotesPage />,
}

	
,
{ 
	path: "/notes/:notesId",
	element: <DetailNotesPage />,
}

	

]

export default notesRoutes
