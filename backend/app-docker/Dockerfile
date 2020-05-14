FROM ubuntu:18.04
MAINTAINER hem.adtigo@gmail.com

RUN apt-get update -y
RUN apt-get install python3-pip -y

COPY requirements.txt requirements.txt
COPY app /opt/

RUN pip3 install -r requirements.txt
RUN apt-get install -y libsm6 libxrender-dev libxext6
RUN pip3 install opencv-python
WORKDIR /opt/

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]
