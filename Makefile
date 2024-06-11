
default: dev-env
dev-env:
	ng serve

release:
	ng build --base-href "https://matteo-dinoia.github.io/Unito-Questionario-Esame-Sas/docs"
	mkdir -p docs
	rm -fr docs/*
	cp -r dist/sas-exam-unito/* docs
