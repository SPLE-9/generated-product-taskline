/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import WrapperTab from '../components/WrapperTab'
const TimelogPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	wrapperTab: false,

	});
	const { setTitle } = useContext(HeaderContext);


	
	useEffect(() => {
		setTitle("Timelog Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<WrapperTab />

	</Layouts.ViewContainerLayout>
  )
}
export default TimelogPage

