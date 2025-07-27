import React, { useState } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useFormik } from 'formik'
import classNames from 'classnames'
import useTourStep from '../hooks/useTourStep'
//import USERS from '../common/data/userDummyData'
import USERS from '../common/data/anggotaDummyData'
import PageWrapper from '../layout/PageWrapper/PageWrapper'
import { demoPagesMenu } from '../menu'
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../layout/SubHeader/SubHeader'
import Icon from '../components/icon/Icon'
import Input from '../components/bootstrap/forms/Input'
import Dropdown, { DropdownMenu, DropdownToggle } from '../components/bootstrap/Dropdown'
import Button from '../components/bootstrap/Button'
import FormGroup from '../components/bootstrap/forms/FormGroup'
import Label from '../components/bootstrap/forms/Label'
import Checks, { ChecksGroup } from '../components/bootstrap/forms/Checks'
import SERVICES from '../common/data/serviceDummyData'
import Page from '../layout/Page/Page'
import Card, { CardBody } from '../components/bootstrap/Card'
import Badge from '../components/bootstrap/Badge'

const Index: NextPage = () => {
	useTourStep(18)
	const [filterMenu, setFilterMenu] = useState(false)

	const formik = useFormik({
		initialValues: {
			available: false,
			searchInput: '',
			services: [],
		},
		onSubmit: () => {
			setFilterMenu(false)
			// alert(JSON.stringify(values, null, 2));
		},
	})

	const searchUsers = Object.keys(USERS)
		.filter(
			(key) =>
				USERS[key].username
					.toLowerCase()
					.includes(formik.values.searchInput.toLowerCase()) ||
				USERS[key].name.toLowerCase().includes(formik.values.searchInput.toLowerCase()) ||
				USERS[key].surname
					.toLowerCase()
					.includes(formik.values.searchInput.toLowerCase()) ||
				USERS[key].position.toLowerCase().includes(formik.values.searchInput.toLowerCase()),
		)
		.filter((key2) => (formik.values.available ? USERS[key2].isOnline : key2))
		.map((i) => USERS[i])
	return (
		<PageWrapper>
			<Head>
				<title>List Anggota </title>
			</Head>
			{/* <SubHeader>
				<SubHeaderLeft>
					<label
						className='border-0 bg-transparent cursor-pointer me-0'
						htmlFor='searchInput'>
						<Icon icon='Search' size='2x' color='primary' />
					</label>
					<Input
						id='searchInput'
						type='search'
						className='border-0 shadow-none bg-transparent'
						placeholder='Search...'
						onChange={formik.handleChange}
						value={formik.values.searchInput}
					/>
				</SubHeaderLeft>				
			</SubHeader> */}
			<Page container='fluid'>
				<div className='row row-cols-xxl-3 row-cols-lg-3 row-cols-md-2 mx-3'>
					<div className='row g-3'>
						<div className='col d-flex'>
							&nbsp;
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
})

export default Index
