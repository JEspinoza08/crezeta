-- Rollback SOLO de los cambios Storage de V2.
drop policy if exists "public read product images" on storage.objects;
drop policy if exists "admins upload product images" on storage.objects;
drop policy if exists "admins update product images" on storage.objects;
drop policy if exists "admins delete product images" on storage.objects;
delete from storage.objects where bucket_id='product-images';
delete from storage.buckets where id='product-images';
