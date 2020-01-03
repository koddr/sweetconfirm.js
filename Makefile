.PHONY: gh-pages

gh-pages:
	rm -rf ./site \
	&& mkdocs build \
	&& git checkout gh-pages \
	&& cd ./site \
	&& git init \
	&& git add . \
	&& git commit -m "Deploy docs"
	@echo "[✔️] Docs was created and wait for deploy to gh-pages branch!"
