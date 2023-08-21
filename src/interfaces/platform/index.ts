import { SongInterface } from 'interfaces/song';
import { GetQueryInterface } from 'interfaces';

export interface PlatformInterface {
  id?: string;
  name: string;
  url: string;
  song_id: string;
  created_at?: any;
  updated_at?: any;

  song?: SongInterface;
  _count?: {};
}

export interface PlatformGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  url?: string;
  song_id?: string;
}
