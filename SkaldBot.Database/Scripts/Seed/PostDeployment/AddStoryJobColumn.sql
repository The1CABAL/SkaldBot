﻿--ADDED ON 8/8/2020
--IF THE PIPELINE HAS RUN SINCE, THIS CAN BE REMOVED

ALTER TABLE CodeServers
ADD WeeklyStory bit DEFAULT ((0)) NOT NULL