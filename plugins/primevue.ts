import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup'
import Badge from 'primevue/badge'
import BadgeDirective from 'primevue/badgedirective'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Carousel from 'primevue/carousel'
import Checkbox from 'primevue/checkbox'
import Chip from 'primevue/chip'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional for column grouping
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import ConfirmDialog from 'primevue/confirmdialog'
import ConfirmPopup from 'primevue/confirmpopup'
import DataTable from 'primevue/datatable'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Dropdown from 'primevue/dropdown'
import Galleria from 'primevue/galleria'
import Image from 'primevue/image'
import InlineMessage from 'primevue/inlinemessage'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu'
import Menubar from 'primevue/menubar'
import Message from 'primevue/message'
import OrganizationChart from 'primevue/organizationchart'
import OverlayPanel from 'primevue/overlaypanel'
import Paginator from 'primevue/paginator'
import Password from 'primevue/password'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'
import RadioButton from 'primevue/radiobutton'
import Rating from 'primevue/rating'
import Ripple from 'primevue/ripple'
import Row from 'primevue/row'
import SelectButton from 'primevue/selectbutton'
import Sidebar from 'primevue/sidebar'
import Skeleton from 'primevue/skeleton'
import Slider from 'primevue/slider'
import SplitButton from 'primevue/splitbutton'
import StyleClass from 'primevue/styleclass'
import TabMenu from 'primevue/tabmenu'
import Tag from 'primevue/tag'
import Textarea from 'primevue/textarea'
import TieredMenu from 'primevue/tieredmenu'
import Timeline from 'primevue/timeline'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import ToggleButton from 'primevue/togglebutton'
import Toolbar from 'primevue/toolbar'
import Tooltip from 'primevue/tooltip'
const Locales: Record<string, any> = {
ja: {
weak: '弱い',
medium: '普通',
strong: '強い',
passwordPrompt: 'パスワードを入力',
aria: {
navigation: 'ナビゲーション',
},
},
}
export default defineNuxtPlugin((nuxtApp) => {
const locale = Locales["ja"];
nuxtApp.vueApp.use(PrimeVue, {
ripple: true,
locale,
});
// Messages
nuxtApp.vueApp.use(ToastService)
nuxtApp.vueApp.component('Toast', Toast)
nuxtApp.vueApp.component('Message', Message)
nuxtApp.vueApp.component('InlineMessage', InlineMessage)
// Form
nuxtApp.vueApp.component('Dropdown', Dropdown)
nuxtApp.vueApp.component('Checkbox', Checkbox)
nuxtApp.vueApp.component('InputText', InputText)
nuxtApp.vueApp.component('Textarea', Textarea)
nuxtApp.vueApp.component('Password', Password)
nuxtApp.vueApp.component('InputSwitch', InputSwitch)
nuxtApp.vueApp.component('RadioButton', RadioButton)
nuxtApp.vueApp.component('ToggleButton', ToggleButton)
nuxtApp.vueApp.component('Rating', Rating)
nuxtApp.vueApp.component('SelectButton', SelectButton)
nuxtApp.vueApp.component('Slider', Slider)
// Button
nuxtApp.vueApp.component('Button', Button)
nuxtApp.vueApp.component('SplitButton', SplitButton)
// Panel
nuxtApp.vueApp.component('Card', Card)
nuxtApp.vueApp.component('Divider', Divider)
nuxtApp.vueApp.component('Toolbar', Toolbar)
// Overlay
nuxtApp.vueApp.use(ConfirmationService)
nuxtApp.vueApp.component('ConfirmDialog', ConfirmDialog)
nuxtApp.vueApp.component('ConfirmPopup', ConfirmPopup)
nuxtApp.vueApp.component('OverlayPanel', OverlayPanel)
nuxtApp.vueApp.component('Dialog', Dialog)
nuxtApp.vueApp.component('Sidebar', Sidebar)
nuxtApp.vueApp.directive('tooltip', Tooltip)
// Data
nuxtApp.vueApp.component('Timeline', Timeline)
nuxtApp.vueApp.component('Paginator', Paginator)
nuxtApp.vueApp.component('DataTable', DataTable)
nuxtApp.vueApp.component('Column', Column)
nuxtApp.vueApp.component('ColumnGroup', ColumnGroup)
nuxtApp.vueApp.component('Row', Row)
nuxtApp.vueApp.component('DataView', DataView)
nuxtApp.vueApp.component('OrganizationChart', OrganizationChart)
// Media
nuxtApp.vueApp.component('Image', Image)
nuxtApp.vueApp.component('Galleria', Galleria)
nuxtApp.vueApp.component('Carousel', Carousel)
// Menu
nuxtApp.vueApp.component('Menu', Menu)
nuxtApp.vueApp.component('TabMenu', TabMenu)
nuxtApp.vueApp.component('Menubar', Menubar)
nuxtApp.vueApp.component('TieredMenu', TieredMenu)
// Misc
nuxtApp.vueApp.directive('styleclass', StyleClass)
nuxtApp.vueApp.directive('badge', BadgeDirective)
nuxtApp.vueApp.directive('ripple', Ripple)
nuxtApp.vueApp.component('ProgressBar', ProgressBar)
nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner)
nuxtApp.vueApp.component('Badge', Badge)
nuxtApp.vueApp.component('Chip', Chip)
nuxtApp.vueApp.component('Skeleton', Skeleton)
nuxtApp.vueApp.component('Tag', Tag)
nuxtApp.vueApp.component('Avatar', Avatar)
nuxtApp.vueApp.component('AvatarGroup', AvatarGroup)
})