
default: dev-env
dev-env:
	ng serve

release:
	ng build --base-href ./
	mkdir -p docs
	rm -fr docs/*
	cp -r dist/sas-exam-unito/* docs
