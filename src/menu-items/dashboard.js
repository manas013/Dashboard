// assets
import { HomeOutlined,BankOutlined ,HddOutlined,SlidersOutlined ,FileTextOutlined,WalletOutlined } from '@ant-design/icons';

// icons
const icons = {
  HomeOutlined,
  BankOutlined,
  HddOutlined
  ,SlidersOutlined,
  FileTextOutlined ,
  WalletOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Home',
      type: 'item',
      url: '/home',
      icon: icons.HomeOutlined,
      breadcrumbs: false
    },
    {
      id: 'Organization',
      title: 'Organization',
      type: 'item',
      url: '/organization',
      icon: icons.BankOutlined,
      breadcrumbs: false
    },  {
      id: 'Assets',
      title: 'Assets',
      type: 'item',
      url: '/assets',
      icon: icons.HddOutlined,
      breadcrumbs: false
    },  {
      id: 'Trade',
      title: 'Trade',
      type: 'item',
      url: '/trade',
      icon: icons.SlidersOutlined,
      breadcrumbs: false
    },  {
      id: 'History',
      title: 'History',
      type: 'item',
      url: '/history',
      icon: icons.FileTextOutlined,
      breadcrumbs: false
    },
    {
      id: 'Wallet',
      title: 'Wallet',
      type: 'item',
      url: '/wallet',
      icon: icons.WalletOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
