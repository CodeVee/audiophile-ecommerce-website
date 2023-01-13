import type { ScreenImage } from '@/models'
import { useAppStore } from '@/stores';

export const formatCurrency = (value: number) => Intl.NumberFormat('en-US').format(value)

export const generateScreenBgImage = (imageForms: ScreenImage) => {
    const appStore = useAppStore()
    const { mobile, tablet, desktop } = imageForms
    const correctFormat = appStore.isMobileScreen ? mobile : appStore.isTabletScreen ? tablet : desktop
    const bgImageUrl = `url('${correctFormat}')`
    return bgImageUrl
}