
Login to DB

```shell
mysql -u root -p
```

```sql
show databases;

create database sampledb3;

create user sampleuser3 identified by 'samplepass3';

grant all privileges on sampledb3.* to sampleuser3;
```

After that, logout of mysql (exit, or Ctrl D) and login again with the new user


```shell
mysql -u sampleuser3 -p
```
