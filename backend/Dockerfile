FROM ubuntu:18.04
MAINTAINER hem.adtigo@gmail.com

RUN apt-get update -y
RUN apt-get install python3-pip -y

COPY requirements.txt requirements.txt
COPY ***** /opt/

RUN pip3 install -r requirements.txt
WORKDIR /opt/

CMD ["flask", "run", "--host=0.0.0.0"]
