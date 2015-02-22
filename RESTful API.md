#This document describes the RESTful APIs

1. get store list <br />
>method: GET<br />
>argus: null<br />
>url:
```
http://128.199.64.217/stores
```
<br />
>return: array <br />

2. get store by store id <br />
>method: GET <br />
>argus: id <br />
>url:
```
http://128.199.64.217/store/:id 
```
<br />
>return: json<br />

3. get store by store name <br />
>method: GET <br />
>argus: storename <br />
>url:
```
http://128.199.64.217/store/byname/:storename
```
<br />
>return: json<br />

4. get prodoct list <br />
>method: GET<br />
>argus: null<br />
>url:
```
http://128.199.64.217/products
```
<br />
>return: array <br />

5. get product by product id <br />
>method: GET <br />
>argus: id <br />
>url:
```
http://128.199.64.217/product/:id 
```
<br />
>return: json<br />

6. get products by store name <br />
>method: GET <br />
>argus: storename <br />
>url:
```
http://128.199.64.217/products/:storename
```
<br />
>return: json<br />

7. get addon list<br />
>method: GET <br />
>argus: null <br />
>url:
```
http://128.199.64.217/addons
```
<br />
>return: json<br />

8. get favourite store name list by username<br />
>method: GET <br />
>argus: username <br />
>url:
```
http://128.199.64.217/favstores/:username
```
<br />
>return: json<br />

9. get favourite product id list by username and storename<br />
>method: GET <br />
>argus: username, storename<br />
>url:
```
http://128.199.64.217/favproducts/:username/:storename
```
<br />
>return: json<br />

