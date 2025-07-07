// src/app/services/auth.ts
import { Injectable } from '@angular/core';
import { supabase } from '../core/supabase/supabaseClient';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  }

 async signUp(email: string, password: string, username: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  const userId = data.user?.id;

  if (userId) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({ id: userId, username });

    if (profileError) throw profileError;
  }

  return data;
}


  async getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  }

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }
}
