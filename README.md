# Blog Website 

### Tech stack used:
- Nextjs 14
- Nextjs App Router
- TailwindCSS
- Chakra UI
- React Icons
- Supabase DB
- Supabase Storage

***
## Assets
[download](https://drive.google.com/drive/folders/1ngEb50wbqjK10Y9J15cvgFnxi1ff5hfj?usp=sharing)
***
## Gists

- [All gists](https://gist.github.com/greeenboi/083aecdaff1e8ccc353186042851e678)
- [Explore Page](https://gist.github.com/greeenboi/c8c02ba4cc44682c18de63ef3a319a0c)
- [Explore Slug Page](https://gist.github.com/greeenboi/463c32573b4ba87b78f2426430ac2603)
- [Post Page ](https://gist.github.com/greeenboi/6241b3519d4fa1486167d66b9626cc8b)
  
***

## Backend Code

Post Table Schema
```sql
create table
  public.posts (
    id uuid not null default gen_random_uuid (),
    title text null,
    tags text[] null,
    banner_url text null,
    content text null,
    votes integer null default 0,
    constraint posts_pkey primary key (id)
  ) tablespace pg_default;
```

