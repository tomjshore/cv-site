# tomjshore website

## prerequisite
You will need node and npm installed.

Also install grunt, bower
`sudo npm install grunt bower -g`

## To Test
To run all javascript tests enter the following
```
cd frontend
npm install
bower install 
grunt test
```
For java tests it's 
`mvn test`

## To run a preview 
```
cd frontend
npm install
bower install
grunt build
cd ..
mvn spring-boot:run
```

## To build
```
cd frontend
npm install
bower install
grunt build
cd ..
mvn package
```