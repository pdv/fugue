
clean:
	lein do clean
	rm -rf docs

dev:
	lein figwheel

build:
	lein do clean, cljsbuild once

gh-pages:
	cp -r resources/public docs
	git commit -am "Deploy"
	git push origin master

full-deploy: clean build gh-pages

