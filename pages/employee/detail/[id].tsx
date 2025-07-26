import React, { useState } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useDarkMode from '../../../hooks/useDarkMode'
//import data from '../../../common/data/dummyCustomerData'
import latestSalesData from '../../../common/data/dummySalesData'
import PaginationButtons, { dataPagination, PER_COUNT } from '../../../components/PaginationButtons'
import useSortableData from '../../../hooks/useSortableData'
import PageWrapper from '../../../layout/PageWrapper/PageWrapper'
import { demoPagesMenu } from '../../../menu'
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader'
import Button from '../../../components/bootstrap/Button'
import Page from '../../../layout/Page/Page'
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card'
import Avatar from '../../../components/Avatar'
import { getColorNameWithIndex } from '../../../common/data/enumColors'
import Icon from '../../../components/icon/Icon'
import { priceFormat } from '../../../helpers/helpers'
import useQueryAnggota from '../../../hooks/useQueryAnggota'
import INSTAGRAMLOGO from '../../../assets/img/instagram.svg'
import CommonAccountPerformance from '../../../common/partial/CRMDashboard/CommonAccountPerformance'
import CommonLatestTransActions from '../../../common/partial/CRMDashboard/CommonLatestTransActions'
import LinePost from '../../charts/_examples/chart-line/LinePost'
import MixedLineViewsEngage from '../../charts/_examples/chart-mixed/MixedLineViewsEngage'
//import CustomerEditModal from '../_common/CustomerEditModal'
//import FollowersPerformance from '../../../common/partial/CRMDashboard/FollowersPerformance'
//import FollowersPerformance from '../../../common/partial/CRMDashboard/FollowersPerformance'

