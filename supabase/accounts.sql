-- Run in your own Supabase project's SQL editor, as the database owner.
-- No keys or passwords belong in this migration.
create table if not exists public.palpinet_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  revision integer not null default 0 check (revision >= 0),
  updated_at timestamptz not null default now(),
  constraint palpinet_profile_object check (jsonb_typeof(data) = 'object')
);
alter table public.palpinet_profiles enable row level security;
alter table public.palpinet_profiles force row level security;
revoke all on public.palpinet_profiles from public, anon;
grant select, insert, update, delete on public.palpinet_profiles to authenticated;
drop policy if exists palpinet_own_profile on public.palpinet_profiles;
create policy palpinet_own_profile on public.palpinet_profiles
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- Deleting one's own account requires a server-side function; no service key in the browser.
create or replace function public.palpinet_delete_account()
returns void language plpgsql security definer set search_path = '' as $$
begin
  if auth.uid() is null then
    raise exception 'authentication required';
  end if;
  delete from auth.users where id = auth.uid();
end;
$$;
revoke all on function public.palpinet_delete_account() from public, anon;
grant execute on function public.palpinet_delete_account() to authenticated;
