import React, { useState } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useFormik } from 'formik'
import classNames from 'classnames'
import useTourStep from '../../../hooks/useTourStep'
//import USERS from '../common/data/userDummyData'
//import USERS from '../../../common/data/anggotaDummyData'
import PageWrapper from '../../../layout/PageWrapper/PageWrapper'
//import { demoPagesMenu } from '../../../menu'
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader'
import Icon from '../../../components/icon/Icon'
import Input from '../../../components/bootstrap/forms/Input'
//import Dropdown, { DropdownMenu, DropdownToggle } from '../components/bootstrap/Dropdown'
//import Button from '../components/bootstrap/Button'
//import FormGroup from '../components/bootstrap/forms/FormGroup'
//import Label from '../components/bootstrap/forms/Label'
///import Checks, { ChecksGroup } from '../components/bootstrap/forms/Checks'
//import SERVICES from '../common/data/serviceDummyData'
import Page from '../../../layout/Page/Page'
import Card, { CardBody } from '../../../components/bootstrap/Card'
import Badge from '../../../components/bootstrap/Badge'
import useQueryAnggota from '../../../hooks/useQueryAnggota'
import INSTAGRAMLOGO from '../../../assets/img/instagram.svg'
import BLUETICK from '../../../assets/img/bluetick.jpg'
//import folder assets/img'

const Index: NextPage = () => {
    useTourStep(18)
    const [filterMenu, setFilterMenu] = useState(false)
    const dataUser = useQueryAnggota()
	let dataFinal = []
	if (dataUser !== undefined) {
		dataFinal = dataUser.data
	}

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

    // const searchUsers = Object.keys(dataFinal)
    //     .filter(
    //         (key) =>
    //             USERS[key].username
    //                 .toLowerCase()
    //                 .includes(formik.values.searchInput.toLowerCase()) ||
    //             USERS[key].name.toLowerCase().includes(formik.values.searchInput.toLowerCase()) ||
    //             USERS[key].surname
    //                 .toLowerCase()
    //                 .includes(formik.values.searchInput.toLowerCase()) ||
    //             USERS[key].position.toLowerCase().includes(formik.values.searchInput.toLowerCase()),
    //     )
    //     .filter((key2) => (formik.values.available ? USERS[key2].isOnline : key2))
    //     .map((i) => USERS[i])
    const searchUsers = dataFinal
        .filter(
            (user: any) =>
                user.user_nama.toLowerCase().includes(formik.values.searchInput.toLowerCase()) ||
                user.instagram_nama.toLowerCase().includes(formik.values.searchInput.toLowerCase()) ||
                user.user_phone.toLowerCase().includes(formik.values.searchInput.toLowerCase()),                
        )
        .filter((user: any) => (formik.values.available ? user.isOnline : user))
        .map((user: any) => ({
            ...user,
            //import image from assets/img username file
            // src: `/static/images/${user.user_picture}`, // Assuming user_picture is the image filename
            src: user.user_picture ? `${process.env.NEXT_PUBLIC_BASEURL}pp/${user.instagram_nama}.jpg` : INSTAGRAMLOGO, // Fallback to default image if user_picture is not available
            // src: `/proxy-image?url=${encodeURIComponent(user.user_picture)}`, // Use proxy to fetch the image
            // src: `https://instagram.com/${user.instagram_nama
            //src: user.user_picture, // Assuming fullImage is the image URL
        }))
    return (
        <PageWrapper>
            <Head>
                <title>List Anggota </title>
            </Head>
            <SubHeader>
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
            </SubHeader>
            <Page container='fluid'>
                <div className='row row-cols-xxl-3 row-cols-lg-3 row-cols-md-2'>
                    {searchUsers.map((user: any) => (                        
                        <div key={user.username} className='col'>
                            <Card>
                                <CardBody>
                                    <div className='row g-3'>
                                        <div className='col d-flex'>
                                            <div className='flex-shrink-0'>
                                                <div className='position-relative'>
                                                    <div
                                                        className='ratio ratio-1x1'
                                                        style={{ width: 100 }}>
                                                        <div
                                                            className={classNames(
                                                                `bg-l25-${user.color}`,
                                                                'rounded-2',
                                                                'd-flex align-items-center justify-content-center',
                                                                'overflow-hidden',
                                                                'shadow',
                                                            )}>
                                                            {/** get error net::ERR_BLOCKED_BY_RESPONSE.NotSameOrigin 200 (OK) when get picture from instagram */}    
                                                            <a key={user.instagram_nama} className='col' href={`/employee/detail/${user.id}`}>
                                                            <img
                                                                src={user.src}
                                                                alt={user.user_nama}
                                                                width={100}
                                                                height={100}                                                                
                                                            />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {user.isOnline && (
                                                        <span className='position-absolute top-100 start-85 translate-middle badge border border-2 border-light rounded-circle bg-success p-2'>
                                                            <span className='visually-hidden'>
                                                                Online user
                                                            </span>
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className='flex-grow-1 ms-3 d-flex justify-content-between'>
                                                <div className='w-100'>
                                                    <div className='row'>
                                                        <div className='col'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='fw-bold fs-5 me-2'>
                                                                    {`${user.user_nama}`}
                                                                </div>
                                                                {/** get icon blue tick verified */}
                                                                {user.isverified == 0? '':  (
                                                                    <img
                                                                        src={BLUETICK}
                                                                        alt='Verified'
                                                                        width={20}
                                                                        height={20}
                                                                        className='ms-2'
                                                                    />
                                                                )}
                                                            </div>

                                                            <div className='text-muted'>
                                                                @{user.instagram_nama}
                                                            </div>
                                                        </div>
                                                        {/* <div className='col-auto'>
                                                            <Button
                                                                icon='Info'
                                                                color='dark'
                                                                isLight
                                                                hoverShadow='sm'
                                                                tag='a'
                                                                to={`../${demoPagesMenu.appointment.subMenu.employeeID.path}/${user.id}`}
                                                                data-tour={user.name}
                                                            />
                                                        </div> */}
                                                    </div>
                                                    {/* {!!user?.services && ( */}
                                                        <div className='row g-2 mt-1'>
                                                            {/* {user?.services.map((service: any) => ( */}
                                                            <div
                                                                key={user.id}
                                                                className='row'>
                                                                    <div className='col-auto text-danger text-bold'>Followers</div>
                                                                    <div className='col-auto text-danger text-bold'>
                                                                        : {user.instagram_follower}
                                                                </div>
                                                                    
                                                            </div>
                                                            {/* ))} */}
                                                        </div>
                                                        <div className='row g-2 mt-1'>
                                                            {/* {user?.services.map((service: any) => ( */}
                                                            <div
                                                                key={user.id}
                                                                className='row'>
                                                                    <div className='col-auto text-primary'>
                                                                        Following
                                                                    </div>
                                                                    <div className='col-auto text-primary'>
                                                                        : {user.instagram_following}
                                                                </div>
                                                                    
                                                            </div>
                                                            {/* ))} */}
                                                        </div>
                                                    {/* )} */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
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
