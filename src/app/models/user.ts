import { Vault } from './vault';
import { SharedAccess } from './shared-access';
import { Media } from './media';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  password_confirmation?: string;
  email_verified_at?: string;
  created_at?: string;
  updated_at?: string;
  ownVaults?: Vault[];
  sharedVaults?: Vault[];
  shared_access_id?: SharedAccess['id'] | undefined;
  pivot?: Pivot;
  role?: string;
  media?: Media[] | undefined;
}

export interface CreateUserResponse {
  message: string;
  user: User;
}

type Pivot = {
  user_id: number;
  accessible_id: number;
};
