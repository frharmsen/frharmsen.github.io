TITLE="Money - Rick's Favourite Links"

.PHONY: all

index.html: ../index.py index.csv
	python ../index.py index.csv index.html $(TITLE)

all:
	python ../index.py index.csv index.html $(TITLE)
	make -C banks all
	make -C condo all
	make -C shopping all
	make -C utilities all
