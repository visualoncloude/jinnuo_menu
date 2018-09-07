let cfg0 = {
        "host":"localhost",
        "user":"root@localhost",
        "password":"Montreal107#",
        "database":"test"
};
var connection = pkg.mysql.createConnection(cfg0);
connection.connect();
var str = "SHOW TABLES; ";

connection.query(str, function (error, results, fields) {
  connection.end();
  if (error) {
    res.send({status:'error', value:error.message});
  } else {
    res.send({status:'success', value:results});
  }
});
