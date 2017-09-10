rs.initiate( {
   _id : "golos",
   members: [ { _id : 0, host : "localhost:27017" } ]
});

rs.status();

db.getSiblingDB("admin").createUser({
  user: "askgolos",
  pwd: "askgolos",
  roles: ["backup"]
});