#!/bin/bash
sudo docker run -it -p 8080:5480 --name skaldbotui -d skaldbotui && sleep 10 && sudo docker exec -t skaldbotui echo "Api Container Is Running"