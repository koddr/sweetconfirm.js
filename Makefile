.PHONY: gh-pages

gh-pages:
	rm -rf ./site \
	&& mkdocs build \
	&& cd ./site \
	&& git checkout gh-pages \
	&& git init \
	&& git add .
	@echo "[✔️] Docs was created and wait for deploy to gh-pages branch!"
