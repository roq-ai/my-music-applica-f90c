import { UserInterface } from 'interfaces/user';
import { SongInterface } from 'interfaces/song';
import { GetQueryInterface } from 'interfaces';

export interface ShareLinkInterface {
  id?: string;
  link: string;
  user_id: string;
  song_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  song?: SongInterface;
  _count?: {};
}

export interface ShareLinkGetQueryInterface extends GetQueryInterface {
  id?: string;
  link?: string;
  user_id?: string;
  song_id?: string;
}
