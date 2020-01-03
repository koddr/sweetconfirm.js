.PHONY: gh-pages

gh-pages:
	rm -rf ./site \
	&& mkdocs build \
	&& git checkout gh-pages \
	&& git fetch \
	&& git checkout master -- site \
	&& cp -R ./site/* ./ \
	&& rm -rf ./site
	@echo "[✔️] Docs was created and wait for deploy to gh-pages branch!"
