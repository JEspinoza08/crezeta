-- Ejecutar una vez en Supabase SQL Editor. Conserva imágenes y productos existentes.
alter table public.products add column if not exists image_urls text[] not null default '{}';
