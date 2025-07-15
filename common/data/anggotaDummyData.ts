import UserImage from '../../assets/img/wanna/wanna1.png'
import UserImage2 from '../../assets/img/wanna/wanna2.png'
import UserImage3 from '../../assets/img/wanna/wanna3.png'
import UserImage4 from '../../assets/img/wanna/wanna4.png'
import UserImage5 from '../../assets/img/wanna/wanna5.png'
import UserImage6 from '../../assets/img/wanna/wanna6.png'
import UserImage7 from '../../assets/img/wanna/wanna7.png'
//import SERVICES, { IServiceProps } from './serviceDummyData'
import SOSMED, { IServiceProps } from './sosmedDummyData'

import User7Landing from '../../assets/img/wanna/landing1.png'
import { TColor } from '../../type/color-type'

export interface IUserProps {
	id: string
	username: string
	name: string
	surname: string
	position: string
	email?: string
	src: string
	isOnline: boolean
	isReply?: boolean
	color: TColor
	fullImage?: string
	services?: IServiceProps[]
	password: string
	group: string
	phone: string
}

const mardani: IUserProps = {
	id: '1',
	username: 'mardani',
	name: 'Mardani Ali Sera',
	surname: 'mardani',
	position: 'Ketua',
	email: 'john@omtanke.studio',
	src: 'https://akcdn.detik.net.id/community/media/visual/2018/06/20/23cb1a08-ae6a-4f3f-be93-aef7206687b4_11.jpeg?w=700&q=90',
	isOnline: true,
	isReply: true,
	color: 'primary',
	services: [SOSMED.FACEBOOK, SOSMED.INSTAGRAM, SOSMED.TIKTOK],
	password: '@ABC123',
}

const almuzzammil: IUserProps = {
	id: '2',
	username: 'almuzzammil',
	name: 'Al Muzzammil Yusuf',
	surname: 'almuzzammil',
	position: 'Presiden',
	email: 'grace@omtanke.studio',
	src: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Al_Muzzammil_Yusuf%2C_PKS_candidate_for_Lampung_I_in_2024.jpg',
	isOnline: true,
	color: 'warning',
	services: [SOSMED.FACEBOOK, SOSMED.INSTAGRAM, SOSMED.TIKTOK],
	password: '@ABC123',
}

const tifatul: IUserProps = {
	id: '3',
	username: 'tifatul',
	name: 'Tifatul Sembiring',
	surname: 'tifatul',
	position: 'DPR-RI',
	email: 'jane@omtanke.studio',
	src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Wakil_Ketua_Badan_Pengkajian_Majelis_Permusyawaratan_Rakyat_Republik_Indonesia_Tifatul_Sembiring.jpg/500px-Wakil_Ketua_Badan_Pengkajian_Majelis_Permusyawaratan_Rakyat_Republik_Indonesia_Tifatul_Sembiring.jpg',
	isOnline: true,
	color: 'secondary',
	services: [SOSMED.FACEBOOK, SOSMED.INSTAGRAM],
	password: '@ABC123',
}

const anies: IUserProps = {
	id: '4',
	username: 'aniesbyarwati',
	name: 'Anies Byarwati',
	surname: 'Byarwati',
	position: 'Ketua',
	email: 'ryan@omtanke.studio',
	src: 'https://upload.wikimedia.org/wikipedia/commons/7/71/KPU_Anis_Byarwati.jpg',
	isOnline: false,
	color: 'info',
	services: [SOSMED.FACEBOOK, SOSMED.INSTAGRAM, SOSMED.TIKTOK],
	password: '@ABC123',
}

const hidayat: IUserProps = {
	id: '5',
	username: 'hnw',
	name: 'Hidayat Nur Wahid',
	surname: 'hidayat',
	position: 'DPR-RI',
	email: 'ella@omtanke.studio',
	src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Hidayat_Nur_Wahid%2C_PKS_candidate_for_Jakarta_II_in_2024.jpg',
	isOnline: false,
	color: 'success',
	services: [SOSMED.FACEBOOK, SOSMED.INSTAGRAM, SOSMED.TIKTOK],
	password: '@ABC123',
}

