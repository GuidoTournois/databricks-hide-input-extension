# databricks-hide-input-extension
This simple chrome extension alters type of input field to password.

## Reason for this extension
Databricks has a module called secrets. Using this module one can store and use secrets such as credentials within databricks, but in contrast to the name, these secrets can be seen by each databricks admin. 

We prefer for developers to use their own credentials to query from our databases, such that we can track who did what. This is especially relevant with the GDPR in place. Databricks' secrets module provides insufficient functionality for this purpose. 

## Solution

Our solution consists of 2 parts: 
- dbutils.widgets
- Chrome extension

First we create an input field using `dbutils.widgets.text('password','')`. Everything you type in this fiels is visible. That is not what we want. Using the chrome extension the password is hidden. 

## How to use
put the code from 'password_module.py' in a databricks folder, for example /utils/

Download the contents of this repo. Navigate in chrome to extensions, activate developer mode and select 'Load Unpacked'. Now select the folder of the repo. The extension should now be added to chrome.

Restart google Chrome.

From within your databricks file add the following:
`%run /utils/password_module`

Once you have done that, you will have the following two functions available:
`insert_password()` and `set_password()`. Note the two should be in different cells. Note 2, your password is not remembered, once you call set_password the input widget is deleted together with your password. 

Due to the way widgets are implemented databricks, if you type in your password and press enter (and thus set the widget), the cell in which set_password() is used (the cell which uses the input from the widget) will be automatically run. Most of the time that is.

Below an example is given.

```
# Databricks notebook source

insert_password()

# COMMAND ----------

jdbcUrl = ('jdbc:sqlserver://' + URL+ ':1433;database=' + database+ ';')
    
connectionProperties = {
  "user" : username,
  "password" : set_password(),
  "driver" : "com.microsoft.sqlserver.jdbc.SQLServerDriver"
}
df = spark.read.jdbc(jdbcUrl, table=table_name , properties=connectionProperties)      

```
