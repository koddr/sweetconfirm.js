# Demo on localhost

You may serve downloaded repository by simple Python 3 CLI snippet (for macOS/Linux/Windows WSL).

First, clone repository:

```console
git clone https://github.com/koddr/sweetconfirm.js.git
cd sweetconfirm.js
```

Let's serve it (with Python 3, for example):

```console
python3 -m http.server 8080 --bind 127.0.0.1
```

And now, go to browser to see `SweetConfirm.js Example` page:

```console
# 01_simple.html
http://127.0.0.1:8080/examples/01_simple.html

# 02_fetch.html
http://127.0.0.1:8080/examples/02_fetch.html
```
