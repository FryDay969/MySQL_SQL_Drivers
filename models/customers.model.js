const sql = require('./db.js');

const Customer = (customer) => {
    this.name = customer.name;
    this.lastname = customer.lastname
}

Customer.getbyId = (customerId,result) => {
    sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
        if(err){
            console.log ("Error");
            result (err, null);
        }
        if (res.length){
            result (null,res);
        }
        result (null,null);
    })
}

Customer.postCustomer = (newCustomerId, newCustomerName, newCustomerLastName, result) => {
    sql.query(`INSERT INTO customers (id, name, lastname) VALUES (${newCustomerId}, "${newCustomerName}", "${newCustomerLastName}");`, (err, res) => {
      
        if(err){
            console.log ("Error");
            result (err, null);
        }
        if (res){
            result (null,res);
        }
        result (null,null);
    })
}

Customer.updateInfo = (newCustomerName, newCustomerLastName, customerId, result) => {
    sql.query(`UPDATE customers SET name = '${newCustomerName}', lastname = '${newCustomerLastName}' WHERE id = ${customerId};`, (err, res) => {
        if(err){
            console.log ("Error");
            result (err, null);
        }
        if (res){
            result (null,res);
        }
        result (null,null);
    })
}

Customer.deleteCustomer = (customerId, result) => {
    sql.query(`DELETE FROM customers WHERE id = ${customerId};`, (err, res) => {
        if(err){
            console.log ("Error");
            result (err, null);
        }
        if (res){
            result (null,res);
        }
        result (null,null);
    })
}

module.exports = Customer;