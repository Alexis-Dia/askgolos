FROM python:3.5-slim

RUN pip install 'mongo-connector[solr]'

#
## Installing Mongo Connector which will connect MongoDB and Elasticsearch
#RUN pip install 'mongo-connector[solr]'
#
COPY startup.sh /tmp/
#
##COPY mongo /usr/bin/
##RUN chmod a+x /usr/bin/mongo
#
##VOLUME /data
#
#
## Sample usage when no commands is given outside
CMD ["/bin/bash", "/tmp/startup.sh"]
