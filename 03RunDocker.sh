#!/bin/bash
sudo docker run -it -p 5478:5478 --name skaldbot -d skaldbot && sudo docker exec -t skaldbot echo "Container Is Running"