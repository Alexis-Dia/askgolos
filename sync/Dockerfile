FROM python:3.5-slim

RUN apt-get update && \
    apt-get install -y git make gcc libssl-dev libgmp-dev python-dev libxml2-dev libxslt1-dev zlib1g-dev

RUN pip install steem steem-piston scrypt pymongo

COPY . /src

CMD ["python", "/src/sync.py"]