const Id: NextPage = () => {
	const router = useRouter()
	const { id } = router.query

	const { darkModeStatus } = useDarkMode()
	
	const dataUser = useQueryAnggota()
	let dataFinal = []
	if (dataUser !== undefined) {
		dataFinal = dataUser.data
	}
	const itemData = dataFinal.filter((item: any) => item.id.toString() === id?.toString())
	const item = itemData[0]

	const [currentPage, setCurrentPage] = useState<number>(1)
	const [perPage, setPerPage] = useState<number>(PER_COUNT['3'])

	const { items, requestSort, getClassNamesFor } = useSortableData(latestSalesData)

	const [editModalStatus, setEditModalStatus] = useState<boolean>(false)
	const handleClickEdit = () => {
		setEditModalStatus(true)
	}

	return (
		<PageWrapper>
			<Head>
				<title>Detail Anggota</title>
			</Head>
			<SubHeader>
				<SubHeaderLeft>
					<Button
						color='primary'
						isLink
						icon='ArrowBack'
						tag='a'
						to={`../../employee/list`}>
						Back to List
					</Button>
					<SubheaderSeparator />
					<span className='text-muted fst-italic me-2'>Last update:</span>
					<span className='fw-bold'>13 hours ago</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Button icon='GraphicEq' color='primary' isLight onClick={handleClickEdit}>
						Update Data
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='pt-3 pb-5 d-flex align-items-center'>
					<span className='display-6 fw-bold me-3'>{item?.user_nama}</span>
					{/* <span className='border border-danger border-2 text-blue fw-bold px-3 py-2 rounded'>
						{item?.isverified ? 'Verified' : 'Not Verified'}
					</span> */}
				</div>
				<div className='row'>
					<div className='col-lg-4'>
						<Card className='shadow-3d-primary h-80'>
							<CardBody>
								<div className='row g-5 py-0'>
									<div className='col-12 d-flex justify-content-center'>
										{/* <Avatar
											src={item?.src}
											color={getColorNameWithIndex(item?.id)}
											isOnline={item?.isOnline}			
											size={200}			
											rounded={'pill'}					
										/> */}
										<img
											src={item?.user_picture ?`${process.env.NEXT_PUBLIC_BASEURL}pp/${item?.instagram_nama}.jpg` : INSTAGRAMLOGO}
											alt={item?.user_nama}
											width={200}
											className='rounded-circle shadow-3d-primary'											
											height={200}                                                                
										/>
									</div>
									<div className='col-12'>
										<div className='row g-3'>
											{/* <div className='col-12'>
												<div className='d-flex align-items-left'>
													<div className='flex-shrink-0 mx-2'>
														<Icon
															icon='Person'
															size='2x'
															color='primary'
														/>
													</div>
													<div className='flex-grow-1 ms-2'>
														<div className='fw-bold fs-5 mb-0'>
															{item?.user_nama}
														</div>
														<div className='text-muted'>
															Nama Anggota
														</div>
													</div>
												</div>
											</div> */}
											<div className='col-12'>
												<div className='d-flex align-items-left'>
													<div className='flex-shrink-0 mx-2'>
														{/* <i className={`bi bi-instagram px-2`} style={{ fontSize: "20px" }}></i> */}
														<img
															src={INSTAGRAMLOGO}
															alt={item?.user_nama}
															width={20}															
															height={20}                                                                
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{item?.instagram_nama}
														</div>
														<div className='text-muted'>
															Instagram
														</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-left'>
													<div className='flex-shrink-0 mx-2'>
														<Icon
															icon='Star'
															size='2x'
															color='primary'
														/>
													</div>
													<div className='flex-grow-1 ms-2'>
														<div className='fw-bold fs-5 mb-0'>
															{item?.isverified ? 'Verified' : 'Not Verified'}
														</div>
														<div className='text-muted'>
															Account Status
														</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-left'>
													<div className='flex-shrink-0 mx-2'>
														<Icon
															icon='People'
															size='2x'
															color='primary'
														/>
													</div>
													<div className='flex-grow-1 ms-2'>
														<div className='fw-bold fs-5 mb-0'>
															{item?.instagram_follower}
														</div>
														<div className='text-muted'>
															Followers
														</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-left'>
													<div className='flex-shrink-0 mx-2'>
														<Icon
															icon='People'
															size='2x'
															color='primary'
														/>
													</div>
													<div className='flex-grow-1 ms-2'>
														<div className='fw-bold fs-5 mb-0'>
															{item?.instagram_following}
														</div>
														<div className='text-muted'>
															Following
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>						
					</div>
					<div className='col-lg-4'>
						<CommonAccountPerformance />
					</div>
					<div className='col-lg-4'>		
						{/* create card with height more high */}				
						<Card className='shadow-3d-primary h-80'>
							<CardHeader>
								<CardLabel icon='GraphicEq'>
									<CardTitle>Insight & Rekomendasi</CardTitle>									
								</CardLabel>
								{/** generate button in right cardlabel */}									
								<CardActions>
									<Button
										color='primary'
										isLight
										icon='Refresh'
										hoverShadow='sm'
										onClick={handleClickEdit}>
										Update Insight
									</Button>
								</CardActions>
							</CardHeader>
							<CardBody>
								{/** create scroller div */}
								<div className='row g-3 overflow-auto' style={{ maxHeight: '400px' }}>
									<div className='col-12'>
										<p className='text-muted mb-0'>
											Hasil analisis dan rekomendasi untuk akun Instagram
											&nbsp;<strong>{item?.name}</strong> berdasarkan data dan performa
											terkini.
										</p>
									</div>
									<div className='col-12'>
										<p className='text-muted mb-0'>
												<li>
													Strategi 3A (Aman, Asyik, Adem) : Konten dibangun konsisten: mengedepankan analisis tajam namun tetap membawa nuansa menyenangkan dan tenang, sejalan dengan prinsip PKS
												</li>
												<li>
													Penggunaan fitur maksimal: Kombinasi antara Reels, Live, story, DM, dan iklan efektif meningkatkan interaksi, terutama dengan Gen Z
												</li>
												<li>
													Analisis data: Memanfaatkan insight untuk memahami audiens, mengoptimalkan waktu posting, dan meningkatkan engagement	
												</li>
										</p>
									</div>
									<div className='col-12'>
										<p className='text-muted mb-0'>
											Rekomendasi Optimalisasi :
											<ul>
												<li>
													Konten edukatif dan inspiratif: Fokus pada isu-isu sosial, politik, dan ekonomi yang relevan dengan audiens
												</li>
												<li>
													Penggunaan hashtag strategis: Memanfaatkan hashtag populer untuk meningkatkan visibilitas konten
												</li>
												<li>
													Kolaborasi dengan influencer: Membangun kemitraan dengan influencer yang memiliki audiens serupa untuk memperluas jangkauan
												</li>
											</ul>
										</p>
									</div>
								</div>
							</CardBody>
						</Card>					
					</div>							
				</div>
				<div className='row row-cols-xxl-12 row-cols-lg-12 row-cols-md-12 g-3'>
					<div className='col-lg-6'>
						<LinePost />
					</div>				
					<div className='col-lg-6'>
						<MixedLineViewsEngage />
					</div>		
				</div>		
			</Page>
			{/* <CustomerEditModal
				setIsOpen={setEditModalStatus}
				isOpen={editModalStatus}
				id={String(id) || 'loading'}
			/> */}
		</PageWrapper>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
})

export async function getStaticPaths() {
	return {
		paths: [
			// String variant:
			'/employee/detail/2',
			// Object variant:
			{ params: { id: '2' } },
		],
		fallback: true,
	}
}

export default Id
