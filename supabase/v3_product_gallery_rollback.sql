-- ATENCIÓN: elimina solo las referencias de fotos adicionales, no las fotos de Storage.
-- Realizar respaldo antes de ejecutar.
alter table public.products drop column if exists image_urls;