const kholid: IUserProps = {
	id: '6',
	username: 'kholid',
	name: 'Muhammad Kholid',
	surname: 'Kholid',
	position: 'Sekjen',
	email: 'chloe@omtanke.studio',
	src: 'https://berkas.dpr.go.id/sigota/photo/2196.jpg',
	isOnline: true,
	color: 'warning',
	services: [SOSMED.FACEBOOK, SOSMED.INSTAGRAM],
	password: '@ABC123',
}

const sohibul: IUserProps = {
	id: '7',
	username: 'sohibul',
	name: 'M.SOHIBUL IMAN',
	surname: 'sohibul',
	position: 'Ketua Dewan Syuro',
	email: 'sam@omtanke.studio',
	src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/KPU_Mohamad_Sohibul_Iman.jpg/250px-KPU_Mohamad_Sohibul_Iman.jpg',
	isOnline: false,
	color: 'danger',
	services: [SOSMED.INSTAGRAM, SOSMED.TIKTOK],
	fullImage: User7Landing,
	password: '@ABC123',
}

const gufron: IUserProps = {
	id: '7',
	username: 'gufron',
	name: 'GUFRON',
	surname: 'gufron',
	position: 'Anggota DPR-RI',
	email: 'sam@omtanke.studio',
	src: 'https://images.goodkind.id/dct/berkas-silon/calon/51206/pas_foto/1683195807_f65baa57-1134-43d6-880a-798157faedc0.jpeg',
	isOnline: false,
	color: 'danger',
	services: [SOSMED.INSTAGRAM, SOSMED.TIKTOK],
	fullImage: User7Landing,
	password: '@ABC123',
}

const nasir: IUserProps = {
	id: '7',
	username: 'nasir',
	name: 'Nasir Djamil',
	surname: 'nasir',
	position: 'Anggota DPR-RI',
	email: 'sam@omtanke.studio',
	src: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Muhammad_Nasir_Djamil.jpg',
	isOnline: false,
	color: 'danger',
	services: [SOSMED.INSTAGRAM, SOSMED.TIKTOK],
	fullImage: User7Landing,
	password: '@ABC123',
}

const ansori: IUserProps = {
	id: '7',
	username: 'ansori',
	name: 'Ansori Siregar',
	surname: 'ansori',
	position: 'Anggota DPR-RI',
	email: 'sam@omtanke.studio',
	src: 'https://images.goodkind.id/dct/berkas-silon/calon/9622/pas_foto/1683005841_7c4ce93c-efd6-465e-9075-1927c3c1908d.jpeg',
	isOnline: false,
	color: 'danger',
	services: [SOSMED.INSTAGRAM, SOSMED.TIKTOK],
	fullImage: User7Landing,
	password: '@ABC123',
}

const rahmatsaleh: IUserProps = {
	id: '7',
	username: 'rahmatsaleh',
	name: 'Rahmat Saleh',
	surname: 'rahmatsaleh',
	position: 'Anggota DPR-RI',
	email: 'sam@omtanke.studio',
	src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5S78VPAJRKy7SxrYtwLIlbgWYaSOFDF_pnA&s',
	isOnline: false,
	color: 'danger',
	services: [SOSMED.INSTAGRAM, SOSMED.TIKTOK],
	fullImage: User7Landing,
	password: '@ABC123',
}

const USERS: { [key: string]: IUserProps } = {
	MARDANI: mardani,
	ALMUZZAMMIL: almuzzammil,
	TIFATUL: tifatul,
	ANIES: anies,
	HIDAYAT: hidayat,
	KHOLID: kholid,
	SOHIBUL: sohibul,
	GUFRON: gufron,
	NASIR: nasir,
	ANSORI: ansori,
	RAHMATSALAH: rahmatsaleh,
}

export function getUserDataWithUsername(username: string): IUserProps {
	// @ts-ignore
	return USERS[Object.keys(USERS).filter((f) => USERS[f].username.toString() === username)]
}

export function getUserDataWithId(id?: string): IUserProps {
	// @ts-ignore
	return USERS[Object.keys(USERS).filter((f) => USERS[f].id.toString() === id.toString())]
}

export default USERS
