FROM ubuntu:18.04
MAINTAINER hem.adtigo@gmail.com

RUN apt-get update -y
RUN apt-get install python3-pip -y

COPY requirements.txt requirements.txt
COPY app /opt/

RUN pip3 install -r requirements.txt
WORKDIR /opt/

RUN echo "Running Not-Pot"

CMD ["flask", "run", "--host=0.0.0.0"]
