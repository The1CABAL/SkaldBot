FROM python:3.7
ADD . ./SkaldBot
WORKDIR /SkaldBot

RUN apt-get update && \
	apt-get install --assume-yes ffmpeg && \
	apt-get install --assume-yes nodejs npm && \
	npm install -g vue/cli && \
	npm install -g serve

EXPOSE 5478
RUN pip install --upgrade pip
RUN pip install -r ./requirements.txt
CMD ["sh", "./04StartApps.sh"]
