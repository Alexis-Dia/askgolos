import websocket
import json
from pymongo import MongoClient


def get_block(ws, i):
    ws.send(json.dumps({"id": 6, "method": "get_block", "params": [i]}))
    i += 1
    block = json.loads(ws.recv())
    res = block['result']
    operations = []
    if res and res.get('transactions'):
        for trans in res['transactions']:
            for operation in trans['operations']:
                operation[1]['block_id'] = trans['ref_block_num']
                operation[1]['type'] = operation[0]
                operation[1]['witness'] = res['witness']
                operations.append(operation[1])
    if operations:
        mdb.insert_many(operations)
    return i


def get_content(ws, author):
    return

mdb_client = MongoClient(host="localhost")
mdb = mdb_client["golos"]['blocks']

ws = websocket.WebSocket()
ws.connect("ws://10.168.0.217:8096")
# ws.send(json.dumps({"id":6,"method":"get_block","params":["9368019"]}))
max_block_id = mdb.find_one(sort=[("block_id", -1)])
if max_block_id:
    i = max_block_id['block_id']
else:
    i = 0
# result = json.loads(ws.recv())
while i > -1:
    i = get_block(ws, i)
    # block = get_block(ws, i)
