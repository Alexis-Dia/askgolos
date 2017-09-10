#!/bin/bash

mongo-connector -m 0.0.0.0:27017 -n steemdb.comment -t http://solr:8983/solr/askgolos -d solr_doc_manager --auto-commit-interval=0 --oplog-ts=/oplog.ts -a askgolos -p askgolos

#cat /mongo-connector.log