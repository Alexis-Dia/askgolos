#!/bin/bash

mongo-connector --unique-key=id -n solr.askgolos -m mongo:27017 -t http://solr:8983/solr/askgolos -d solr_doc_manager
#mongo-connector --auto-commit-interval=0 --oplog-ts=/data/oplog.ts -m ${mongo}:${mongoport} -t ${elasticsearch}:${elasticport} -d elastic_doc_manager