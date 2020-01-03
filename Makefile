.PHONY: gh-pages

gh-pages:
	rm -rf ./site \
	&& mkdocs build \
	&& cd ./site \
	&& git checkout gh-pages \
	&& git init \
	&& git add . \
	&& git commit -m "Deploy docs" \
<<<<<<< Updated upstream
	&& git push
=======
	&& git push origin master:gh-pages
>>>>>>> Stashed changes
	@echo "[✔️] Docs was deployed to gh-pages branch!"
