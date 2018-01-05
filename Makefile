TITLE="Rick's Favourite Links"

.PHONY: all

index.html: index.py index.csv
	python index.py index.csv index.html $(TITLE)

all:
	python index.py index.csv index.html $(TITLE)
	make -C computer all
	make -C entertainment all
	make -C government all
	make -C health all
	make -C money all
	make -C news all
	make -C reference all
	make -C services all
	make -C unclassified all
