# Host info app

This is just a demo NodeJS app that shows some capabilities to the user.

## Use cases

This app can be used to get some basic information about the environment host system where it is running. The base
scenario is to deploy many replicas of the application in a Kubernetes cluster. It is possible to scale the application
as the only persistent state is the number of visitors but it is something related to the single instance of the
application, not globally throught all replicas. Doing so, it is possible to monitor which instance is responding and
from which host

## HTML pages

- /
    - Shows an hello-world message

## REST APIS

Rest APIs are available under: **/api/v1/env/** and are:

- /api/v1/env/hostname
    - **GET**
        - Returns the hostname of the host where the application is running on
- /api/v1/env/localipaddr
    - **GET**
        - Returns the local IP address of the host where the application is running on
- /api/v1/env/localtime
    - **GET**
        - Returns the local Time of the host where the application is running on