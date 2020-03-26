.PHONY: all
all:
	@echo These targets use Docker, so you can run them locally on your machine
	@echo
	@echo To run unit tests, do "make unit"
	@echo To run integration tests, do "make integration"

.PHONY: unit
unit:
	@echo Running unit tests ...
	@docker run -ti --rm -v `pwd`:/app -e ENV_NAME=test css_backend pytest -v -s

.PHONY: integration
integration:
	@echo Error: Not yet implemented
	@exit 1
