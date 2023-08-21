import { PlatformInterface } from 'interfaces/platform';
import { ShareLinkInterface } from 'interfaces/share-link';
import { ProviderInterface } from 'interfaces/provider';
import { GetQueryInterface } from 'interfaces';

export interface SongInterface {
  id?: string;
  title: string;
  artist: string;
  genre: string;
  release_date: any;
  provider_id: string;
  created_at?: any;
  updated_at?: any;
  platform?: PlatformInterface[];
  share_link?: ShareLinkInterface[];
  provider?: ProviderInterface;
  _count?: {
    platform?: number;
    share_link?: number;
  };
}

export interface SongGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  artist?: string;
  genre?: string;
  provider_id?: string;
}
