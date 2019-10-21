#!/usr/bin/env bash
set -e

echo "executing entrypoint"
echo ${HOSTNAME} > id

exec "$@"
