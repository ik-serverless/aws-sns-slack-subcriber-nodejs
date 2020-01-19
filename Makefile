.ONESHELL:
.EXPORT_ALL_VARIABLES:
.PHONY: pre-commit changelog release test

SHELL := /bin/bash

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

hooks: ## Commit hooks setup
	@pre-commit install
	@pre-commit gc
	@pre-commit autoupdate

validate: ## Validate with pre-commit hooks
	@pre-commit run --all-files

changelog: ## Update changelog
	git-chglog -o CHANGELOG.md --next-tag `semtag final -s minor -o`

release: ## Create release version
	semtag final -s minor

validatejs: ## Validate solution
	@npm run format
	@npm run lint

test: NODE_ENV=development
test: LOG_LEVEL=ERROR
test: ## Test solution
	$(if ${LOG_LEVEL},,$(error Must pass LOG_LEVEL=<DEBUG|INFO|WARN|ERROR>))
	@npm test