-- CreZeta Products v1 - ejecutar en Supabase SQL Editor
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  role text not null default 'customer' check (role in ('customer','admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  short_description text not null,
  description text not null,
  price numeric(12,2) not null check(price >= 0),
  compare_at_price numeric(12,2),
  category text not null default 'Tecnología para negocios',
  badge text,
  image_url text,
  stock integer not null default 0 check(stock >= 0),
  is_active boolean not null default true,
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  customer_name text not null,
  customer_email text,
  customer_phone text not null,
  status text not null default 'pending' check(status in ('pending','confirmed','preparing','ready','delivered','cancelled')),
  total numeric(12,2) not null default 0,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  product_name text not null,
  quantity integer not null check(quantity > 0),
  unit_price numeric(12,2) not null check(unit_price >= 0),
  subtotal numeric(12,2) generated always as (quantity * unit_price) stored
);

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.profiles where id=auth.uid() and role='admin');
$$;
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path=public as $$
begin insert into public.profiles(id,full_name) values(new.id,coalesce(new.raw_user_meta_data->>'full_name','')) on conflict(id) do nothing; return new; end; $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

create policy "public read active products" on public.products for select using (is_active or public.is_admin());
create policy "admins manage products" on public.products for all using (public.is_admin()) with check (public.is_admin());
create policy "users read own profile" on public.profiles for select using (id=auth.uid() or public.is_admin());
create policy "users update own profile" on public.profiles for update using (id=auth.uid()) with check (id=auth.uid());
create policy "admins manage profiles" on public.profiles for all using (public.is_admin()) with check (public.is_admin());
create policy "users read own orders" on public.orders for select using (user_id=auth.uid() or public.is_admin());
create policy "users create own orders" on public.orders for insert with check (user_id is null or user_id=auth.uid());
create policy "admins manage orders" on public.orders for all using (public.is_admin()) with check (public.is_admin());
create policy "users read own order items" on public.order_items for select using (exists(select 1 from public.orders o where o.id=order_id and (o.user_id=auth.uid() or public.is_admin())));
create policy "users create order items" on public.order_items for insert with check (exists(select 1 from public.orders o where o.id=order_id and (o.user_id is null or o.user_id=auth.uid() or public.is_admin())));
create policy "admins manage order items" on public.order_items for all using (public.is_admin()) with check (public.is_admin());

insert into public.products(name,slug,short_description,description,price,category,badge,stock,is_active,featured)
values('CreZeta Reviews','crezeta-reviews','Convierte una buena experiencia en una reseña con NFC + QR.','Punto físico NFC + QR personalizado para que tus clientes accedan directamente al perfil de tu negocio y puedan dejar una reseña. Incluye configuración, QR personalizado y vinculación inicial.',79,'Reputación digital','NUEVO',10,true,true)
on conflict(slug) do nothing;

-- Después de registrar tu usuario, conviértelo en admin reemplazando el correo:
-- update public.profiles set role='admin' where id=(select id from auth.users where email='TU_CORREO');
