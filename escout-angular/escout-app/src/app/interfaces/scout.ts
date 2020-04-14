import { Chat } from './chat';
import { Achievement } from './achievement';

export interface Scout {
  id: bigint;
  login: string;
  password: string;
  first_name: string;
  last_name: string;
  status: string;
  money_bag: number;
  is_logged_in: boolean;
  got_achievements: Achievement[];
  chats: Chat[];
}
