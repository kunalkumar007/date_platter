import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const keys = {
  country: 'COUNTRY',
  state: 'STATE',
  city: 'CITY',
  category: 'CATEGORY',
  sub_category: 'SUBCATEGORY',
  occassion: 'OCCASSION',
  theme: 'THEME',
  service_title: 'SERVICE_TITLE',
  service_tagline: 'SERVICE_TAGLINE',
  desc: 'DESCRIPTION',
  image: 'IMAGE',
};
