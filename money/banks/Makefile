TITLE="Banks - Money - Rick's Favourite Links"

.PHONY: all

index.html: ../../index.py index.csv
	python ../../index.py index.csv index.html $(TITLE)

all:
	python ../../index.py index.csv index.html $(TITLE)
	make -C market all
