import { Chat } from './chat';
import { Achievement } from './achievement';

export interface Scout {
  id: bigint;
  first_name: string;
  last_name: string;
  status: string;
  money_bag: number;
  is_logged_in: boolean;
  got_achievements: Achievement[];
  chats: Chat[];
}
