#!/bin/bash
# Pre-commit hook: lint and test

echo "Running linters..."
npm run lint || exit 1
pytest || exit 1
echo "All checks passed."
