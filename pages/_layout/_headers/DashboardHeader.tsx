import React from 'react'
import Header, { HeaderLeft } from '../../../layout/Header/Header'
import CommonHeaderChat from './CommonHeaderChat'
import Search from '../../../components/Search'
import CommonHeaderRight from './CommonHeaderRight'
import LogoLimanara from '../../../assets/logos/limanara_small.png'

const DashboardHeader = () => {
	return (
		<Header>
			<HeaderLeft>
				{/* <Search /> */}
				<div className='col-12 text-align-center' style={{fontFamily: 'monospace'}}>
					<h2 className='text-left'>
						<strong>#KADERPARTAI</strong> 
					</h2>
				</div>
			</HeaderLeft>
			<CommonHeaderRight afterChildren={<CommonHeaderChat />} />
		</Header>
	)
}

export default DashboardHeader
