TITLE="Entertainment - Rick's Favourite Links"

.PHONY: all

index.html: ../index.py index.csv
	python ../index.py index.csv index.html $(TITLE)

all:
	python ../index.py index.csv index.html $(TITLE)
	make -C ebooks all
	make -C games all
	make -C social all
	make -C tv all
