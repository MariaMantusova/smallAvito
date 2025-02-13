.PHONY: start
start:
	(cd ./server && npm start &) && (npm start)