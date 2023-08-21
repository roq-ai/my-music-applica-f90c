import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SearchInterface {
  id?: string;
  search_term: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SearchGetQueryInterface extends GetQueryInterface {
  id?: string;
  search_term?: string;
  user_id?: string;
}
