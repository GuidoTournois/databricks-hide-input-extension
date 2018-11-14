def insert_password():
  dbutils.widgets.text('password','')

def set_password():
  pswd = dbutils.widgets.get('password')
  dbutils.widgets.removeAll()
  return pswd
