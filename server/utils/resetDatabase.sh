#!/bin/bash
DATABASE_NAME=customstagingsdev

echo "Dropping database 🚀 "
psql postgres -c "drop database ${DATABASE_NAME}"

echo "creating a new database 🚀 "
psql postgres -c "create database ${DATABASE_NAME}"

echo "Running migrations in database 🚀 "
npx knex migrate:latest

echo "Running knex seed command 🚀 "
npx knex seed:run

