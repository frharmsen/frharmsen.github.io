TITLE="Computer - Rick's Favourite Links"

.PHONY: all

index.html: ../index.py index.csv
	python ../index.py index.csv index.html $(TITLE)

all:
	python ../index.py index.csv index.html $(TITLE)
	make -C apps all
	make -C latex all
	make -C linux all
	make -C privacy all
	make -C programming all
	make -C unix all
