import CallApi from 'Utils/CallApi/index';

export interface GalleryData {
  createTime: string;
  desc: string;
  id: number;
  imgUrl: string;
  name: string;
  updateTime: string;
}

export default function requestGalleryList() {
  return CallApi<GalleryData[]>({ url: '/photo/gallery', method: 'POST' });
}
