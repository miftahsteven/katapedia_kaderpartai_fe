import React, { useContext } from 'react'
import { demoPagesMenu } from '../../menu'
import UserContact from '../../components/UserContact'
import USERS from '../data/userDummyData'
import { useRouter } from 'next/router'
import AuthContext from '../../context/authContext'

const CommonDashboardUserCard = () => {
	const router = useRouter()

	let token = null;
	if (typeof window !== 'undefined') {
		token = localStorage.getItem('dataLogin');
	}
	const datauser = JSON.parse(token || '{}')

	//const { userData, setUser } = useContext(AuthContext);
	console.log(JSON.stringify(datauser))

	return (
		<UserContact
			//name={`${USERS.SAM.name} ${USERS.SAM.surname}`}
			name={`${datauser?.data?.user_profile[0]?.user_nama} `}
			position={`${datauser?.data?.user_profile[0]?.position?.position_name} `}
			mail={`${datauser?.data?.user_profile[0]?.email}`}
			phone={`${datauser?.data?.user_profile[0]?.phone}`}
			division={`${datauser?.data?.user_profile[0]?.position?.departments?.divisions?.division_name} `}
			onChat={() => router.push(`../${demoPagesMenu.chat.subMenu.withListChat.path}`)}
			src={USERS.SAM.src}
			color={USERS.SAM.color}
		/>
	)
}

export default CommonDashboardUserCard
