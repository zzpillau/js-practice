test:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watchAll

cover:
	npx jest --coverage

lint:
  npm eslint .