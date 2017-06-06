#!/bin/bash


clear
echo "Creando la base de datos y usario, ingrese la contrasena del usuario 'root:'"
echo
echo
mysql -u root -p -e "CREATE DATABASE drupal_commerce; GRANT ALL PRIVILEGES ON drupal_commerce.* TO 'drupaluser'@'localhost' IDENTIFIED BY 'drupalpassword'; FLUSH PRIVILEGES;"

