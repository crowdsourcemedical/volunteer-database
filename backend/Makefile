.PHONY: all
all:
	@echo To run unit tests, do "make unit"
	@echo To run integration tests, do "make integration"

.PHONY: unit
unit:
	@echo Running unit tests ...
	@docker run -ti --rm -v `pwd`:/app crowdsourcemedical_backend pytest

.PHONY: integration
integration:
	@echo Error: Not yet implemented
	@exit 1
