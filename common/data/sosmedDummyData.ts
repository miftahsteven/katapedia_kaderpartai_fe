import { TColor } from '../../type/color-type'

export interface IServiceProps {
	name: string
	icon: string
	color: TColor
}

const facebook: IServiceProps = {
	name: 'Facebook',
	icon: 'facebook',
	color: 'info',
}
const instagram: IServiceProps = {
	name: 'Instagram',
	icon: 'instagram',
	color: 'danger',
}
const tiktok: IServiceProps = {
	name: 'TikTok',
	icon: 'tiktok',
	color: 'success',
}
const twitter: IServiceProps = {
	name: 'X',
	icon: 'twitter',
	color: 'info',
}


const SOSMED: { [key: string]: IServiceProps } = {
	FACEBOOK: facebook,
	INSTAGRAM: instagram,
	TIKTOK: tiktok,
	TWITTER: twitter,	
}

export function getServiceDataWithServiceName(serviceName: string) {
	return SOSMED[
		// @ts-ignore
		Object.keys(SOSMED).filter((f) => SOSMED[f].name.toString() === serviceName)
	]
}

export default SOSMED
