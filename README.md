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

Download the contents of this repo. Navigate in chrome to extensions, activate developer mode and select 'Load Unpacked'. Now select the folder of the repo. 
