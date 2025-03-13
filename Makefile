test:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watchAll

cover:
	npx jest --coverage

lint:
	npx eslint .

fix:
	npx eslint --fix .

start:
	npm start

build:
	npm run build