
default: dev-env
dev:
	ng serve

release:
	ng build --base-href ./
	mkdir -p docs
	rm -fr docs/*
	cp -r dist/sas-exam-unito/* docs
