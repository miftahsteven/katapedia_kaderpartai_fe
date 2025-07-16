import React from 'react'
import classNames from 'classnames'
import Footer from '../../../layout/Footer/Footer'
import useDarkMode from '../../../hooks/useDarkMode'

const DefaultFooter = () => {
	const { darkModeStatus } = useDarkMode()

	return (
		<Footer>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						<span className='fw-light'>Copyright © 2025 - Version 1.0</span>
					</div>
					<div className='col-auto'>
						<a
							href='/pages'
							className={classNames('text-decoration-none', {
								'link-dark': !darkModeStatus,
								'link-light': darkModeStatus,
							})}>
							<small className='fw-bold'>MSCODE INOVASI DIGITAL 2025</small>
						</a>
					</div>
				</div>
			</div>
		</Footer>
	)
}

export default DefaultFooter
