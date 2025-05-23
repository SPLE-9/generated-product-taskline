/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailNotes from '../components/DetailNotes'
import getNotesDetailData from '../services/getNotesDetailData'
const DetailNotesPage = props => {
const { notesId } = useParams()

	const [isLoading, setIsLoading] = useState({
	detailNotes: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [notesDetailData, setNotesDetailData] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailNotes: true}))
			const { data: notesDetailData } = await getNotesDetailData({ notesId })
			setNotesDetailData(notesDetailData.data)
		} finally {
			setIsLoading(prev => ({...prev, detailNotes: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Notes Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Notes"}
	singularName={"Notes"}
	items={{...notesDetailData}}
	isLoading={isLoading.detailNotes}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailNotes {...{ data : { ...notesDetailData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailNotesPage

